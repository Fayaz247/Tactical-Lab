import React, { useState } from 'react';
import './TacticsPage.css';
import pencilImage from '../../Icons/pencil-solid-24.png';
import eraserImage from '../../Icons/eraser-solid-24.png';
import pictureImage from '../../Icons/images-regular-24.png';
import notesImage from '../../Icons/notepad-solid-24.png';
import moveImage from '../../Icons/move-regular-24.png';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

const TacticsPage = () => {

  const handleSaveImage = async () => {
    const fieldElement = document.getElementById('field');
    const canvas = await html2canvas(fieldElement);
    const imageData = canvas.toDataURL('image/jpeg');

    const blob = await new Promise((resolve) => {
      const img = new Image();
      img.src = imageData;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        canvas.toBlob((blob) => resolve(blob), 'image/jpeg');
      };
    });
    saveAs(blob, 'tactics.jpg');
  };

  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [players, setPlayers] = useState([
    { id: 1, x: 50, y: 190 }, //gk
    { id: 2, x: 200, y: 50 }, //LB
    { id: 3, x: 125, y: 125 }, //LCB
    { id: 4, x: 125, y: 275 }, //RCB
    { id: 5, x: 200, y: 350 }, //RB
    { id: 6, x: 230, y: 190 }, //DM
    { id: 7, x: 300, y: 100 }, //LCM
    { id: 8, x: 300, y: 280 }, //RCM
    { id: 9, x: 400, y: 50 }, //LW
    { id: 10, x: 450, y: 190 }, //ST
    { id: 11, x: 400, y: 350 }, //RW
  ]);

  
  const [drawMode, setDrawMode] = useState(false); 
  const [drawingCoordinates, setDrawingCoordinates] = useState([]);
  const [activeMove, setActiveMove] = useState(false); 
  const [activePencil, setActivePencil] = useState(false); 
  const [activeEraser, setActiveEraser] = useState(false); 
  const [activePicture, setActivePicture] = useState(false); 
  const [activeNotes, setActiveNotes] = useState(false);
  
  

  const handleToolButtonClick = (clickedTool) => {
    setDrawingCoordinates([]);

    
    if (clickedTool === 'pencil' && activePencil) {
      setActivePencil(false);
    } else if (clickedTool === 'move' && activeMove) {
      setActiveMove(false);
    } else if (clickedTool === 'eraser' && activeEraser) {
      setActiveEraser(false);
      // Clear drawing lines when eraser tool is deactivated
      setDrawingLines([]);
    } else if (clickedTool === 'picture' && activePicture) {
      setActivePicture(false);
    } else if (clickedTool === 'notes' && activeNotes) {
      setActiveNotes(false);
    } else {
      // Set all tool states to inactive initially
      setActiveMove(false);
      setActivePencil(false);
      setActiveEraser(false);
      setActivePicture(false);
      setActiveNotes(false);
  
      // Set the clicked tool state to active
      if (clickedTool === 'pencil') {
        setActivePencil(true);
      } else if (clickedTool === 'move') {
        setActiveMove(true);
      } else if (clickedTool === 'eraser') {
        setActiveEraser(true);
      } else if (clickedTool === 'picture') {
        setActivePicture(true);
      } else if (clickedTool === 'notes') {
        setActiveNotes(true);
      }
    }
  }

  
  const toggleDrawMode = () => {
    setDrawMode(!drawMode);
    setSelectedPlayer(null); 
  };

  const handleMouseDown = (e, id) => {
    if (!drawMode) {
      setSelectedPlayer(id);
    }
  };

  const [drawingLines, setDrawingLines] = useState([]);
  
  const handleMouseMove = (e) => {
    if (drawMode && activePencil && e.buttons === 1) {
      const rect = e.currentTarget.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const offsetY = e.clientY - rect.top;
      
      setDrawingLines((prevLines) => [
        ...prevLines,
        { x: offsetX, y: offsetY }
      ]);
    }else if (!drawMode && selectedPlayer !== null) {
      const updatedPlayers = players.map((player) => {
        if (player.id === selectedPlayer) {
          const rect = e.currentTarget.getBoundingClientRect();
          const offsetX = e.clientX - rect.left;
          const offsetY = e.clientY - rect.top;
          
          const updatedX = Math.max(0, Math.min(rect.width - 20, offsetX));
          const updatedY = Math.max(0, Math.min(rect.height - 20, offsetY));
          return { ...player, x: updatedX, y: updatedY };
        }
        return player;
      });
      setPlayers(updatedPlayers);
    }
  };
  
  const handleMouseUp = () => {
    setSelectedPlayer(null);
  };

  const handleFormationButtonClick = (formation) => {
    const formationCoordinates = {
      "4-3-3": [
        { x: 50, y: 190 }, //GK
        { x: 200, y: 50 }, //LB
        { x: 125, y: 125 },//LCB
        { x: 125, y: 275 },//RCB
        { x: 200, y: 350 },//RB
        { x: 230, y: 190 },//DM
        { x: 300, y: 100 },//LCM
        { x: 300, y: 280 },//RCM
        { x: 400, y: 50 },//LW
        { x: 450, y: 190 },//ST
        { x: 400, y: 350 }//RW
      ],
      "4-4-2": [
        { x: 50, y: 190 }, //GK
        { x: 200, y: 50 }, //LB
        { x: 125, y: 125 },//LCB
        { x: 125, y: 275 },//RCB
        { x: 200, y: 350 },//RB
        { x: 260, y: 110 }, //LCM
        { x: 260, y: 280 }, //RCM
        { x: 380, y: 50 }, //LW
        { x: 450, y: 120 }, //ST
        { x: 450, y: 280 }, //ST
        { x: 380, y: 350 } //RW
      ],
      "4-2-3-1": [
        { x: 50, y: 190 }, //GK
        { x: 200, y: 50 }, //LB
        { x: 125, y: 125 },//LCB
        { x: 125, y: 275 },//RCB
        { x: 200, y: 350 },//RB
        { x: 260, y: 110 },//LCM
        { x: 260, y: 280 },//RCM
        { x: 350, y: 190 },//CAM
        { x: 380, y: 70 },//LW
        { x: 450, y: 190 },//ST
        { x: 380, y: 330 }//RW
      ],
      "3-4-3": [
        { x: 50, y: 190 }, //GK
        { x: 180, y: 70 }, //LCB
        { x: 125, y: 190 },//CB
        { x: 180, y: 330 },//RCB
        { x: 320, y: 360 },//RM
        { x: 260, y: 110 },//LCM
        { x: 260, y: 280 },//RCM
        { x: 320, y: 20 },//LM
        { x: 420, y: 80 }, //LW
        { x: 460, y: 190 }, //ST
        { x: 420, y: 320 } //RW
      ],
      "5-3-2": [
        { x: 50, y: 190 }, //GK
        { x: 220, y: 50 }, //LWB
        { x: 150, y: 100 },//LCB
        { x: 125, y: 190 },//CB
        { x: 150, y: 300 },//RCB
        { x: 220, y: 350 },//RWB
        { x: 260, y: 110 },//LCM
        { x: 260, y: 280 },//RCM
        { x: 350, y: 190 },//CAM
        { x: 450, y: 120 }, //ST
        { x: 450, y: 280 }, //ST
      ]
    };

    const updatedPlayers = players.map((player, index) => {
      if (formationCoordinates[formation][index]) {
        return {
          ...player,
          x: formationCoordinates[formation][index].x,
          y: formationCoordinates[formation][index].y
        };
      } else {
        return player; 
      }
    });
  
    setPlayers(updatedPlayers);
  };

  return (
    <div className="tactics-container">
      <div id="field" className={drawMode ? "drawing-mode" : ""} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
        {/* Render players */}
        {players.map((player) => (
          <div key={player.id} className="player" style={{ left: player.x + 'px', top: player.y + 'px' }} onMouseDown={(e) => handleMouseDown(e, player.id)}></div>
        ))}
        {/* Render drawing lines */}
        {drawMode &&
          drawingLines.map((coordinate, index) => (
            <div key={index} className="drawing-line" style={{ left: coordinate.x + 'px', top: coordinate.y + 'px' }}></div>
          ))}
      </div>
      <div className="formations">
        <button onClick={() => handleFormationButtonClick("4-3-3")}>4-3-3</button>
        <button onClick={() => handleFormationButtonClick("4-4-2")}>4-4-2</button>
        <button onClick={() => handleFormationButtonClick("4-2-3-1")}>4-2-3-1</button>
        <button onClick={() => handleFormationButtonClick("3-4-3")}>3-4-3</button>
        <button onClick={() => handleFormationButtonClick("5-3-2")}>5-3-2</button>
      </div>
      <div className={`tool-button ${drawMode ? 'active-draw-button' : ''}`} onClick={toggleDrawMode}>
        <div className="tool-button">
        <img
            src={moveImage}
            alt="Move"
            className={`tool-icon ${activeMove ? 'active' : ''}`} 
            onClick={() => handleToolButtonClick('move')}
          />
          <img
            src={pencilImage}
            alt="Pencil"
            className={`tool-icon ${activePencil ? 'active' : ''}`} 
            onClick={() => handleToolButtonClick('pencil')}
          />
          <img
            src={eraserImage}
            alt="Eraser"
            className={`tool-icon ${activeEraser ? 'active' : ''}`} 
            onClick={() => handleToolButtonClick('eraser')}
          />
          <img
            src={pictureImage}
            alt="Save" 
            className={`tool-icon ${activePicture ? 'active' : ''}`} 
            onClick={handleSaveImage}
          />
          <img
            src={notesImage}
            alt="Notes" 
            className={`tool-icon ${activeNotes ? 'active' : ''}`} 
            onClick={() => handleToolButtonClick('notes')}
          />
        </div>
      </div>
    </div>
  );
    
};

export default TacticsPage;

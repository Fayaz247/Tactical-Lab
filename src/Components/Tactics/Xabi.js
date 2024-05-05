import React, { useEffect } from 'react';
import './Tactics.css';

function Xabi() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="formation-page">
      <div className="formation-content">
        <h2>Xabi Alonso's Innovative 3-4-3 Tactical Setup</h2>
        <h3>Positional play</h3>
        <p>
          Xabi Alonso's innovative 3-4-3 tactical setup embodies a possession-oriented approach to football. The formation comprises three defenders centrally, supported by a quartet of midfielders and an attacking trio. Positioned just behind the lone striker, the two attacking midfielders play pivotal roles in crafting opportunities and finding the net. Meanwhile, the midfield is divided into two central and two wide players, with the former dictating play and the latter adding width to both offensive and defensive phases.
        </p>
        <img src="./media/343.jpg" alt="343" />
        <h3>Attacking</h3>
        <p>
          This tactical scheme aims to overwhelm opponents numerically in midfield, granting the team control over possession and dictating the rhythm of play. Placing the attacking midfielders in the half-spaces not only confounds marking attempts but also facilitates the creation of numerical advantages in central areas, opening up avenues for goal-scoring opportunities.
        </p>
        <h3>Defensive</h3>
        <p>
          Defensively, the formation boasts resilience. The trio of central defenders provides a sturdy foundation, while the wing-backs drop deep to bolster the defensive line, effectively forming a compact back five when under pressure. This defensive setup thwarts opposition attacks through the central channels, making it arduous for adversaries to breach.
        </p>
        <h3>Tactical Evolution</h3>
        <p>
          Xabi Alonso's 3-4-3 formation has garnered considerable success, owing to its adaptability and effectiveness against various opposition styles. However, its triumph hinges on player suitability and rigorous training ground implementation, essential for its successful execution.
        </p>
        <p>
        Leverkusen, led by Gerardo Seoane prior to Alonso, mostly used a 4-4-2 formation but would sometimes switch to other configurations such as the 4-2-3-1 or 4-4-1-1. They even tested with a 3-5-2 formation in some match scenarios, which helped develop Alonso's strategy.
        </p>
        <h3>Xabi's Preference</h3>
        <p>
        Alonso's preferred formation is 3-4-3, but it can also be used defensively to switch to a 5-4-1 or 5-2-3. But rather than the formation itself, the players' interpretation and application of the system will determine how successful they are.
        </p>
        <img src="./media/532.jpg" alt="532" />
        <p>
        The five defenders exhibit different behaviors based on the team's ball-control goals and pressing tactics. Alonso's Leverkusen constantly adopt a proactive stance in both the attacking and defensive phases, seeking to hold possession in the opposition's half, in spite of the formation changes.
        </p>
        <h3>Challenges</h3>
        <p>
          Their mixed-marking out-of-possession strategy has presented difficulties, though, since it leaves gaps behind the midfield that opponents can take advantage of. Forms like the 5-2-3 or 5-4-1 offer improved defensive balance, especially on the wings, to counter this. Alonso places a strong emphasis on his players' tactical awareness, asking them to shift positions in order to maximize their strength and minimize their defensive weaknesses.
        </p>
      </div>
    </div>
  );
}

export default Xabi;

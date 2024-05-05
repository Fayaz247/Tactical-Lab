import React from 'react'
import CardItem from './LearnItem'
import './LearnItem.css'

function LearnPage() {
  return (
    <div className='cards'>
        <h1>Dive Deep into Football Tactics</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem src="./media/pep.jpg" text="Explore Pep Guardiola's 4-3-3 system "
                    label="4-3-3" path="/pep"/>
                    <CardItem src="./media/mourinho.jpg" text="Dive deep into Mourinho's 4-4-2 system"
                    label="4-4-2" path="/jose"/>
                </ul>
                <ul className="cards__items">
                    <CardItem src="./media/carlo.jpg" text="Carlo Ancelotti's Approach to the 4-2-3-1 System"
                    label="4-2-3-1" path="/carlo"/>
                    <CardItem src="./media/xabi.jpg" text="Analysis on Xabi Alonso's 3-4-3 System"
                    label="3-4-3" path="/xabi"/>
                    <CardItem src="./media/conte.jpg" text="Antonio Conte's Tactics for the 5 back system"
                    label="5-2-3" path="/conte"></CardItem>
                </ul>
                
            </div>
        </div>
    </div>
  )
}

export default LearnPage
import React, { useEffect } from 'react';
import './Tactics.css'


function Carlo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="formation-page">
      <h2>Carlo Ancelotti's 4-2-3-1 in More Detail</h2>
      <div className="formation-content">
        <h3>Carlo Ancelotti</h3>
        <p>Real Madrid under Carlo Ancelotti has had a significant shift in approach for the 2023-2024 season. The squad has switched from a 4-3-3 shape to a 4-3-1-2 configuration after veteran striker Karim Benzema left. Vinícius Júnior now plays as a central forward instead of his customary wide left position, and Jude Bellingham, who recently joined with Borussia Dortmund, tends to take up the number 10 spot.</p>
        <p>Adapting strategies is nothing new to Ancelotti, an experienced tactician.</p>
        <h3>Early Days</h3>
        <p>During his initial years as a head coach, Ancelotti was adamant about the 4-4-2 formation's. But in an attempt to make the most of Zidane's skills, he switched to the 4-3-2-1 system, also known as the "Christmas tree," when he managed for Juventus from 1999 to 2001. Even if the results were respectable, they were not as successful as expected because Juventus finished Serie A as runners-up, behind Lazio and then Roma in two consecutive complete seasons.</p>
        <h3>Usage of the 4-2-3-1</h3>
        <p>After two seasons in the Premier League, Ancelotti led Paris Saint-Germain for two more seasons in Ligue 1. The group had some offensive players who were better suited for a vertical style of play. Around this time, Ancelotti used a 4-2-3-1 formation, with Javier Pastore mostly playing at number 10, and two of Ezequiel Lavezzi, Lucas Moura, Nenê, and Jérémy Ménez in wider positions on either side. Zlatan Ibrahimovic took over as the number nine in Ancelotti's second season, after Kevin Gameiro had started the first with PSG winning the league.</p>
        <img src="./media/4231.jpg" alt="4231" />
        <h3>Advantages of the system</h3>
        <p>A midfield three that can outnumber a midfield pair can be found in the 4-2-3-1 formation. The number 10 becomes a focal point when positioned in between the lines to receive the ball in space, especially when facing a flat midfield configuration.</p>
        <p>The formation creates a strong midfield base with its double pivot, which allows for wide rotations and provide cover for advancing full-backs. The double pivot also provides an additional layer of defensive assurance by supporting key defensive zones during transitions.</p>
        <p>The 4-2-3-1 formation offers a disciplined defensive block that is especially useful in mid- or low-block situations, making it difficult for opponents to break through centrally. Additionally, the formation creates triangle passing patterns that are in line with a possession-oriented style of play by providing a variety of passing options and angles that facilitate playing out of the back.</p>
        <img src="./media/carlo2.jpg" alt="carlo2" />
        <h3>Disadvantages of the 4-2-3-1</h3>
        <p>When up against opposing center-backs, a lone center-forward frequently finds themselves alone and at a numerical disadvantage. Additionally, a double pivot in midfield can hinder attacking moves by delaying support, which makes it difficult to apply pressure for an extended period of time.</p>
        <p>A four-man midfield configuration, such the 4-4-2 diamond formation, which can overwhelm the midfield, may pose a challenge to the central trio in midfield. Furthermore, in defensive phases, if the number 10 stays high, the double pivot can have trouble managing an overloaded midfield.</p>
        <p>Wide areas on the flanks are vulnerable to sudden changes in play during counterattacks, particularly if both full-backs have moved forward. Although one double pivot player can cover an advanced full-back, moving across the field exposes the other pivot player, which may allow opponents to take advantage of gaps and execute successful changes of play.</p>
      </div>
    </div>
    
    
  )
}

export default Carlo
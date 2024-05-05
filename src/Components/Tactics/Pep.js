import React, { useEffect } from 'react';
import './Tactics.css';

function Pep() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="formation-page">
      <h2>The 4-3-3 System Explained</h2>
      <div className="formation-content">
        <h3>Formation Explanation</h3>
        <p>
          The 4-3-3 formation is a tactical arrangement where three midfield players are positioned behind four defenders, comprising two center-backs and two full-backs. This midfield typically consists of one holding midfielder and two more advanced midfielders. In the attacking line, two wide attackers flank a lone center-forward.
        </p>
        <img src="./media/433.jpg" alt="433" />
        <h3>Historical Origin</h3>
        <p>
          The 4-3-3 structure originated from Brazil's adoption of a 4-2-4 formation following their loss in the 1950 World Cup final. By 1962, Brazil had transitioned to a 4-3-3 formation, with Mário Zagallo moving from the front line to midfield. During the 1966 World Cup, England utilized a 4-1-2-3 formation featuring a specialized defensive midfielder.
        </p>
        <h3>Notable Influence</h3>
        <p>
          Ajax and the Netherlands teams led by Rinus Michels played a significant role in popularizing the 4-3-3 formation during the 1970s. Their innovative strategies, including Total Football, inspired coaches like Johan Cruyff to adopt the 4-3-3 system.
        </p>
        <img src="./media/pep2.jpg" alt="pep2" />
        <h3>Under Possession Wingers' Duties</h3>
        <p>
          In a 4-3-3 formation, wingers aim to create one-on-one opportunities with full-backs by cutting inside or delivering crosses from wide areas to generate scoring chances. The lone center-forward moves across the pitch to exploit gaps in the opposition's defense and create space for teammates. While the defensive midfielder facilitates ball circulation and play switches, midfielders also contribute to attacking movements and provide passing options for build-up play.
        </p>
        <h3>Important Illustrations</h3>
        <p>
          Pep Guardiola's Barcelona squads are renowned for utilizing the 4-3-3 configuration. Guardiola's teams aimed to dominate possession and overload key midfield areas by deploying wide and tall wingers such as Thierry Henry, Pedro, and Lionel Messi. Incorporating a dropping center-forward like Messi or Cesc Fàbregas further enhanced their midfield control and attacking prowess.
        </p>
      </div>
    </div>
  );
}

export default Pep;

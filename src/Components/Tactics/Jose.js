import React, { useEffect } from 'react';
import './Tactics.css'

function Jose() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="formation-page">
      <h2>Jose's 4-4-2 System in Depth</h2>
      <div className="formation-content">
        <h3>Jose Mourinho</h3>
        <p>
        Jose Mourinho has used a variety of formations to maximize his players' skills during his managerial tenure. The 4-4-2 with a diamond midfield is one of the more well-known lineups he has used.
        </p>
        <img src="./media/442.jpg" alt="442" />
        <h3>Philosophy</h3>
        <p>
        Because of his flexible style of play, Mourinho can adjust his strategy to fit the needs of his team and the unique circumstances of each game. He can read the game well and adjust quickly to changing circumstances. For example, he can go to a more defensive position in a middle or low block or employ a high-pressing tactic similar to what he did at Porto and his first stay at Chelsea.
        </p>
        <h3>Attacking Phase</h3>
        <p>
          As demonstrated by Real Madrid's brilliant second season, Mourinho's sides can either dominate the attacking phase or give up possession to the opposition and concentrate on counterattacking. Both the opponent team's strengths and Mourinho's personnel pool are factors in these tactical choices.
        </p>
        <p>
          It is difficult to predict Mourinho's attacking strategies because he uses a variety of techniques, from short passing to directing long balls to break through the opposition's defense. Interestingly, Mourinho typically favors using right-footed players on the left flank. Examples of these players are Eden Hazard of Chelsea and Cristiano Ronaldo of Real Madrid. Mourinho uses this approach to his benefit as these players frequently drift inside to gain numerical advantages.
        </p>
        <p>
          One of the main ideas in Mourinho's tactical playbook—which is thoroughly discussed in this book—is "Creating an Overload with a Winger Shifting Across." This strategy entails timing the wingers' inward advances to the inside while simultaneously forcing the full-back forward on the outside. The forward can generate an overload by positioning himself in this zone. This will allow the winger to receive the ball unmarked and start attacking plays, with the ultimate goal being a last pass or shot on goal.
        </p> 
        <img src="./media/mourinho2.jpg" alt="mourinho2" />
        <h3>Defensive Control</h3>
        <p>
        José Mourinho occasionally employed a low block while managing Tottenham Hotspur, Manchester United, and Inter Milan in the beginning of his career. He gave his wingers instructions to track the opposition full-backs in order to give the United defense more stability. As a result, his squad frequently formed a back line of six. In contrast, Mourinho's 4-2-3-1 against Tottenham would use a double pivot to close gaps in the defense and form a unit of six, with the wingers narrowing to form a three in the second line.
        </p>
        <h3>Advantages of the Low Block</h3>
        <p>
        A well-executed low block makes it very tough for the opponent to get clear-cut opportunities to score goals. It is extremely difficult for the opposition to move the ball into central areas where they have a better chance of scoring when a side has a large number of players positioned close to their own goal.
        </p>
        <h3>The Disadvantages</h3>
        <p>
        Playing from a low block gives up a lot of territory, giving the other team the opportunity to dominate possession and take up to two thirds of the pitch.
        </p>
        <p>
        The distance to goal after a regain is noticeably larger than it is for the other two tactics, which are a mid-block and a high press. It takes swift players and players with enough endurance to rebound quickly from a lost ball. Moreover, concentration levels are measured for a longer period of time in a low block. A single defensive blunder or a misplaced play is probably going to cost more than when teams are positioned higher up the field.
        </p>
        <p>
        For the benefit of the team, all ten outfield players must give up their lives to execute a low block. This may indicate that the best offensive players are typically positioned defensively, unable to have an impact on the game once the ball has been won.
        </p>
        </div>
      </div>
  )
}


export default Jose
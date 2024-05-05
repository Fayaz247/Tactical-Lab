import React from 'react';
import './AboutPage.css';

function AboutPage() {
  return (
    <div className="about">
      <div className="about-container">
        <div className="introduction">
          <h1>Empowering coaches, enhancing strategies: Welcome to Tactical Lab</h1>
          <p>At Tactical Lab, we're passionate about football coaching and dedicated to providing coaches with the tools they need to succeed. Explore our interactive tactical board and unlock the potential of your coaching strategies.</p>
        </div>
        <div className="story">
          <h2>Personal Journey</h2>
          <div className="text">
            <p>As a lifelong football enthusiast and dedicated coach, I've experienced firsthand the challenges coaches face in developing effective tactics and strategies. Inspired by my own journey and a desire to help fellow coaches, I founded Tactical Lab to bridge the gap between theory and practice in football coaching.</p>
            <p>Tactical Lab was created as a way to empower coaches of all skill levels because of its dedication to excellence and passion for the game. Our goal is to arm coaches with the knowledge and resources necessary to successfully navigate the complexities of contemporary football coaching by utilising cutting-edge technology and technologies.</p>
            <p>Our goal is to make elite-level coaching ideas and approaches more accessible to all coaches, so they may all become better coaches and help their teams reach their greatest potential. Tactical Lab is here to help you at any stage of your coaching career, regardless of how experienced you are or how recently you began.</p>
          </div>
          <div className="image">
            <img src="./media/zidane.jpg" alt="" />
          </div>
        </div>
        <div className="vision">
          <h2>Vision and Mission</h2>
          <div className="text">
          <p>Our vision at Tactical Lab is to revolutionize the way coaches approach tactical analysis and player development. We strive to empower coaches of all levels with the knowledge and resources they need to excel on the field and make a lasting impact on their teams.</p>
          <p>Our mission is to provide coaches with a comprehensive platform for learning, collaboration, and innovation in football coaching. Through our interactive tactical board and curated resources, we aim to foster a community of passionate coaches dedicated to continuous improvement and success.</p>
          <div className="image">
            <img src="./media/saf.jpg" alt="" />
          </div>
          </div>
        </div>
        <div className="board">
          <h2>Interactive Tactical Board Feature</h2>
          <p>Experience the power of our interactive tactical board, a cutting-edge tool designed to enhance your coaching strategies and elevate your team's performance. Visualize plays, analyze formations, and collaborate with fellow coaches like never before.</p>
          <ul>
            <li>- Plan and execute plays with precision</li>
            <li>- Analyze opponent strategies and adapt in real-time</li>
            <li>- Engage players in interactive training sessions</li>
            <li>-x Collaborate with fellow coaches to refine tactics and strategies</li>
          </ul>
        </div>
        <div className="reviews">
          <h2>Our Reviews</h2>
          <div className="reviews-container">
            <div className="box">
              <img src="./media/saf2.jpg" alt="review 1" />
              <h2>Sir Alex Ferguson</h2>
              <p>An amazing experience using this website. Very user-friendly and easy to use overall. Used the tactics board to plan my last match!</p>
            </div>
            <div className="box">
              <img src="./media/conte3.jpg" alt="review 2" />
              <h2>Antonio Conte</h2>
              <p>Great coaching content, easily accessible and a very intuitive tactical board design!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;

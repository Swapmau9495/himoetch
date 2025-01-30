import React, { useEffect } from 'react';
import './proto.css';

import monitoring from './monitoring.png';
import breathwave from './Breathwave.png';
import breatstrategies from './Breathstrategies.png';
import Portable from './Portable.png';

const BreathPower = () => {
  useEffect(() => {
    const headline = document.querySelector('.headline');
    const words = headline.innerText.split(' ');
    headline.innerHTML = words.map(word => `<span class="first-letter">${word.charAt(0)}</span>${word.slice(1)}`).join(' ');
  }, []);

  return (
    <div className="container">
      <h1 className="headline text-center text-4xl font-bold text-black mb-8" style={{ fontFamily: "Spectral SC, serif" }}>
      KEY FEATURES  <span className="text-black">YOU'LL</span>  LOVE
      </h1>
      <div className="content">
        {/* <img src={meditationImage} alt="Meditation" className="meditation-image" />
        <div className="text-container">
          <div className="text-section">
            <p>Your breathing isn’t just about oxygen in and carbon dioxide out—it’s a complex behavior shaped by triggers, habits, and physiology. When misaligned, these habits can:</p>
            <ul>
              <li>
                <img src={headache} alt="headache" className="sub-image" />
                <div className="text-content">
                  <strong style={{marginTop: '5px'}}>Compromise your health:</strong>
                  <span>Triggering anxiety, fatigue, and physical discomfort.</span>
                </div>
              </li>
              <li>
                <img src={lowbattery} alt="lowbattery" className="sub-image" />
                <div className="text-content">
                  <strong style={{marginTop: '5px'}}>Disrupt your performance:</strong>
                  <span>Causing focus deficits, memory issues, and suboptimal endurance.</span>
                </div>
              </li>
              <li>
                <img src={musclepain} alt="musclepain" className="sub-image" />
                <div className="text-content">
                  <strong style={{marginTop: '5px'}}>Exacerbate existing conditions:</strong>
                  <span>Like asthma, chronic pain, and even stress-related disorders.</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="footer">
            <p>Millions of people suffer the consequences of poor breathing habits. But you don’t have to be one of them. With the <strong>CapnoTrainer® GO</strong>, you’ll unlock a scientifically-backed pathway to breathing mastery.</p>
          </div>
        </div> */}
        
        <div className="container1">
  <div className="child">
  <img src={monitoring} alt="monitoring" className="sub-image" />

    <h2 className="nunito">Real-Time Monitoring</h2>
    <p className="nunitop">Track your breathing metrics<br/> like CO2 concentration,<br/> breathing rate, and rhythm.</p>
  </div>
  <div className="child">
  <img src={breathwave} alt="breathwave" className="sub-image" />

    <h2 className="nunito">Capnogram Visualization</h2>
    <p className="nunitop">Get instant feedback on<br/> your breathing mechanics<br/> and see the impact of<br/> adjustments in real-time.</p>
  </div>
  <div className="child">
  <img src={breatstrategies} alt="breatstrategies" className="sub-image" />

    <h2 className="nunito">Custom Learning Plans</h2>
    <p className="nunitop">Tailored strategies to help<br/> you unlearn bad habits<br/> and master new ones.</p>
  </div>

  <div className="child">
  <img src={Portable} alt="Portable" className="sub-image" />

  <h2 className="nunito">Interactive Practicums</h2>
  <p className="nunitop">Experiment with<br/> guided breathing<br/> challenges to align behavior<br/> with physiology.</p>
  </div>

  
  {/* <div className="child">
  <img src={Portable} alt="Portable" className="sub-image" />

    <h2 className="nunito">Interactive Practicums</h2>
    <p className="nunitop">Experiment with guided breathing<br/> challenges to align behavior<br/> with physiology.</p>
  </div> */}
</div>

      </div>
    </div>
  );
};

export default BreathPower;

import React, { useEffect } from 'react';
import './proto.css';

import meditationImage from './meditation.png';
import headache from './headache.png';
import lowbattery from './low-battery.png';
import musclepain from './muscle-pain.png';

const BreathPower = () => {
  useEffect(() => {
    const headline = document.querySelector('.headline');
    const words = headline.innerText.split(' ');
    headline.innerHTML = words.map(word => `<span class="first-letter">${word.charAt(0)}</span>${word.slice(1)}`).join(' ');
  }, []);

  return (
    <div className="container">
      <h1 className="headline text-center text-4xl font-bold text-black mb-8" style={{ fontFamily: "Spectral SC, serif" }}>
        DISCOVER THE <span className="text-black">HIDDEN POWER</span> OF YOUR BREATH
      </h1>
      <div className="content">
        <img src={meditationImage} alt="Meditation" className="meditation-image" />
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
        </div>
      </div>
    </div>
  );
};

export default BreathPower;

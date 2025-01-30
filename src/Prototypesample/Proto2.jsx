import React, { useEffect } from 'react';
import './proto.css';

import EliminateStress from './EliminateStress.png';
import EnhanceMental from './EnhanceMental.png';
import AchievePeakPerformance from './AchievePeakPerformance.png';
import ImprovePhysicalHealth from './ImprovePhysicalHealth.png';

const BreathPower = () => {
  useEffect(() => {
    const headline = document.querySelector('.headline');
    const words = headline.innerText.split(' ');
    headline.innerHTML = words.map(word => `<span class="first-letter">${word.charAt(0)}</span>${word.slice(1)}`).join(' ');
  }, []);

  return (
    <div className="container">
      <h1 className="headline text-center text-4xl font-bold text-black mb-8" style={{ fontFamily: "Spectral SC, serif" }}>
      What Can the CapnoTrainer®GO Do for You?
      </h1>
      <div className="content">
      
        <div className="container1">
        <div className="child2">
  <img src={EliminateStress} alt="EliminateStress" className="sub-image2" />
  <div className="imgfooter">
    <h2 className="nunito">Eliminate Stress<br/> and Anxiety</h2>
    <p className="nunitop" style={{ color: "white", fontSize: "14px" }}>
    Learn to control overbreathing,<br/> reduce hypocapnia,<br/>
      and maintain balance even in<br/> challenging situations.
    </p>
  </div>
</div>
  <div className="child2">
  <img src={EnhanceMental} alt="EnhanceMental" className="sub-image2" />
  <div className="imgfooter">
    <h2 className="nunito">Enhance Mental<br/> Clarity and Focus</h2>
    <p className="nunitop" style={{ color: "white", fontSize: "14px" }}>
    Boost oxygen and glucose supply<br/> to your brain by aligning<br/> your breathing mechanics.
    </p>
  </div> </div>
  <div className="child2">
  <img src={AchievePeakPerformance} alt="AchievePeakPerformance" className="sub-image2" />
  <div className="imgfooter">
    <h2 className="nunito">Achieve Peak Performance</h2>
    <p className="nunitop" style={{ color: "white", fontSize: "14px" }}>
    Whether you’re giving a presentation,<br/> running a marathon,<br/> or meditating, experience the benefits of a well-aligned breath.
    </p>
  </div></div>
  <div className="child2">
  <img src={ImprovePhysicalHealth} alt="ImprovePhysicalHealth" className="sub-image2" />
  <div className="imgfooter">
    <h2 className="nunito">Improve Physical Health</h2>
    <p className="nunitop" style={{ color: "white", fontSize: "14px" }}>
    Address symptoms like shortness of breath,<br/> dizziness, and fatigue by<br/> optimizing your acid-base physiology.
    </p>
  </div>
    </div>
</div>

      </div>
    </div>
  );
};

export default BreathPower;

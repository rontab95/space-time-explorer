import React from 'react';
import './Intro.css';

const Intro = () => {
  return (
    <div className="intro-container">
      <h1>Welcome to SpaceTime Explorer</h1>

      <p>
        <strong>SpaceTime Explorer</strong> is an interactive map that reveals the Earth's most mysterious locations — places where science, myth, and fiction collide. From ancient monuments rumored to distort time, to scientifically documented zones of gravitational anomalies, this project invites you to explore the planet’s most fascinating and unexplained phenomena.
      </p>

      <p>
        Track time portals, visualize temporal distortion zones, and uncover the secrets hidden in our world’s fabric of space and time. Whether you're a science geek, a conspiracy theorist, or a digital adventurer, your journey through SpaceTime begins here.
      </p>

      <h2>What is Time Drift?</h2>
      <p>
        <strong>Time Drift</strong> refers to how time flows differently in certain locations compared to a standard reference point — such as sea level or atomic time. This may be due to gravitational anomalies, magnetic disturbances, or unexplainable events.
      </p>

      <ul>
        <li>
          <strong>Scientific:</strong> Drift might be caused by altitude or gravitational time dilation. Even nanoseconds per day can affect satellite synchronization.
        </li>
        <li>
          <strong>Mythical:</strong> Folklore suggests time slips — stories of lost hours or people returning years later unchanged.
        </li>
        <li>
          <strong>Fictional:</strong> Some sites are thought to lie near wormholes or dimensional rifts, warping time in unpredictable ways.
        </li>
      </ul>

      <p className="quote">
        Explorers continue to debate whether the effects are measurable, imagined, or something else entirely.
      </p>
    </div>
  );
};

export default Intro;

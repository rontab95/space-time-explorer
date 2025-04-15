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
        <li><strong>Scientific:</strong> Drift might be caused by altitude or gravitational time dilation. Even nanoseconds per day can affect satellite synchronization.</li>
        <li><strong>Mythical:</strong> Folklore suggests time slips — stories of lost hours or people returning years later unchanged.</li>
        <li><strong>Fictional:</strong> Some sites are thought to lie near wormholes or dimensional rifts, warping time in unpredictable ways.</li>
      </ul>

      <p className="quote">
        Explorers continue to debate whether the effects are measurable, imagined, or something else entirely.
      </p>

      {/* ⏳ Category Breakdown */}
      <div className="categories-explained">
        <h2>Time Anomaly Categories</h2>
        <ul>
          <li>
            <strong>Time-Slip Encounter:</strong><br />
            Missing time, memory lapses, or warped time perception — often associated with UFOs or altered states.
          </li>
          <li>
            <strong>Historical Distortion Site:</strong><br />
            Ancient or legendary sites rumored to influence time through mystical or energetic forces.
          </li>
          <li>
            <strong>Geo-Temporal Field:</strong><br />
            Naturally occurring regions with magnetic or seismic effects suspected to influence time and electronics.
          </li>
          <li>
            <strong>Verified Drift Zone:</strong><br />
            Scientifically measured areas with detectable time drift — often involving GPS or gravitational timing shifts.
          </li>
          <li>
            <strong>Theoretical Time Rift:</strong><br />
            Speculative or fictional anomalies tied to dimensional rifts, wormholes, or temporal instability.
          </li>
          <li>
            <strong>Mass Vanishing Event:</strong><br />
            Disappearances of entire groups or civilizations with unexplained timing phenomena.
          </li>
          <li>
            <strong>Chrono-Sealed Location:</strong><br />
            Electromagnetically isolated areas where time flow feels 'paused' or sealed off from external interference.
          </li>
          <li>
            <strong>Temporal Disaster Zone:</strong><br />
            Sites of historical tragedy where unexplained timing, failure, or disorientation played a strange role.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Intro;

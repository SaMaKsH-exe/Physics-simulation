import Link from 'next/link';
import React from 'react';
import './page.css'; // Import CSS module for styling

const Home: React.FC = () => {
  return (
    <div>
      <header className="header">
        <div className="logo">SK</div>
        <nav className="nav">
          <ul>
            <li><Link href="https://github.com/SaMaKsH-exe/Physics-simulation">Source Code</Link></li>
            <li><Link href="https://www.samaksh-kaushik.live/">Portfolio</Link></li>
          </ul>
        </nav>
      </header>

      <div className="home-container">
        <h1 className="home-title">Physics Simulation</h1>
        <div className="button-container">
          <Link href="/DoublePendulum" passHref={true} legacyBehavior>
            <a className="home-button">Double Pendulum</a>
          </Link>
          <Link href="/FluidSimulation" passHref={true} legacyBehavior>
            <a className="home-button">Fluid Simulation</a>
          </Link>
          <Link href="/ParticleSimulation" passHref={true} legacyBehavior>
            <a className="home-button">Particle Simulation</a>
          </Link>
        </div>
      </div>

      <footer className="footer">
        <p>&copy; 2024 Physics Simulator. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;

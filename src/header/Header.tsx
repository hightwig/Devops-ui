import { ParticlesContainer } from '../templates/Particles';

const Header = () => {
  return (
    <header id="welcome-section">
      <ParticlesContainer />
      <div className="forest" />
      <div className="silhouette" />
      {/* <div className="moon" /> */}
      <div className="container">
        <h1>
          <span className="line">به پارس دوآپس خوش آمدید </span>
          <br />
          <span className="line">devops security</span>
          <span className="line">
            <br />
            <span className="color">&</span> Tools.
          </span>
        </h1>
        <div className="buttons">
          <a href="#contact" className="cta">
            اطلاعات بیشتر
          </a>{' '}
          <a href="#projects">
            <h2>ارتباط با ما</h2>
          </a>
        </div>
      </div>
    </header>
  );
};
export { Header };

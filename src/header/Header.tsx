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
          <span className="leading-10 line">devops </span>
          <span className="line">
            <span className="color">as </span>a service.
          </span>
        </h1>
        <div className="buttons">
          <a href="#moreinfo" className="cta">
            اطلاعات بیشتر
          </a>{' '}
          <a href="#contact">
            <h2>ارتباط با ما</h2>
          </a>
        </div>
      </div>
    </header>
  );
};
export { Header };

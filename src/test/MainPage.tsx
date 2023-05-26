import React from 'react';

import { Header } from '../header/Header';
import { Footer } from '../templates/Footer';

const SocialLinks = () => {
  return (
    <div className="social">
      <a
        href="https://twitter.com/yagoestevez"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to author's Twitter profile"
      >
        {' '}
        <i className="fab fa-twitter" />
      </a>
      <a
        id="profile-link"
        href="https://github.com/yagoestevez"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to author's GitHub Profile"
      >
        {' '}
        <i className="fab fa-github" />
      </a>
      <a
        href="https://codepen.io/yagoestevez"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to author's Codepen Profile"
      >
        {' '}
        <i className="fab fa-codepen" />
      </a>
    </div>
  );
};
const Menu = (props: any) => {
  return (
    <div className={`menu-container ${props.showMenu}`}>
      <div className="overlay" />
      <div className="menu-items">
        <ul>
          <li>
            <a href="#welcome-section" onClick={props.toggleMenu}>
              خانه
            </a>
          </li>
          <li>
            <a href="#about" onClick={props.toggleMenu}>
              درباره ما
            </a>
          </li>

          <li>
            <a href="#contact" onClick={props.toggleMenu}>
              ارتباط با ما
            </a>
          </li>
        </ul>
        <SocialLinks />
      </div>
    </div>
  );
};

/** *********************
    Nav Component
   ********************** */
// @ts-ignore
const Nav = props => {
  return (
    <>
      <nav id="navbar">
        <div className="nav-wrapper">
          <p className="brand">
            <strong>ParsDevops</strong>
          </p>
          <a
            onClick={props.toggleMenu}
            className={
              props.showMenu === 'active' ? 'menu-button active' : 'menu-button'
            }
          >
            <span />
          </a>
        </div>
      </nav>
    </>
  );
};

/** *********************
    Header Component
   ********************** */

/** *********************
    About Component
   ********************** */

const About = () => {
  return (
    <section
      id="about"
      className="bg-[url('/assets/images/devops.png')] bg-no-repeat "
    >
      <div className="wrapper">
        <article>
          <div className="title">
            <h3>Who&apos;s this guy?</h3>
            <p className="separator" />
          </div>
          <div className="desc full">
            <h4 className="subtitle">My name is Yago.</h4>
            <p>
              I am a web developer and UX designer based in the beautiful west
              coast of Spain, Galicia.
            </p>
            <p>
              I really enjoy solving problems as well as making things pretty
              and easy to use. I can&apos;t stop learning new things; the more,
              the better. I also love photography, a hobby I&apos;m taking along
              the good old film cameras. Oh, and rice with milk; I have a
              passion for rice with milk!
            </p>
          </div>
          <div className="title">
            <h3>What does he do?</h3>
            <p className="separator" />
          </div>
          <div className="desc">
            <h4 className="subtitle">I&apos;m a programmer.</h4>
            <p>
              For the front-end I usually work with Javascript, either
              standalone or including popular frameworks like ReactJS and VueJS.
              I also make the web pretty by using Sass, CSS and, whenever
              needed, any of their friends: Bootstrap, Bulma, etc.
            </p>
            <p>
              For the back-end I also work with Javascript (NodeJS, Express,
              MongoDB, etc). But, of course, whenever the project requires PHP,
              I do PHP as well (Wordpress, Laravel, etc).
            </p>
          </div>
          <div className="desc">
            <h4 className="subtitle">Also a designer.</h4>
            <p>
              I feel comfortable working with many Adobe products. Photoshop,
              Illustrator, InDesign, Lightroom or Xd are some kind of industry
              standards and I love working with them. I&apos;m not limited to
              though: Gimp, Inkscape or Figma are also very valid applications
              that I&apos;ve been working with.
            </p>
            <p>
              User interfaces, brochures, books, branding... You name it! As I
              mentioned, creating pretty things is particularly important for
              me.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

/** *********************
    Project Component
   ********************** */

/** *********************
    Projects Component
   ********************** */

/** *********************
    Contact Component
   ********************** */

/** *********************
    Footer Component
   ********************** */

/** *********************
    Social Links Component
   ********************** */

/** *********************
    Main Component
   ********************** */

export default class App extends React.Component {
  state = {
    menuState: false,
  };

  toggleMenu = () => {
    this.setState(state => ({
      // @ts-ignore
      // eslint-disable-next-line no-nested-ternary
      menuState: !state.menuState
        ? 'active'
        : // @ts-ignore
        state.menuState === 'deactive'
        ? 'active'
        : 'deactive',
    }));
  };

  render() {
    return (
      <>
        <Menu toggleMenu={this.toggleMenu} showMenu={this.state.menuState} />
        <Nav toggleMenu={this.toggleMenu} showMenu={this.state.menuState} />
        <Header />
        <About />
        <Footer />
      </>
    );
  }

  componentDidMount() {
    const navbar = document.querySelector('#navbar');
    const header = document.querySelector('#welcome-section');
    const forest = document.querySelector('.forest');
    const silhouette = document.querySelector('.silhouette');
    const forestInitPos = -300;

    window.onscroll = () => {
      const scrollPos =
        document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollPos <= window.innerHeight) {
        // @ts-ignore
        silhouette.style.bottom = `${parseInt(scrollPos / 6, 10)}px`;
        // @ts-ignore
        forest.style.bottom = `${parseInt(
          // @ts-ignore
          forestInitPos + scrollPos / 6,
          10
        )}px`;
      }

      if (scrollPos - 100 <= window.innerHeight)
        // @ts-ignore
        header.style.visibility =
          // @ts-ignore
          header.style.visibility === 'hidden' && 'visible';
      // @ts-ignore
      else header.style.visibility = 'hidden';

      if (scrollPos + 100 >= window.innerHeight)
        // @ts-ignore
        navbar.classList.add('bg-active');
      // @ts-ignore
      else navbar.classList.remove('bg-active');
    };

    (function navSmoothScrolling() {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      // @ts-ignore
      // eslint-disable-next-line no-restricted-syntax
      for (const i in internalLinks) {
        // eslint-disable-next-line no-prototype-builtins
        if (internalLinks.hasOwnProperty(i)) {
          // @ts-ignore
          internalLinks[i].addEventListener('click', e => {
            e.preventDefault();
            // @ts-ignore
            document.querySelector(internalLinks[i].hash).scrollIntoView({
              block: 'start',
              behavior: 'smooth',
            });
          });
        }
      }
    })();
  }
}

// ReactDOM.render(<App />, document.getElementById('app'));

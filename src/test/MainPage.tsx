import React from 'react';

import { Header } from '../header/Header';
import { Footer } from '../templates/Footer';
import { VerticalFeatures } from '../templates/VerticalFeatures';

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
      <VerticalFeatures />
      <div className="wrapper">
        <article>
          <div className="title">
            <h3>چرا پارس دوآپس</h3>
            <p className="separator" />
          </div>
          <div dir="rtl" className="desc full">
            <p>
              شرکت پارس دوآپس با هدف توسعه زیرساخت و روند تولید محصولات
              نرم‌افزاری با پشتوانه تیمی تخصصی و جوان در حوزه کامپیوتر همواره در
              تلاش است تا با ارايه راهکار های نوین و خلاقانه علاوه بر تسریع
              توسعه نرم افزار، کمک به افزایش رضایت مشتری کند. عدم هماهنگی کامل
              بین تیم های توسعه دهنده و پشتیان و همچنین ضعف در حوزه تست محصولات
              یکی از دلایل اصلی شکل گیری پارس دوآپس بود. با توجه به وجود ضعف در
              شرکت های سرویس دهنده در مقیاس بالا، نیاز جدی برای وجود تیم دوآپس
              احساس میشود. از جمله مشکلات موجود، عدم وجود مکانزیم کنترل سرویس
              دهی محصول است که یکی از خدمات اصلی شرکت ما، مقیاس دهی مناسب با
              درخواست ها و منابع موجود است.
            </p>
          </div>
          <div className="title">
            <h3>سرویس ما</h3>
            <p className="separator" />
          </div>
          <div dir="rtl" className="desc">
            <h4 className="subtitle">سرویس آنها چیست</h4>
            <p>
              پیاده سازی محصولات بر بستر های ابری ضمانت و اطمینان بیشتری را هم
              از جهت امنیتی و هم از جهت پایداری به ما میدهد. از جمله مباحث موجود
              در این حوزه، مطالعه و بررسی چگونگی حفظ امنیت و یکپارچگی برنامه در
              Cluster است. امروزه ابزار های متعددی برای مدیریت منابع و نظارت بر
              امنیت Cluster توسعه داده شده‌اند که مطالعه آنها یکی از اهداف این
              پروژه است. همچنین تحقیق درباره مسائل مدیریت انتقال داده امن و
              مشاهده جریان عبوری دیتا درون کلاستر از چالش های این حوزه میباشد.
              درصورت امکان و وجود منابع و زمان مورد نیاز، یکی از گام های عملیاتی
              این پروژه ایجاد بستری برای ارایه خدمات ابری مبتنی برCluster است که
              نقطه قوت آن نسبت به نسخه های مشابه خارجی، ارایه سرویس ها و قابلیت
              های امنیتی است. این ابزارها با هدف بررسی متناوب کلاستر و نظارت بر
              دیتای ورودی و مدیریت انتقال آن، سبب شناسایی آسیب‌پذیری های موجود
              در برنامه و جلوگیری از حملات احتمالی میشود.
            </p>
          </div>
          <div dir="rtl" className="desc">
            <h4 className="subtitle">سرویس ما چیست</h4>
            <p>
              یکی از مهم ترین مباحث مطرح شده در دنیای امروز کامپیوتر، ایجاد
              بستری مناسب و امن برای پیاده سازی و توسعه محصول است. امروزه طراحی
              و استفاده از مفهوم microservice ها، صرفه جویی قابل ملاحظه ای در
              زمان و منابع میکند. یکی از ابزار هایی که در حوزه DevOps امکانات
              زیادی را فراهم میکند Kubernetes است. این ابزار با تکیه بر مفهوم
              مایکروسرویس ها، قابلیت های زیادی از جمله مدیریت بهینه منابع موجود
              برحسب نیاز، هم تراز شدن توان پاسخ دهی برنامه با میزان درخواست های
              دریافت شده،‌ ضمانت دسترسی همیشگی به برنامه و ... به همراه دارد.
              استفاده از این ابزار در محصولات توانایی کنترل و نظارت بیشتری را به
              توسعه دهندگان میدهد. یکی از مفاهیم بنیادین در Kubernetes، استفاده
              از Cluster و مدیریت ارتباط بین ارگان های مختلف برنامه است که این
              امکان را به ما میدهد تا علاوه بر انسجام درونی، قدرت بیشتری در
              تفکیک سرویس های مختلف از یکدیگر و تعریف مایکروسرویس ها داشته
              باشیم.
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

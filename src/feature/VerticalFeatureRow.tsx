import { useEffect } from 'react';

import className from 'classnames';
import { useRouter } from 'next/router';

type IVerticalFeatureRowProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    'scroll-reveal',
    'verticalFeature',
    `${props.reverse ? 'left' : 'right'}`,
    'mt-20',
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': props.reverse,
    }
  );
  function addObserver(
    el: Element,
    options: IntersectionObserverInit | undefined
  ) {
    const observer = new IntersectionObserver((entries, observe) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observe.unobserve(entry.target);
        }
      });
    }, options); // Passing the options object to the observer
    observer.observe(el);
  }

  useEffect(() => {
    function scrollTrigger(selector: string, options = {}) {
      let els = document.querySelectorAll(selector);
      // @ts-ignore
      els = Array.from(els);
      els.forEach(el => {
        // Passing the options object to the addObserver function
        addObserver(el, options);
      });
    }
    scrollTrigger('.scroll-reveal', {
      rootMargin: '-400px',
    });
  }, []);

  const router = useRouter();
  return (
    <div className={verticalFeatureClass}>
      <div className="w-full sm:w-1/2 text-center sm:px-6">
        <h3 className="text-3xl text-gray-900 font-semibold">{props.title}</h3>
        <div className="text-slate-700 mt-6 text-xl leading-9">
          {props.description}
        </div>
      </div>

      <div className="w-full sm:w-1/2 p-6">
        <img src={`${router.basePath}${props.image}`} alt={props.imageAlt} />
      </div>
    </div>
  );
};

export { VerticalFeatureRow };

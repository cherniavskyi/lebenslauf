import { useState } from 'react';
import classNames from 'classnames';

import styles from './work.module.scss';

import DecorazzioImg from '../../assets/img/01.jpg';
import SunshineImg from '../../assets/img/02.png';
import MagazillaImg from '../../assets/img/03.jpg';
import SkynixImg from '../../assets/img/04.png';

const slides = [
  {
    title: 'Decorazzio',
    image: DecorazzioImg,
    description: 'Interior Design and Furniture Store WordPress Theme',
    link: 'https://themeforest.net/item/decorazzio-interior-design-and-furniture-store-wordpress-theme/23457170?s_rank=82',
  },
  {
    title: 'Miss Sunshine',
    image: SunshineImg,
    description: 'Women Lifestyle Blog WordPress Theme',
    link: 'https://themeforest.net/item/miss-sunshine-lifestyle-beauty-women-blog/23840170?s_rank=81',
  },
  {
    title: 'Magazilla',
    image: MagazillaImg,
    description: 'News & Magazine Theme',
    link: 'https://themeforest.net/item/magazilla-news-magazine-theme/21958987?s_rank=86',
  },
  {
    title: 'Skynix',
    image: SkynixImg,
    description: 'Custom software development & devops engineering',
    link: 'https://skynix.co/',
  },
];

const Work = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const changeSlide = (direction: 'next' | 'prev') => {
    if (isAnimating) return;

    setIsAnimating(true);

    setTimeout(() => {
      setActiveIndex((prev) => {
        if (direction === 'next') {
          return prev === slides.length - 1 ? 0 : prev + 1;
        }

        return prev === 0 ? slides.length - 1 : prev - 1;
      });
    }, 650);

    setTimeout(() => {
      setIsAnimating(false);
    }, 700);
  };

  const getPosition = (index: number) => {
    const lastIndex = slides.length - 1;

    if (index === activeIndex) {
      return 'center';
    }

    if (
      index === activeIndex - 1 ||
      (activeIndex === 0 && index === lastIndex)
    ) {
      return 'left';
    }

    if (
      index === activeIndex + 1 ||
      (activeIndex === lastIndex && index === 0)
    ) {
      return 'right';
    }

    return 'hidden';
  };

  return (
    <div className={styles.work}>
      <h2>Ausgewählte Arbeiten</h2>

      <div className={styles.work__lockup}>
        <ul
          className={classNames(styles.slider, {
            [styles.slider_fade]: isAnimating,
          })}
        >
          {slides.map((slide, index) => {
            const position = getPosition(index);

            return (
              <li
                key={slide.title}
                className={classNames(
                  styles.slider__item,
                  {
                    [styles.slider__item_left]:
                      position === 'left',

                    [styles.slider__item_center]:
                      position === 'center',

                    [styles.slider__item_right]:
                      position === 'right',

                    [styles.slider__item_hidden]:
                      position === 'hidden',
                  }
                )}
              >
                <a
                  href={slide.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className={styles.slider__item_image}>
                    <img
                      src={slide.image}
                      alt={slide.title}
                    />
                  </div>

                  <p className={styles.slider__item_title}>
                    {slide.title}
                  </p>

                  <p className={styles.slider__item_description}>
                    {slide.description}
                  </p>
                </a>
              </li>
            );
          })}
        </ul>

        <button
          className={styles.slider__prev}
          onClick={() => changeSlide('prev')}
        >
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="0 0 150 118" xmlSpace="preserve">
            <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
              <path d="M561,1169C525,1155,10,640,3,612c-3-13,1-36,8-52c8-15,134-145,281-289C527,41,562,10,590,10c22,0,41,9,61,29
              c55,55,49,64-163,278L296,510h575c564,0,576,0,597,20c46,43,37,109-18,137c-19,10-159,13-590,13l-565,1l182,180
              c101,99,187,188,193,199c16,30,12,57-12,84C631,1174,595,1183,561,1169z"/>
            </g>
          </svg>
        </button>

        <button
          className={styles.slider__next}
          onClick={() => changeSlide('next')}
        >
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 150 118" xmlSpace="preserve">
            <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
              <path d="M870,1167c-34-17-55-57-46-90c3-15,81-100,194-211l187-185l-565-1c-431,0-571-3-590-13c-55-28-64-94-18-137c21-20,33-20,597-20h575l-192-193C800,103,794,94,849,39c20-20,39-29,61-29c28,0,63,30,298,262c147,144,272,271,279,282c30,51,23,60-219,304C947,1180,926,1196,870,1167z"/>
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Work;
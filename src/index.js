import * as basicScroll from 'basicscroll';
import './scss/style.scss';

const heroImagesAnimation = basicScroll.create({
  from: 0,
  to: '1650px',
  props: {
    '--box-opacity': {
      from: 1,
      to: 0,
    },
    '--image-position': {
      from: 0,
      to: '35px',
      timing: (x) => 1 - Math.pow(1 - x, 3),
    }
  }
});

const circleAnimation = basicScroll.create({
  from: '400px',
  to: '2500px',
  props: {
    '--example-circle-position-x': {
      from: '-40px',
      to: 0
    },
    '--example-circle-position-y': {
      from: '-320px',
      to: '13px',
    },
    '--example-circle-position-texture': {
      from: '-16px',
      to: '16px',
    }
  }
});

heroImagesAnimation.start();
circleAnimation.start();

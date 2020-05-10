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
      to: '24px',
    }
  }
});

const circleAnimation = basicScroll.create({
  from: '400px',
  to: '2500px',
  props: {
    '--example-circle-position-x': {
      from: '-70px',
      to: '-30px',
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

const stickyMenuAnimation = basicScroll.create({
  from: '2200px',
  to: '2250px',
  props: {
    '--sticky-menu-position': {
      from: '-64px',
      to: 0,
    }
  }
})

heroImagesAnimation.start();
circleAnimation.start();
stickyMenuAnimation.start();

import * as basicScroll from 'basicscroll';
import './scss/style.scss';

const bsAnimation = basicScroll.create({
  from: 0,
  to: '1650px',
  props: {
    '--box-opacity': {
      from: 1,
      to: 0,
    },
    '--image-position': {
      from: 0,
      to: '35px'
    }
  }
});

bsAnimation.start();

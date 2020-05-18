import * as basicScroll from 'basicscroll';
import CustomTab from './slider';
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

const flowsTab = new CustomTab({
  container: '.flows',
  tabSelector: '.flows__tab',
  tabLinkSelector: '.flows__tab-link',
  activeTabClass: 'flows__tab_active',
  activeTabLinkClass: 'flows__tab-link_active',
});

const studentsProductsTab = new CustomTab({
  container: '.students-product__column_right',
  tabSelector: '.students-product__tab',
  tabLinkSelector: '.students-product__tab-link',
  activeTabClass: 'students-product__tab_active',
  activeTabLinkClass: 'students-product__tab-link_active',
})

flowsTab.run();
studentsProductsTab.run();

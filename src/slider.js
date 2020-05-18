const defaultOptions = {
  container: '.tabs-container',
  tabSelector: '.tab',
  tabLinkSelector: '.tab-link',
  activeTabClass: 'active-tab',
  activeTabLinkClass: 'active-tab-link',
};

class CustomTabs {
  constructor(options) {
    this._options = {
      ...defaultOptions,
     ... options
    }
    this._container = document.querySelector(this._options.container);
    this._tabs = this._container.querySelectorAll(this._options.tabSelector);
    this._tabLinks = this._container.querySelectorAll(this._options.tabLinkSelector);
    this._activeTab = '';
    this._activeTabLink = '';
    this._raf = null;
  }

  _setActiveTab(tab) {
    this._activeTab = tab;
    this._activeTab.classList.add(this._options.activeTabClass);
  }

  _setActiveTabLink(link) {
    this._activeTabLink = link;
    this._activeTabLink.classList.add(this._options.activeTabLinkClass);
  }

  _fadeTo(finalOpacity, opacityCalcFn) {
    let start;
    return new Promise((res) => {
      const step = (timestamp) => {
        if (!start) start = timestamp;
        const opacity = opacityCalcFn(timestamp - start);
        this._activeTab.style.opacity = opacity;
        this._raf = requestAnimationFrame(step);
        if (opacity === finalOpacity) {
          cancelAnimationFrame(this._raf);
          res();
        }
      }
      this._raf = requestAnimationFrame(step);
    });
  };

  _fadeIn(tab, ms = 300) {
    const initialOpacity = tab.style.opacity * 1 || 0;
    const opacityCalc = (progress) => Math.min(((1/ms) * progress) + initialOpacity, 1);
    if (!tab.style.opacity) tab.style.opacity = 0;
    return this._fadeTo(1, opacityCalc);
  }

  _fadeOut(tab, ms = 100) {
    const initialOpacity = tab.style.opacity || 1;
    const opacityCalc = (progress) => Math.max(initialOpacity - ((1/ms) * progress), 0);
    return this._fadeTo(0, opacityCalc)
  }

  async _changeTab(tab) {
    cancelAnimationFrame(this._raf);
    await this._fadeOut(this._activeTab);
    this._activeTab.classList.remove(this._options.activeTabClass); 
    this._setActiveTab(tab);
    this._fadeIn(tab);
  }

  _changeTabLink(link) {
    this._activeTabLink.classList.remove(this._options.activeTabLinkClass);
    this._setActiveTabLink(link);
  }

  _initTabLink(link, index) {
    link.addEventListener('click', () => {
      if (this._tabs.item(index) === this._activeTab) return;
      this._changeTab(this._tabs.item(index));
      this._changeTabLink(link);
    });
  }

  run() {
    this._tabLinks.forEach(this._initTabLink.bind(this));
    this._setActiveTab(this._tabs.item(0));
    this._setActiveTabLink(this._tabLinks.item(0));
  }
}

export default CustomTabs;
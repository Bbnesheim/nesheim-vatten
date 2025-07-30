const path = require('path');
const { JSDOM } = require('jsdom');

describe('QuickAddBulk.renderSections', () => {
  let window, document, QuickAddBulk, instance;

  beforeEach(() => {
    global.subscribe = jest.fn();
    global.PUB_SUB_EVENTS = { cartUpdate: 'cart-update' };

    const dom = new JSDOM(
      `<!DOCTYPE html><cart-drawer><div id="CartDrawer" class="drawer__inner"></div></cart-drawer><div id="cart-icon-bubble"></div>`,
      { url: 'https://example.com' }
    );
    window = dom.window;
    document = dom.window.document;
    global.window = window;
    global.document = document;
    global.DOMParser = window.DOMParser;
    global.HTMLElement = window.HTMLElement;
    global.customElements = window.customElements;
    window.subscribe = global.subscribe;
    global.debounce = (fn) => fn;
    global.ON_CHANGE_DEBOUNCE_TIMER = 0;
    global.BulkAdd = class extends window.HTMLElement {
      constructor() {
        super();
        this.queue = [];
        this.isEnterPressed = false;
        this.lastActiveInputId = null;
      }
      getSectionInnerHTML(html, selector) {
        return new window.DOMParser()
          .parseFromString(html, 'text/html')
          .querySelector(selector).innerHTML;
      }
      listenForActiveInput() {}
      listenForKeydown() {}
    };
    const scriptPath = path.resolve(
      __dirname,
      '../themes/website-v1/assets/quick-add-bulk.js'
    );
    delete require.cache[require.resolve(scriptPath)];
    QuickAddBulk = require(scriptPath);
    instance = new QuickAddBulk();
    document.body.appendChild(instance);
    instance.dataset.index = '1';
  });

  afterEach(() => {
    delete global.window;
    delete global.document;
    delete global.DOMParser;
    delete global.HTMLElement;
    delete global.customElements;
    delete global.subscribe;
    delete global.PUB_SUB_EVENTS;
  });

  test('toggles is-empty when cart is empty', () => {
    const cartDrawer = document.querySelector('cart-drawer');
    cartDrawer.classList.remove('is-empty');
    instance.getSectionsToRender = () => [
      { id: 'CartDrawer', section: 'cart-drawer', selector: '.drawer__inner' },
    ];
    const parsedState = {
      items: [],
      sections: { 'cart-drawer': '<div class="drawer__inner"></div>' },
    };
    instance.renderSections(parsedState, []);
    expect(cartDrawer.classList.contains('is-empty')).toBe(true);
  });

  test('sanitizes section HTML before rendering', () => {
    document.getElementById('cart-icon-bubble').innerHTML = '<div class="shopify-section"></div>';
    instance.getSectionsToRender = () => [
      { id: 'cart-icon-bubble', section: 'cart-icon-bubble', selector: '.shopify-section' },
    ];
    const parsedState = {
      items: [],
      sections: { 'cart-icon-bubble': '<div class="shopify-section">test<script>alert(1)</script></div>' },
    };
    instance.renderSections(parsedState, []);
    expect(document.querySelector('#cart-icon-bubble .shopify-section').innerHTML).toBe('test');
  });
});

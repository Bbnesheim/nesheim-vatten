const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('QuickAddBulk.renderSections', () => {
  let window, document, QuickAddBulk, instance;

  beforeEach(() => {
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
      '../docs/website/website-v1/assets/quick-add-bulk.js'
    );
    const scriptContent = fs.readFileSync(scriptPath, 'utf8');
    window.Function(scriptContent).call(window);
    QuickAddBulk = window.customElements.get('quick-add-bulk');
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
});

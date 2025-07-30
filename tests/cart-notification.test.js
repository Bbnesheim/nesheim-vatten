const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('CartNotification.getSectionInnerHTML', () => {
  let window, document, CartNotification, instance;

  beforeEach(() => {
    const dom = new JSDOM('<!DOCTYPE html><div id="cart-notification"></div><cart-notification><button type="button"></button></cart-notification>');
    window = dom.window;
    document = dom.window.document;
    global.window = window;
    global.document = document;
    global.HTMLElement = window.HTMLElement;
    global.customElements = window.customElements;
    global.DOMParser = window.DOMParser;
    global.trapFocus = jest.fn();
    global.removeTrapFocus = jest.fn();

    const scriptPath = path.resolve(__dirname, '../docs/website/website-v1/assets/cart-notification.js');
    const scriptContent = fs.readFileSync(scriptPath, 'utf8');
    window.Function(scriptContent).call(window);
    CartNotification = window.customElements.get('cart-notification');
    instance = new CartNotification();
    document.body.appendChild(instance);
  });

  afterEach(() => {
    delete global.window;
    delete global.document;
    delete global.HTMLElement;
    delete global.customElements;
    delete global.DOMParser;
    delete global.trapFocus;
    delete global.removeTrapFocus;
  });

  test('extracts inner HTML for a selector', () => {
    const html = '<div><span class="target">world</span></div>';
    expect(instance.getSectionInnerHTML(html, '.target')).toBe('world');
  });
});

const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('CartItems.getSectionInnerHTML', () => {
  let window, document, CartItems, instance;

  beforeEach(() => {
    const dom = new JSDOM('<!DOCTYPE html><cart-items></cart-items>');
    window = dom.window;
    document = window.document;
    global.window = window;
    global.document = document;
    global.HTMLElement = window.HTMLElement;
    global.customElements = window.customElements;
    global.DOMParser = window.DOMParser;
    global.debounce = (fn) => fn;
    global.ON_CHANGE_DEBOUNCE_TIMER = 0;
    global.trapFocus = jest.fn();
    global.fetchConfig = () => ({})
    global.routes = { cart_change_url: '', cart_update_url: '', cart_url: '' };
    global.CartPerformance = { measure: jest.fn((_, fn) => fn()), measureFromEvent: jest.fn() };
    global.publish = jest.fn();
    global.PUB_SUB_EVENTS = { cartUpdate: 'cart-update' };

    const scriptPath = path.resolve(__dirname, '../docs/website/website-v1/assets/cart.js');
    const scriptContent = fs.readFileSync(scriptPath, 'utf8');
    window.Function(scriptContent).call(window);
    CartItems = window.customElements.get('cart-items');
    instance = new CartItems();
    document.body.appendChild(instance);
  });

  afterEach(() => {
    delete global.window;
    delete global.document;
    delete global.HTMLElement;
    delete global.customElements;
    delete global.DOMParser;
    delete global.debounce;
    delete global.ON_CHANGE_DEBOUNCE_TIMER;
    delete global.trapFocus;
    delete global.fetchConfig;
    delete global.routes;
    delete global.CartPerformance;
    delete global.publish;
    delete global.PUB_SUB_EVENTS;
  });

  test('extracts inner HTML for a selector', () => {
    const html = '<div><span class="target">hello</span></div>';
    expect(instance.getSectionInnerHTML(html, '.target')).toBe('hello');
  });
});

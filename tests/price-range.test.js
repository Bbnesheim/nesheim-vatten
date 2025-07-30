const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('PriceRange component', () => {
  let window, document, PriceRange, instance, minInput;

  beforeEach(() => {
    const dom = new JSDOM(`<!DOCTYPE html><price-range><input data-min="0" data-max="10" value="15"><input data-min="0" data-max="10" value="8"></price-range>`);
    window = dom.window;
    document = window.document;
    global.window = window;
    global.document = document;
    global.HTMLElement = window.HTMLElement;
    global.customElements = window.customElements;

    const scriptPath = path.resolve(__dirname, '../themes/website-v1/assets/facets.js');
    const scriptContent = fs.readFileSync(scriptPath, 'utf8');
    window.Function(scriptContent).call(window);
    PriceRange = window.customElements.get('price-range');
    instance = document.querySelector('price-range');
    Object.setPrototypeOf(instance, PriceRange.prototype);
    minInput = instance.querySelector('input');
  });

  afterEach(() => {
    delete global.window;
    delete global.document;
    delete global.HTMLElement;
    delete global.customElements;
  });

  test('adjustToValidValues limits input to max', () => {
    instance.adjustToValidValues(minInput);
    expect(minInput.value).toBe('8');
  });

  test('onKeyDown prevents invalid keys', () => {
    const evt = { metaKey: false, key: 'a', preventDefault: jest.fn() };
    instance.onKeyDown(evt);
    expect(evt.preventDefault).toHaveBeenCalled();
  });
});

const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('MainSearch keepInSync and focus behavior', () => {
  let window, document, MainSearch, instance;

  beforeEach(() => {
    const dom = new JSDOM(`<!DOCTYPE html><form id="f1"><main-search><input type="search"><button type="reset" class="hidden"></button></main-search></form><form id="f2"><input type="search"></form>`);
    window = dom.window;
    document = window.document;
    global.window = window;
    global.document = document;
    global.HTMLElement = window.HTMLElement;
    global.customElements = window.customElements;
    global.debounce = (fn) => fn;

    global.SearchForm = require(path.resolve(__dirname, '../themes/website-v1/assets/search-form.js'));

    const scriptPath = path.resolve(__dirname, '../themes/website-v1/assets/main-search.js');
    const scriptContent = fs.readFileSync(scriptPath, 'utf8');
    window.Function(scriptContent).call(window);
    MainSearch = window.customElements.get('main-search');

    instance = document.createElement('main-search');
    Object.setPrototypeOf(instance, MainSearch.prototype);
    instance.innerHTML = '<input type="search"><button type="reset" class="hidden"></button>';
    document.getElementById('f1').replaceChild(instance, document.querySelector('main-search'));
    instance.input = instance.querySelector('input[type="search"]');
    instance.allSearchInputs = document.querySelectorAll('input[type="search"]');
  });

  afterEach(() => {
    delete global.window;
    delete global.document;
    delete global.HTMLElement;
    delete global.customElements;
    delete global.debounce;
    delete global.SearchForm;
  });

  test('keepInSync updates other search inputs', () => {
    const other = document.querySelector('#f2 input');
    instance.keepInSync('abc', instance.input);
    expect(other.value).toBe('abc');
  });

  test('onInputFocus scrolls into view on small screens', () => {
    window.innerWidth = 400;
    const spy = jest.fn();
    instance.scrollIntoView = spy;
    instance.onInputFocus();
    expect(spy).toHaveBeenCalled();
  });
});

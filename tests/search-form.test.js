const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('SearchForm component', () => {
  let window, document, SearchForm, instance;

  beforeEach(() => {
    const dom = new JSDOM(`<!DOCTYPE html>`);
    window = dom.window;
    document = window.document;
    global.window = window;
    global.document = document;
    global.HTMLElement = window.HTMLElement;
    global.customElements = window.customElements;
    global.debounce = (fn) => fn;

    const scriptPath = path.resolve(
      __dirname,
      '../docs/website/website-v1/assets/search-form.js'
    );
    const scriptContent = fs.readFileSync(scriptPath, 'utf8');
    window.Function(scriptContent).call(window);
    SearchForm = window.customElements.get('search-form');

    const wrapper = document.createElement('div');
    wrapper.innerHTML =
      '<form><search-form><input type="search"><button type="reset" class="hidden"></button></search-form></form>';
    document.body.appendChild(wrapper.firstElementChild);
    instance = document.querySelector('search-form');
  });

  afterEach(() => {
    delete global.window;
    delete global.document;
    delete global.HTMLElement;
    delete global.customElements;
    delete global.debounce;
  });

  test('toggleResetButton shows and hides button', () => {
    const btn = instance.querySelector('button');
    const input = instance.querySelector('input');

    input.value = 'abc';
    instance.toggleResetButton();
    expect(btn.classList.contains('hidden')).toBe(false);

    input.value = '';
    instance.toggleResetButton();
    expect(btn.classList.contains('hidden')).toBe(true);
  });

  test('shouldResetForm reflects dropdown selection', () => {
    const selected = document.createElement('div');
    selected.setAttribute('aria-selected', 'true');
    selected.innerHTML = '<a></a>';
    document.body.appendChild(selected);
    expect(instance.shouldResetForm()).toBe(false);
    selected.remove();
    expect(instance.shouldResetForm()).toBe(true);
  });
});

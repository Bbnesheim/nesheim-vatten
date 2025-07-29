const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('FacetFiltersForm.createSearchParams', () => {
  let window, document, instance;

  beforeEach(() => {
    const dom = new JSDOM(
      `<!DOCTYPE html><facet-filters-form><form id="FacetFiltersForm"><input name="color" value="red"></form></facet-filters-form>`,
      { url: 'https://example.com' }
    );
    window = dom.window;
    document = dom.window.document;
    global.window = window;
    global.document = document;
    global.HTMLElement = window.HTMLElement;
    global.customElements = window.customElements;
    global.FormData = window.FormData;
    global.debounce = (fn) => fn;

    const scriptPath = path.resolve(__dirname, '../docs/website/website-v2/components/facets/facets.js');
    const scriptContent = fs.readFileSync(scriptPath, 'utf8');
    window.Function(scriptContent).call(window);
    instance = document.querySelector('facet-filters-form');
  });

  afterEach(() => {
    delete global.window;
    delete global.document;
    delete global.HTMLElement;
    delete global.customElements;
    delete global.FormData;
    delete global.debounce;
  });

  test('returns search params from form inputs', () => {
    const form = instance.querySelector('form');
    expect(instance.createSearchParams(form)).toBe('color=red');
  });
});

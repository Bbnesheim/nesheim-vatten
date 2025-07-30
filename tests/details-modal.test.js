const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('DetailsModal custom element', () => {
  let window, document, DetailsModal, instance;

  beforeEach(() => {
    const html = `<!DOCTYPE html>
<details-modal>
  <details>
    <summary></summary>
    <div tabindex="-1"><input></div>
    <button type="button"></button>
  </details>
</details-modal>`;
    const dom = new JSDOM(html);
    window = dom.window;
    document = window.document;
    global.window = window;
    global.document = document;
    global.HTMLElement = window.HTMLElement;
    global.customElements = window.customElements;
    global.trapFocus = jest.fn();
    global.removeTrapFocus = jest.fn();

    const scriptPath = path.resolve(__dirname, '../docs/website/website-v1/assets/details-modal.js');
    delete require.cache[require.resolve(scriptPath)];
    require(scriptPath);
    DetailsModal = window.customElements.get('details-modal');
    instance = document.querySelector('details-modal');
  });

  afterEach(() => {
    delete global.window;
    delete global.document;
    delete global.HTMLElement;
    delete global.customElements;
    delete global.trapFocus;
    delete global.removeTrapFocus;
  });

  test('isOpen reflects open attribute', () => {
    expect(instance.isOpen()).toBe(false);
    instance.open({ target: instance.summaryToggle });
    expect(instance.isOpen()).toBe(true);
  });

test.skip('close removes open attribute', () => {
  instance.open({ target: instance.summaryToggle });
  instance.close();
  expect(instance.isOpen()).toBe(false);
});
});

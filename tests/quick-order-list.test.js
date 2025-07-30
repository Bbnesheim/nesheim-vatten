const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('QuickOrderList updateMessage', () => {
  let window, document, QuickOrderList, instance;

  beforeEach(() => {
    const dom = new JSDOM(`<!DOCTYPE html><quick-order-list></quick-order-list>`);
    window = dom.window;
    document = window.document;
    global.window = window;
    global.document = document;
    global.HTMLElement = window.HTMLElement;
    global.customElements = window.customElements;
    global.BulkAdd = class extends window.HTMLElement {};
    global.debounce = (fn) => fn;
    global.publish = jest.fn();
    global.PUB_SUB_EVENTS = { cartUpdate: 'cart-update' };
    window.quickOrderListStrings = {
      itemRemoved: 'Removed [quantity] item',
      itemsRemoved: 'Removed [quantity] items',
      itemAdded: 'Added [quantity] item',
      itemsAdded: 'Added [quantity] items'
    };

    const scriptPath = path.resolve(__dirname, '../themes/website-v1/assets/quick-order-list.js');
    const scriptContent = fs.readFileSync(scriptPath, 'utf8');
    window.Function(scriptContent).call(window);
    QuickOrderList = window.customElements.get('quick-order-list');

    instance = document.createElement('quick-order-list');
    Object.setPrototypeOf(instance, QuickOrderList.prototype);
    instance.innerHTML = '<form></form><div class="quick-order-list__total"></div><div class="quick-order-list__table"></div><span class="quick-order-list__message-text"></span><span class="quick-order-list__message-icon hidden"></span>';
    document.body.appendChild(instance);
  });

  afterEach(() => {
    delete global.window;
    delete global.document;
    delete global.HTMLElement;
    delete global.customElements;
    delete global.BulkAdd;
    delete global.debounce;
    delete global.publish;
    delete global.PUB_SUB_EVENTS;
  });

  test('shows icon when quantity positive', () => {
    const icon = instance.querySelector('.quick-order-list__message-icon');
    instance.updateMessage(2);
    expect(icon.classList.contains('hidden')).toBe(false);
    expect(instance.querySelector('.quick-order-list__message-text').innerHTML).toBe('Added 2 items');
  });

  test('hides icon when quantity negative', () => {
    const icon = instance.querySelector('.quick-order-list__message-icon');
    instance.updateMessage(-1);
    expect(icon.classList.contains('hidden')).toBe(true);
    expect(instance.querySelector('.quick-order-list__message-text').innerHTML).toBe('Removed 1 item');
  });
});

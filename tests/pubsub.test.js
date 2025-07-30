const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('pubsub module', () => {
  let subscribe, publish, window;

  beforeEach(() => {
    const dom = new JSDOM('<!DOCTYPE html>');
    window = dom.window;
    const scriptPath = path.resolve(__dirname, '../docs/website/website-v1/assets/pubsub.js');
    const scriptContent = fs.readFileSync(scriptPath, 'utf8');
    window.Function(scriptContent).call(window);
    subscribe = window.subscribe;
    publish = window.publish;
  });

  test('subscribe and publish events', async () => {
    const cb = jest.fn();
    const unsubscribe = subscribe('test', cb);
    await publish('test', 1);
    expect(cb).toHaveBeenCalledWith(1);
    unsubscribe();
    await publish('test', 2);
    expect(cb).toHaveBeenCalledTimes(1);
  });
});

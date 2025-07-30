/**
 * @jest-environment jsdom
 */
const { axe, toHaveNoViolations } = require('jest-axe');
const { TextEncoder, TextDecoder } = require('util');

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

expect.extend(toHaveNoViolations);

describe('Accessibility', () => {
  it('sample markup has no violations', async () => {
    document.body.innerHTML = '<button>Click</button>';
    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });
});

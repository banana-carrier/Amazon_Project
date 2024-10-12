import formatCurrency from '../scripts/utils/money.js';

describe('Test suite: formatCurrency', () => {
  it('Converts cents into USD', () => {
    expect(formatCurrency(2095)).toEqual('20.95');
  });

  it('Works with 0', () => {
    expect(formatCurrency(0)).toEqual('0.00');
  });

  it('Rounds up to the nearest cent', () => {
    expect(formatCurrency(2000.5)).toEqual('20.01');
  });

  it('Rounds down to the nearest cent', () => {
    expect(formatCurrency(2000.3)).toEqual('20.00');
  });
});
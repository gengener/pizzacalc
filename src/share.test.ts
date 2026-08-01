import { describe, expect, it } from 'vitest';
import { shareTextWithLink } from './share';

describe('share text', () => {
  it('puts the recipe and link on separate paragraphs', () => {
    expect(shareTextWithLink('PizzaCalc\nFlour: 941 g', 'https://example.test/?v=1'))
      .toBe('PizzaCalc\nFlour: 941 g\n\nhttps://example.test/?v=1');
  });

  it('does not alter localized recipe text or the URL', () => {
    expect(shareTextWithLink('Sale: 18,8 g', 'https://example.test/?h=70&y=idy'))
      .toBe('Sale: 18,8 g\n\nhttps://example.test/?h=70&y=idy');
  });
});

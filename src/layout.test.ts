import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const mainSource = readFileSync(new URL('./main.ts', import.meta.url), 'utf8');
const layoutCss = readFileSync(new URL('./overrides.css', import.meta.url), 'utf8');
const baseCss = readFileSync(new URL('./styles.css', import.meta.url), 'utf8');

describe('layout and route contracts', () => {
  it('keeps legal links as separate flex items without a hidden separator', () => {
    expect(mainSource).toContain('<footer class="footer-links">');
    expect(mainSource).not.toContain('<span aria-hidden="true"> · </span>');
    expect(layoutCss).toMatch(/\.footer-links\{[^}]*display:flex[^}]*gap:/);
  });

  it('uses one 800px page width and stacks the calculator cards', () => {
    expect(layoutCss).toContain(':root{--page-width:800px}');
    expect(layoutCss).toMatch(/\.site-header\{[^}]*max-width:var\(--page-width\)/);
    expect(layoutCss).toContain('.page-shell,.page-shell--subpage{max-width:var(--page-width)');
    expect(layoutCss).toContain('.calculator-page .grid{grid-template-columns:1fr}');
  });

  it('stacks page titles above their introductory text', () => {
    expect(layoutCss).toMatch(/\.page-heading\{[^}]*margin:0 0 1\.75rem[^}]*padding:0[^}]*display:block/);
  });

  it('orders the visible languages as Italian, German, English', () => {
    expect(mainSource).toContain("(['it', 'de', 'en'] as Lang[])");
  });

  it('scrolls a newly calculated result below the sticky header', () => {
    expect(mainSource).toContain('<section id="result" class="result"');
    expect(mainSource).toContain('requestAnimationFrame(scrollResultIntoView)');
    expect(mainSource).toContain("document.querySelector<HTMLElement>('#result')?.scrollIntoView({");
    expect(layoutCss).toContain('.calculator-page .result{scroll-margin-top:5.75rem}');
  });

  it('provides overflow-dependent up and down controls on the calculator', () => {
    expect(mainSource).toContain('${resultView(t)}${choiceDialogView(t)}${scrollControls()}</main>');
    expect(mainSource).toContain('document.documentElement.scrollHeight > window.innerHeight + 1');
  });

  it('keeps the menu and PizzaCalc brand visible while scrolling', () => {
    expect(layoutCss).toMatch(/\.site-header\{[^}]*position:sticky[^}]*top:0[^}]*z-index:10/);
  });

  it('uses a more compact header without shrinking its controls', () => {
    expect(layoutCss).toMatch(/\.site-header\{[^}]*padding:\.7rem 1\.25rem/);
    expect(baseCss).toContain('.menu summary{width:2.75rem;height:2.75rem');
    expect(baseCss).toContain('.brand{grid-column:2;font-weight:850;font-size:1.35rem');
  });

  it('puts the current practice reference on its own line', () => {
    expect(mainSource).toContain('<small><span>${u.noAutomaticYeast}</span><a href="#info">${u.reference}</a></small>');
    expect(layoutCss).toContain('.profile small a{display:block');
  });

  it('keeps copy and share actions visible before a calculation', () => {
    expect(mainSource).toContain("if (!result) return `<section class=\"card share-card\">${sharingActionsView(t)}</section>`;");
    expect(mainSource).toContain('id="copy-action"');
    expect(mainSource).toContain('id="share-action"');
  });

  it('offers text and link choices after a calculation', () => {
    expect(mainSource).toContain("if (result) openChoiceDialog('copy')");
    expect(mainSource).toContain("if (result) openChoiceDialog('share')");
    expect(mainSource).toContain('<dialog id="share-choice"');
    expect(mainSource).toContain("iconSvg('text')");
    expect(mainSource).toContain("iconSvg('link')");
  });

  it('resets the viewport after a hash route change', () => {
    expect(mainSource).toContain("window.addEventListener('hashchange', renderRouteFromHash)");
    expect(mainSource).toContain("window.scrollTo({ top: 0, left: 0, behavior: 'auto' })");
  });
});

import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const mainSource = readFileSync(new URL('./main.ts', import.meta.url), 'utf8');
const layoutCss = readFileSync(new URL('./overrides.css', import.meta.url), 'utf8');

describe('layout and route contracts', () => {
  it('keeps legal links as separate flex items without a hidden separator', () => {
    expect(mainSource).toContain('<footer class="footer-links">');
    expect(mainSource).not.toContain('<span aria-hidden="true"> · </span>');
    expect(layoutCss).toMatch(/\.footer-links\{[^}]*display:flex[^}]*gap:/);
  });

  it('uses one 800px page width and stacks the calculator cards', () => {
    expect(layoutCss).toContain(':root{--page-width:800px}');
    expect(layoutCss).toContain('.site-header{max-width:var(--page-width)');
    expect(layoutCss).toContain('.page-shell,.page-shell--subpage{max-width:var(--page-width)');
    expect(layoutCss).toContain('.calculator-page .grid{grid-template-columns:1fr}');
  });

  it('stacks page titles above their introductory text', () => {
    expect(layoutCss).toMatch(/\.page-heading\{[^}]*margin:0 0 1\.75rem[^}]*padding:0[^}]*display:block/);
  });

  it('resets the viewport after a hash route change', () => {
    expect(mainSource).toContain("window.addEventListener('hashchange', renderRouteFromHash)");
    expect(mainSource).toContain("window.scrollTo({ top: 0, left: 0, behavior: 'auto' })");
  });
});

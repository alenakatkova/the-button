import { newE2EPage, E2EPage, E2EElement } from '@stencil/core/testing';

describe('tb-button', () => {
  let page: E2EPage
  let el: E2EElement

  beforeEach(async function () {
    page = await newE2EPage()
    await page.setContent('<tb-button></tb-button>')
    el = await page.find('tb-button')
  })

  it('renders', async () => {
    expect(el).toHaveClass('hydrated');
  });
});

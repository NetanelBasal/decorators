import { Angular4playPage } from './app.po';

describe('angular4play App', () => {
  let page: Angular4playPage;

  beforeEach(() => {
    page = new Angular4playPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { FiredbPage } from './app.po';

describe('firedb App', () => {
  let page: FiredbPage;

  beforeEach(() => {
    page = new FiredbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

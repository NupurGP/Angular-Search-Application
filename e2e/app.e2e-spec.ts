import { SearchApplicationPage } from './app.po';

describe('search-application App', () => {
  let page: SearchApplicationPage;

  beforeEach(() => {
    page = new SearchApplicationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

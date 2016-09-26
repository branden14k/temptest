import { TemptestPage } from './app.po';

describe('temptest App', function() {
  let page: TemptestPage;

  beforeEach(() => {
    page = new TemptestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

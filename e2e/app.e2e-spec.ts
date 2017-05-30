import { SpotyAppPage } from './app.po';

describe('spoty-app App', function() {
  let page: SpotyAppPage;

  beforeEach(() => {
    page = new SpotyAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { FeedsDashboardPage } from './app.po';

describe('ng2-feeds-dashboard App', function() {
  let page: FeedsDashboardPage;

  beforeEach(() => {
    page = new FeedsDashboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

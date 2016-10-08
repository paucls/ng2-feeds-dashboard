import { Ng2PersonalDashboardPage } from './app.po';

describe('ng2-personal-dashboard App', function() {
  let page: Ng2PersonalDashboardPage;

  beforeEach(() => {
    page = new Ng2PersonalDashboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { ABSCDNPage } from './app.po';

describe('abscdn App', () => {
  let page: ABSCDNPage;

  beforeEach(() => {
    page = new ABSCDNPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

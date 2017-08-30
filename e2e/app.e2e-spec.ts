import { TestAngularPHPPage } from './app.po';

describe('test-angular-php App', () => {
  let page: TestAngularPHPPage;

  beforeEach(() => {
    page = new TestAngularPHPPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

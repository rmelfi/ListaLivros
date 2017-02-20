import { FCamaraPage } from './app.po';

describe('fcamara App', () => {
  let page: FCamaraPage;

  beforeEach(() => {
    page = new FCamaraPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

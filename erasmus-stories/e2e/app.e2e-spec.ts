import { ErasmusStoriesPage } from './app.po';

describe('erasmus-stories App', () => {
  let page: ErasmusStoriesPage;

  beforeEach(() => {
    page = new ErasmusStoriesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

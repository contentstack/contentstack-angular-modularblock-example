import { browser } from 'protractor';

const expectedTitle = 'Contentstack Angular Modular-block example';

describe('Initial page', () => {

  it(`has title '${expectedTitle}'`, () => {
    expect(browser.getTitle()).toEqual(expectedTitle);
  });
});

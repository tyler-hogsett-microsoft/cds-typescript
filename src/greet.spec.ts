import rewiremock from 'rewiremock';

describe('greet', () => {
  it('outputs a message to the console', () => {
    const greet = (rewiremock.proxy('./greet.ts', {
      './calculateFullName': () => {
        console.log('calculating full name');
      }
    }) as typeof import('./greet')).default;
    greet({ firstName: 'John', lastName: 'Doe' });
  });
});

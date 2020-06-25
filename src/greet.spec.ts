import rewiremock from 'rewiremock';
import { stub, restore } from 'sinon';
import { expect, use } from 'chai';
import sinonChai from 'sinon-chai';
import { Person } from './Person.model';

use(sinonChai);

type CalculateFullName = typeof import('./calculateFullName').default;
type Greet = typeof import('./greet').default;

describe('greet', () => {
  let calculateFullNameStub: CalculateFullName;
  let greet: Greet;
  let person: Person;

  beforeEach(() => {
    calculateFullNameStub = stub<
      Parameters<CalculateFullName>,
      ReturnType<CalculateFullName>
    >();
    greet = (rewiremock.proxy('./greet.ts', {
      './calculateFullName': calculateFullNameStub
    }) as typeof import('./greet')).default;
    person = { firstName: 'John', lastName: 'Doe' };
  });

  afterEach(() => {
    restore();
  });

  it('calls calculateFullName', () => {
    greet(person);
    expect(calculateFullNameStub).to.have.been.called;
  });

  it('pass the given person into calculateFullName', () => {
    greet(person);
    expect(calculateFullNameStub).to.have.been.calledWith(person);
  });
});

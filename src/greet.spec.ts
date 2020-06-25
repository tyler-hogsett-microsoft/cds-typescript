import rewiremock from 'rewiremock';
import { stub, restore, spy } from 'sinon';
import { expect, use } from 'chai';
import sinonChai from 'sinon-chai';
import { Person } from './Person.model';

use(sinonChai);

type CalculateFullName = typeof import('./calculateFullName').default;
type Greet = typeof import('./greet').default;
type Say = typeof console.log;

describe('greet', () => {
  let calculateFullNameStub: CalculateFullName;
  let sayStub: Say;
  let greet: Greet;
  let person: Person;
  let fullName: string;

  beforeEach(() => {
    fullName = Math.random().toString();
    calculateFullNameStub = spy(() => fullName);
    greet = (rewiremock.proxy('./greet.ts', {
      './calculateFullName': calculateFullNameStub
    }) as typeof import('./greet')).default;
    person = { firstName: 'John', lastName: 'Doe' };
    sayStub = stub<Parameters<Say>, ReturnType<Say>>();
  });

  afterEach(() => {
    restore();
  });

  it('calls calculateFullName', () => {
    greet(person, sayStub);
    expect(calculateFullNameStub).to.have.been.called;
  });

  it('pass the given person into calculateFullName', () => {
    greet(person, sayStub);
    expect(calculateFullNameStub).to.have.been.calledWith(person);
  });

  it('calls "say"', () => {
    greet(person, sayStub);
    expect(sayStub).to.have.been.called;
  });

  it('passes output of "calculateFullName" into "say"', () => {
    greet(person, sayStub);
    expect(sayStub).to.have.been.calledWith(fullName);
  });
});

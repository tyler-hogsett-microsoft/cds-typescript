import { Person } from './Person.model';
import calculateFullName from './calculateFullName';

export default function greet(
  person: Person,
  say: typeof console.log = console.log
): void {
  say(calculateFullName(person));
}

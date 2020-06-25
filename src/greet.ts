import { Person } from './Person.model';
import calculateFullName from './calculateFullName';

export default function greet(person: Person): void {
  calculateFullName(person);
}

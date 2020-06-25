import { Person } from './Person.model';

export default function calculateFullName(person: Person): string {
  return `${person.firstName} ${person.lastName}`;
}

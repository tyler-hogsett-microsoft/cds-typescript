greet({
    firstName: "Tommy",
    lastName: "Pickles"
});

type Person = {
    firstName: string,
    lastName: string
}

function greet(person: Person) {
    console.log(`Hello, ${person.firstName} ${person.lastName}!`);
}
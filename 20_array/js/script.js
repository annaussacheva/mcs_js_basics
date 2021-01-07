let people = ['Vasya', 'Pasha', 'Dasha'];

console.log(people);
console.log(people[2]);

people[2] = '34';
console.log(people[2]);
console.log(people);

console.log(people.length);


let bigArray = [
    [1, 2, 3],
    [true, false],
    ['a', 'b', 'c']
]
console.log(bigArray[0]);
console.log(bigArray[0][1])


let bigObject = {
    names: ['Vasya', 'Pasha', 'Dasha'],
    grades: [
        {
            intern: 1,
            junior: 2
        },
        {
            middle: 3,
            senior: 1
        }
    ]
}

console.log(bigObject.names[0]);
console.log(bigObject.grades[1].senior);

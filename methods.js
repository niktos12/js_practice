const people = [
    {
        name: 'Bob',
        age: 20
    },
    {
        name: 'Alex',
        age: 35
    },
    {
        name: 'Jane',
        age: 25
    },
    {
        name: 'Kate',
        age: 30
    }
]
const filteredAge = people.filter(function (person){
    return person.age > 30  // будет выводить только тех людей возраст которых больше 30  
})
// console.log(filteredAge);    //    [ { name: 'Alex', age: 35 } ]

const namesPerson = people.map(function (person){
    return person.name;  // выводим имя каждого человека
})
// console.log(namesPerson);  // [ 'Bob', 'Alex', 'Jane', 'Kate' ]

const forEachPeople = people.forEach(function(person){    
    console.log(person);                                  
});
/*  выведет каждого человека(имя, возраст)
  { name: 'Bob', age: 20 }
  { name: 'Alex', age: 35 }
  { name: 'Jane', age: 25 }
  { name: 'Kate', age: 30 } */
const reduceAges = people.reduce(function(total, person){
    return total + person.age;  // считает сумму всех возрастов
}, 0) // начальное значение total ставим на 0
// console.log(reduceAges);   // 110
function forPeople(people){
    for(let i = 0; i < people.length; i++){      // проход по массиву
        console.log(people[i])  // выводим каждого человека
    }
}
// forPeople(people)      
/*  { name: 'Bob', age: 20 }
    { name: 'Alex', age: 35 }
    { name: 'Jane', age: 25 }
    { name: 'Kate', age: 30 } */

let randomNumber;
let arrayNumbersLessThan500 = [];
    
function fullRandom(){
    while (randomNumber < 500 || randomNumber == undefined){ // пока случайное число меньше 500 или равно undefined
        randomNumber = Math.round(Math.random() * 1001);
        if(randomNumber < 500){
            arrayNumbersLessThan500.push(randomNumber); // если рандомное число меньше 500, то добавляем его в массив
        }
    }
    return arrayNumbersLessThan500; // в конце возвращаем массив
}
    
console.log(fullRandom());  
// firts try : [226]
// second try : [66, 439]
// third try :  [ 289, 95, 115, 46, 235, 220 ]


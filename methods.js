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
const filteredAge = people.filter((person) => (person.age > 30));  // будет выводить только тех людей возраст которых больше 30  

// console.log(filteredAge);    //    [ { name: 'Alex', age: 35 } ]

const namesPerson = people.map((person) => (person.name));  // выводим имя каждого человека
// console.log(namesPerson);  // [ 'Bob', 'Alex', 'Jane', 'Kate' ]

const forEachPeople = people.forEach(function(person){    
    console.log(person);                                  
});
/*  выведет каждого человека(имя, возраст)
  { name: 'Bob', age: 20 }
  { name: 'Alex', age: 35 }
  { name: 'Jane', age: 25 }
  { name: 'Kate', age: 30 } */
const reduceAges = people.reduce((total, person) => total + person.age, 0);  // считает сумму всех возрастов // начальное значение total ставим на 0
console.log(reduceAges);   // 110
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
    
function fullRandom(min, max, minNumberForEnd){
    min = Math.ceil(min);
    max = Math.floor(max);
    while (randomNumber < minNumberForEnd || randomNumber == undefined){ // пока случайное число меньше 500
        randomNumber = Math.round(min + Math.random() * (max + 1 - min)) + min;
        if(randomNumber < minNumberForEnd){
            arrayNumbersLessThan500.push(randomNumber); // если рандомное число меньше 500, то добавляем его в массив
        }
    }
    return arrayNumbersLessThan500; // в конце возвращаем массив
}
    
console.log(fullRandom(0,1000,500));
// firts try : [ 193, 478 ]
// second try : [ 197 ]
// third try :  []


const field = [["","",""],["","",""],["","",""]];
let fillFieldInterval;
let intervalLogField;

function fillField(){
    let isFilled = true;
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            isFilled = true;
            if(field[i][j] === ''){
                field[i][j] = Math.random() < 0.5 ? 'X' : 'O';
                isFilled = false;
                return;
            }else{
                isFilled = true;
            }
        }
    }
    if(isFilled === true) {
        clearInterval(fillFieldInterval); // Останавливаем функцию fillField
        clearInterval(intervalLogField); // Останавливаем функцию logField(т.е. не выводим в консоль)
        console.log('field filled');
}


}

function logField() {
    console.log(field);
}
fillFieldInterval = setInterval(fillField, 1000); // Запускаем функцию fillField каждую секунду
intervalLogField = setInterval(logField, 1000);




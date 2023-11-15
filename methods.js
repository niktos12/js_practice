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
    
// function fullRandom(min, max, minNumberForEnd){
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     while (randomNumber < minNumberForEnd || randomNumber == undefined){ // пока случайное число меньше 500
//         randomNumber = Math.round(min + Math.random() * (max + 1 - min)) + min;
//         if(randomNumber < minNumberForEnd){
//             arrayNumbersLessThan500.push(randomNumber); // если рандомное число меньше 500, то добавляем его в массив
//         }
//     }
// }
function random(min,max){
    return Math.floor(min + Math.random() * (max + 1 - min))
}

const field = [["","",""],["","",""],["","",""]];
function fillField(){
    let emptyCells = [];
    for(let i = 0; i < field.length; i++){
        for(let j = 0; j < field[i].length; j++){
            if(field[i][j] === ''){
                emptyCells.push({x: i, y: j});
            }
        }
    }
    if(emptyCells.length > 0){
        // let randomIndex = Math.floor(Math.random() * emptyCells.length);
        let randomIndex = random(1,emptyCells.length) - 1;
        return emptyCells[randomIndex];
    }
    return null;
}
const intervalId = setInterval(function(){
    let randomCell = fillField();
    if(randomCell !== null){
        // let randomSymbol = Math.random() < 0.5 ? 'X' : 'O';
        let randomSymbol = random(0,1) == 0 ? 'X' : 'O';
        field[randomCell.x][randomCell.y] = randomSymbol;
        console.log(field);
    }else{
        clearInterval(intervalId);
        console.log('no empty cells');
    }
    
},1000)



// function getRandomInt(min:number,max:number) { 
//     return Math.floor(min + Math.random() * (max + 1 - min)); 
// } 
 
// const fields = [ 
//     ["","",""], 
//     ["","",""], 
//     ["","",""] 
// ] 
// function fillRandomCell() { 
//     const getRandomIndex1= getRandomInt(1,fields.length)-1; 
//     const getRandomIndex2= getRandomInt(1,fields[0].length)-1; 
//     let field = fields[getRandomIndex1][getRandomIndex2]; 
//     if(field=="") { 
//         const char = getRandomInt(0,1) == 0 ? "X" : "O"; 
//         fields[getRandomIndex1][getRandomIndex2] = char; 
//         console.log(fields); 
//     } else { 
//         let fillFields = 0; 
//         for(let i = 0; i<fields.length; i++) { 
//             for(let j = 0;j<fields[i].length; j++) { 
//                 if(fields[i][j]!="") fillFields++; 
//             } 
//         } 
//         if(fillFields==9) { 
//             console.log("Все поля заполнены!") 
//             return; 
//         } 
//     } 
//     setTimeout(()=>{fillRandomCell()},1000) 
// } 
// fillRandomCell();


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
// function random(min,max){
//     return Math.floor(min + Math.random() * (max + 1 - min))
// }

// const field = [["","",""],["","",""],["","",""]];
// function fillField(){
//     let emptyCells = [];
//     for(let i = 0; i < field.length; i++){
//         for(let j = 0; j < field[i].length; j++){
//             if(field[i][j] === ''){
//                 emptyCells.push({x: i, y: j});
//             }
//         }
//     }
//     if(emptyCells.length > 0){
//         // let randomIndex = Math.floor(Math.random() * emptyCells.length);
//         let randomIndex = random(1,emptyCells.length) - 1;
//         return emptyCells[randomIndex];
//     }
//     return null;
// }
// const intervalId = setInterval(function(){
//     let randomCell = fillField();
//     if(randomCell !== null){
//         // let randomSymbol = Math.random() < 0.5 ? 'X' : 'O';
//         let randomSymbol = random(0,1) == 0 ? 'X' : 'O';
//         field[randomCell.x][randomCell.y] = randomSymbol;
//         console.log(field);
//     }else{
//         clearInterval(intervalId);
//         console.log('no empty cells');
//     }
    
// },1000)
console.log(Math.pow(2,1000000000))
console.log((1000000000*3) + 6)



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
// const seqlist = function(first,c,l){
//     let result = [];
//     result[0] = first;
//     for(let i = 1;i < l; i++){
//         result[i] = (first + (c*i));
//     }
//     console.log(result)
//   }
// seqlist(0,1,20)
// function fizzbuzz(n) {
//     let result = [];
//     for (let i = 1; i <= n; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             result.push('FizzBuzz');
//         } else if (i % 3 === 0) {
//             result.push('Fizz');
//         } else if (i % 5 === 0) {
//             result.push('Buzz');
//         } else {
//             result.push(i);
//         }
//     }
//     return result;
// }
//   console.log(fizzbuzz(15))
// function descendingOrder(n){
//     return parseInt(String(n).split('').sort((a,b) => b - a).join(''));
//   }
//   console.log(descendingOrder(42145))
//   const obj = { 
//     name:"oleg", 
//     age:"mya",
//     }
// obj.repeat = obj;
// console.log(obj['repeat'])
function detectOperator(a){
    var op="no info";
    let stringNumber = String(a);
    stringNumber.includes('039') ? op = 'Golden Telecom' : op = 'no info';
    stringNumber.includes('050') || stringNumber.includes('066')  || stringNumber.includes('095') || stringNumber.includes('099') ? op = 'MTS' : op = 'no info';
    stringNumber.includes('063') || stringNumber.includes('093') ? op = "Life:)" : op = 'no info';
    stringNumber.includes('067') || stringNumber.includes('096') || stringNumber.includes('097') || stringNumber.includes('098') ? op = 'Kyivstar' : op = 'no info';
    stringNumber.length > 12 ? op = 'no info' : op = 'no info';
    return op;
    }



    // function detectOperator(a){
    //     var op="no info";
    //     let stringNumber = String(a);
    //       if(stringNumber.includes('039')){
    //         return 'Golden Telecom' ;
    //       }else if(stringNumber.includes('050') || stringNumber.includes('066')  || stringNumber.includes('095') || stringNumber.includes('099')){
    //         return 'MTS';
    //       }else if(stringNumber.includes('063') || stringNumber.includes('093')){
    //         return "Life:)";
    //       }else if(stringNumber.includes('067') || stringNumber.includes('096') || stringNumber.includes('097') || stringNumber.includes('098')){
    //         return 'Kyivstar';
    //       }else if(stringNumber.length > 12){
    //         return op;
    //       }
        
    //     }
    

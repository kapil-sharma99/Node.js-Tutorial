// const person = {
//     name: 'Max',
//     age: 29,
//     hobbies: true
// }


// function summarizeUser(userName, userAge, userHobbies) {
//     return (
//         'Name is ' +
//         userName + 
//         '.age is ' +
//         userAge + 
//         ', and the user has hobbies: ' +
//         userHobbies
//     );
// }

// console.log(summarizeUser(name, age, hobbies));

// const  hobbies = ['Sports', 'Cooking']
// console.log(hobbies)
// console.log(hobbies.map(hobby => 'Hobby: ' + hobby))

// ........spread operator.......

// const toArray = (...args) => {
//     return args
// }

// console.log(toArray(1,2,3,4,5,6,7,8,9))

// .........object destructing.......... 

// const printName = ({ name }) => {
//     console.log(name)
// }

// printName(person)

// const {name , age} = person

// console.log(name, age)

// ........Async code.......
// setTimeout(() => {
// 	console.log('Timer is done')
// }, 2000);

// console.log('HElllo')
// console.log('Hiiiiii')

// const fetch = require("node-fetch");
// const data = fetch('https://jsonplaceholder.typicode.com/todos/');


// data
// 	.then((d) => {
// 		console.log(d);
// 	})
// 	.catch((e) => {
// 		console.log(e);
// 	})
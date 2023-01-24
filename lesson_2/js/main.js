// async/await 
// without async 
// function func() {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(res => console.log(res))
//     console.log('hello');
// };
// func();

// with async
// async function func() {
//     await fetch('https://jsonplaceholder.typicode.com/posts')
//                 .then(res => console.log(res))
//             console.log('hello');
// };
// func();

// without async 
// function func() {
//     let res = fetch('https://jsonplaceholder.typicode.com/posts');
//     let data = res.json();
//     console.log('hello');
// };
// func();

// with async  
// async function func() {
//     let res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     let data = await res.json();
//     console.log(data);
// };
// func();

// TRY/CATCH (try/catch)


// const API = 'https://jsonplaceholder.typicode.com/posts';

// try {
//     let res = fetch(API);
//     let data = res.json();
//     console.log(data);
// } catch {
//     console.log('ERROR');
// }
// catch(e) {   //TypeError: res.json is not a function at main.js:39:20 in grey
//     console.log(e);
// }
// console.log('hello');
// console.log('hello2');


const { reject } = require("async");
const { text } = require("stream/consumers");

//asyncrnious code because it does not finish immediately 
// const fetchData = callback => {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             callback('Done');
//         }, 1500);
//     });  
// };
const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done');
        }, 1500);
    });  
    return promise;
};

// setTimeout(() => {
//     console.log('Timer is done');
// },2000);

// setTimeout(() => {
//     console.log('Timer is done');
//     fetchData().then(text => {
//         console.log(text);
//     })
// },2000);

setTimeout(() => {
    console.log('Timer is done');
    fetchData()
    .then(text => {
        console.log(text);
        return fetchData();
    })
    .then(text2 => {
        console.log(text2);
    })
},2000);

//syncrynious code
//because executes one after the other immediately
console.log('Hello');
console.log('Hi');
// create a new promise

const promise = new Promise((resolve,reject) => {
    console.log('In promise code')
    resolve('done!');
    // resolve('error in fetching data!');
});
promise
    .then((value) => {
        setTimeout(() => {
            console.log(`resolving ... ${ value }`);
        },2000)
    })
    .catch((error)=> {
        setTimeout(() => {
            console.log('rejecting...')
        },2000)
    })
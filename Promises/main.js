// create a new promise

const promise = new Promise((resolve,reject) => {
    console.log('In promise code')
    reject()
});
promise
    .then(() => {
        setTimeout(() => {
            console.log('Resolving...');
        },2000)
    })
    .catch(error => {
        console.log('Promise rejected',error);
    })
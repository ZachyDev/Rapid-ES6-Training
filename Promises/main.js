// create a new promise

const promise = new Promise((resolve,reject) => {
    console.log('In promise code')
    resolve()
});
promise
    .then(() => {
        setTimeout(() => {
            console.log('Resolving...');
        },2000)
    })
    .catch((error)=> {
        setTimeout(() => {
            console.log('rejecting...')
        },2000)
    })
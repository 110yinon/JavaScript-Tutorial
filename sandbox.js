const userLeft = false;
const userWatchingCatMeme = false;

function watchTutorialCallback(callback, errorCallback) {
    if (userLeft) {
        errorCallback({
            name: 'User Left',
            message: ':('
        })
    } else if (userWatchingCatMeme) {
        errorCallback({
            name: 'User Watching Cat Meme',
            message: 'WebDevSimplifeid < Cat'
        })
    } else {
        callback('Thumbs up and subscribe')
    }
}


watchTutorialCallback(msg => {
    console.log('Success: ' + msg);
}, err => {
    console.log(err.name + ' ' + err.message);
})

// *****************************************
// *****************************************
// *****************************************
// *****************************************
// *****************************************
// *****************************************

function watchTutorialCallbackPromise() {
    return new Promise((callback, errorCallback) => {
        if (userLeft) {
            errorCallback({
                name: 'User Left',
                message: ':('
            })
        } else if (userWatchingCatMeme) {
            errorCallback({
                name: 'User Watching Cat Meme',
                message: 'WebDevSimplifeid < Cat'
            })
        } else {
            callback('Thumbs up and subscribe')
        }
    });
}

console.log('*****************************');


watchTutorialCallbackPromise().then(msg => {
    console.log('Success: ' + msg);
}).catch(err => {
    console.log(err.name + ' ' + err.message);
})

const userLeft = false;
const userWatchingCatMeme = false;

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
            setTimeout(() => callback('Thumbs up and subscribe'), 2000);
        }
    });
}

console.log(1);
watchTutorialCallbackPromise().then(msg => {
    console.log('Success: ' + msg);
    console.log(2);
}).catch(err => {
    console.log(err.name + ' ' + err.message);
})
console.log(3);
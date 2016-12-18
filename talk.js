const cp = require("child_process");

let speach = 'Hello, welcome to node.js. Ha Ha Ha I am so funny';

// function talkToMe(what) {
//     cp.exec(`say ${what}`, (err, stdout, stderr) => {
//         if (err) {
//             console.log(err);
//             return;
//         }
//     });
// };

// talkToMe(speach);
// talkToMe('I will be here all week!');
// console.log("I'm done talking.")




// function talkToMe(what, callback) {
//     cp.exec(`say ${what}`, (err, stdout, stderr) => {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         callback();
//     });
// };

// talkToMe(speach, () => {
//     talkToMe('I will be here all week!', () => {
//         console.log("I'm done talking.")
//     });
// });



var talkToMe = (what) => {
    return new Promise((resolve, reject) => {
        cp.exec(`say ${what}`, (err, stdout, stderr) => {
            if (err) {
                reject (err);
            }
            resolve();
        });
    });
};

talkToMe(speach)
    .then(() => {return talkToMe('I will be here all week!');})
    .then(() => {return console.log('I am done talking!');})
    .catch((e) => {});

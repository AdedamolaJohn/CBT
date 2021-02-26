const matricNo = document.getElementById('matNo');
const surname = document.getElementById('surName');
const submitBtn = document.getElementById('submitBtn');
const matNoDisplay = document.getElementById('matNoDisplay');
const examPage = document.getElementById('exam-body');
const nxtBtn = document.getElementById('nxtBtn');

// url= http://192.168.43.44:3000/api/login
matricNo = BSP / CSC / ND / 19 / 0010;
surname = adeyinka

// async function logIn() {
//     const response = await fetch("http://127.0.0.1:5500/assets/Custom-JS/user.json");
//     let userData = await response.json();
//     console.log(userData);
// };
// logIn();

// const sendRequest = (method, url, data) => {
//     return fetch(url).then(response => {
//         return response.json();
//     });
// };

// const sendData = () => {
//     sendRequest('POST', 'http://127.0.0.1:5500/assets/Custom-JS/user.json', {
//             matNo: matricNo,
//             surname: surname
//         })
//         .then(response => {
//             console.log(responseData);
//         })
//         .catch(err => {
//             console.log(err);
//         });
// }



async function getQuestion() {
    const response = await fetch("http://127.0.0.1:5500/assets/Custom-JS/questions.json");
    let data = await response.json();
    var idOfQuestion;
    // var userQuestionPair = [{
    //     "user": "babadimeji",
    //     "questions": ""
    // }];



    for (var i = 0; i < 20; i += 1) {
        var userQuestionPair = [{
            "user": $[matricNo],
            "questions": ""
        }];

        var idOfQuestion = Math.floor(Math.random() * data.length);
        userQuestionPair.questions = data[idOfQuestion];
        console.log(userQuestionPair);
        // for (var j = 0; j < userQuestionPair.length; j += 1) {
        //     document.getElementById('question').innerHTML = userQuestionPair[j].questions;
        // }


        // document.getElementById('question').innerHTML = userQuestionPair;
    }

    // console.log(userQuestionPair);


};

getQuestion();



/* Timer Script */
const startMinutes = 20;
let time = startMinutes * 60;
const timer = document.getElementById('timer');

setInterval(updatetimer, 1000);

function updatetimer() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    timer.innerHTML = `${minutes} : ${seconds}`;
    time -= 1;

    if (time <= 0 && seconds <= 0) {
        clearInterval(time = 0);
        windows.location.href = "../../CBT Testrun/improved/login.html";
    }
}

/* Timer Script End */


// const login = () => {
//     MatricNo = matricNo.value;
//     Surname = surname.value;
//     // preload();

//     for (var i = 0; i < mockApi.length; i += 1) {
//         if (MatricNo === mockApi[i].mat_no && Surname === mockApi[i].surname) {
//             window.location.href = "../../CBT Testrun/improved/index.html";
//             matNoDisplay.innerHTML = mockApi[i].mat_no;
//         } else {
//             alert("Invalid Username or Password");
//         }
//     }

// }

submitBtn.addEventListener('click', logIn);
nxtBtn.addEventListener('click', nxtQuestion);
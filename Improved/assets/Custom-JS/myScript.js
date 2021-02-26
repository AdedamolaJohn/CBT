const matricNo = document.getElementById('matNo');
const surname = document.getElementById('surName');
const submitBtn = document.getElementById('submitBtn');
const options = Array.from(document.getElementsByClassName('choice-text'));
const Q = document.getElementById('question');

let currentQuestion = {};
let acceptingAnswers = false;
let questsionCounter = 0;
let availableQuestions = [];

let questions = [];



const sendRequest = (method, url, data) => {
    return fetch(url, {
        method: method,
        body: data
    }).then(response => {
        return response.json();
    });
};


function logIn() {


    if (matricNo.value === "" || surname.value === "") {
        alert("Fill in the required details and try again.");
    } else {
        document.getElementById('spinner').hidden = false;
        document.getElementById('loginBtn').hidden = true;

        const data = new FormData();
        data.append("matric_no", matricNo.value);
        data.append("password", surname.value)

        sendRequest('POST', "https://cbtapp-dev.herokuapp.com/api/login", data).then(responseData => {
            // localStorage.setItem("User", JSON.stringify(responseData));
            // window.alert(responseData.token);
            getQuestions(responseData.token).then(response => {
                    // console.log(response);
                    // questions = JSON.stringify(response);

                    // console.log(questions);

                    // Q.insertAdjacentHTML = questions[0].optionA;
                    // for (var i = 0; i < questions.length; i += 1) {
                    //     var qIndex = Math.floor(Math.random() * questions.length);
                    //     // localStorage.setItem("Questions", JSON.stringify(response));
                    window.location.href = "/index.html";
                })
                .then(loadedQuestions => {
                    questions = loadedQuestions;
                    startExam();
                }).catch(err => {
                    console.log(err);
                });

            // displayQuestion(response);


        });
    }
};



const getQuestions = (token) => {
    return fetch('https://cbtapp-dev.herokuapp.com/api/fetch-questions', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            })
        }).then(response => {
            return response.json();
        })
        // .then(loadedQuestions => {
        //     questions = loadedQuestions;
        //     startExam();
        // }).catch(err => {
        //     console.log(err);
        // });
};

// const startExam = () => {
//     console.log(availableQuestions);
//     getNewQuestions();

// }

const getNewQuestions = () => {
    questsionCounter++;
    const qIndex = Math.floor(Math.random() * questions.length);
    currentQuestion = questions[qIndex];
    console.log(currentQuestion);
    Q.innerText = currentQuestion.question;
}












































// let availableQuestions = [];

// const startExam = () => {
//     availableQuestions = [...questions];
//     alert(availableQuestions);
//     loadNewQuestion();
// }

// const loadNewQuestion = () => {
//     const questionIndex = Math.floor(Math.random() * availableQuestions.length);
//     currentQuestion = availableQuestions[questionIndex];
//     Q.innerText = currentQuestion;

//     options.forEach(choice => {
//         const number = choice.dataset['number'];
//         choice.innerText = currentQuestion['choice' + number];
//     });

//     availableQuestions.splice(questionIndex, 1);
//     acceptingAnswers = true;

// };

// options.forEach(choice => {
//     choice.addEventListener("click", e => {
//         if (!acceptingAnswers) return;

//         acceptingAnswers = false;
//         const selectedChoice = e.target;
//         const selectedAnswer = selectedChoice.dataset["number"];
//         console.log(selectedAnswer);
//         loadNewQuestion();
//     })
// })
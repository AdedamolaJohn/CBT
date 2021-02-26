const matricNo = document.getElementById('matNo');
const surname = document.getElementById('surName');
const submitBtn = document.getElementById('submitBtn');
const matNoDisplay = document.getElementById('matNoDisplay');
// const examPage = document.getElementById('exam-body');
const nxtBtn = document.getElementById('nxtBtn');
const spinner = document.getElementById('spinner');
// const options = Array.from(document.getElementsByClassName('choice-text'));
let que_Count = 0;


const sendRequest = (method, url, data) => {
    return fetch(url, {
        method: method,
        body: data
    }).then(response => {
        return response.json();
    });
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
    });
}

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
                questions = JSON.stringify(response);



                localStorage.setItem("Questions", JSON.stringify(questions));
                window.location.href = "/index.html";
                console.log(questions);
                displayQuestion(0);
            });
        })
    };

};




const displayQuestion = (index) => {
    let Q = JSON.parse(localStorage.getItem("Questions"));
    let que_text = document.getElementById('question');
    let options_list = document.getElementById('options');
    let que_tag = "<div class='py-2 h4' id='question'><b>" + Q[index].question + "</b></div>"
    let option_tag = "<p class='choice-text' data-number='1'>" + Q[index].option[optionIndex] + "</p>" +
        "<p class='choice-text' data-number='1'>" + Q[index].option[optionIndex] + "</p>" +
        "<p class='choice-text' data-number='1'>" + Q[index].option[optionIndex] + "</p>" +
        "<p class='choice-text' data-number='1'>" + Q[index].option[optionIndex] + "</p>";
    que_text.innerHTML = que_tag;
    options_list.innerHTML = option_tag;



    // Object.values(Q).map((question) => {
    //     questions.push(question);
    //     window.alert(JSON.stringify(questions[0]['question']));
    // })
    return;
};


nxtBtn.onclick = () => {
    if (que_Count < Q.length) {
        que_Count++;
        displayQuestion(que_Count);
    } else {
        que_Count = 0
    }
}

// var Q = JSON.parse(localStorage.getItem("Questions"));
// Object.values(Q).map((question) => {
// window.alert(JSON.stringify(question));
//     questions.push(question);
// });

// window.alert(JSON.stringify(questions[1]['question']));
// document.getElementById('question').innerHTML = JSON.parse((JSON.stringify(questions[1]['question'])));
// JSON.stringify(questions[1]['options']).forEach(element => {

// for (var i = 0; i < 4; i += 1) {
//     document.getElementById('optionBlock').innerHTML = "<label class='options'>" + "<input type='radio' name='radio'>" + JSON.stringify(questions[1]['option2']); + "<span class='checkmark'></span>" + "</label>";
// };

// document.getElementById('optionA').innerHTML = JSON.stringify(questions[1]['options']['option1']);
// document.getElementById('optionB').innerHTML = JSON.stringify(questions[1]['options']['option2']);
// document.getElementById('optionC').innerHTML = JSON.stringify(questions[1]['options']['option3']);
// document.getElementById('optionD').innerHTML = JSON.stringify(questions[1]['options']['option4']);
// });

// function displayQuestion(data) {
//     let display = document.getElementById('question');
//     display.innerHTML = data[0].question;
// }

// submitBtn.addEventListener('click', logIn());
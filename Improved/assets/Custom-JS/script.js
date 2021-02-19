const matricNo = document.getElementById('matNo');
const surname = document.getElementById('surName');
const submitBtn = document.getElementById('submitBtn');
const matNoDisplay = document.getElementById('matNoDisplay');
const examPage = document.getElementById('exam-body');

fetch("http://127.0.0.1:5500/assets/Custom-JS/");
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


// const preload = () => {
//     data = loadJSON("../user.json");
// }
const mockApi = [{
        "mat_no": "BSP/ND/17/0909",
        "surname": "adenifuja"
    },

    {
        "mat_no": "BSP/ND/13/1209",
        "surname": "adewole"
    },

    {
        "mat_no": "BSP/ND/15/0358",
        "surname": "abiola"
    },

    {
        "mat_no": "BSP/ND/17/1493",
        "surname": "adeniran"
    },

    {
        "mat_no": "BSP/ND/17/0910",
        "surname": "olaoluwa"
    }

]

const login = () => {
    MatricNo = matricNo.value;
    Surname = surname.value;
    // preload();

    for (var i = 0; i < mockApi.length; i += 1) {
        if (MatricNo === mockApi[i].mat_no && Surname === mockApi[i].surname) {
            window.location.href = "../../CBT Testrun/improved/index.html";
            matNoDisplay.innerHTML = mockApi[i].mat_no;
            // setInterval(updatetimer, 1000);
        } else {
            alert("Invalid Username or Password");
        }
    }

}

submitBtn.addEventListener('click', login);
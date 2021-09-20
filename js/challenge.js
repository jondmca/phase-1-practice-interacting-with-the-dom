// defined variables
let counter = 0;
let myCounter;
let timerValue = document.getElementById('counter');
let plusButton = document.getElementById('plus');
let minusButton = document.getElementById('minus');
let likeButton = document.getElementById('heart');
let commentSection = document.getElementById('list');
let pauseButton = document.getElementById('pause');
let submitForm = document.getElementById('comment-form');
let commentText = document.getElementById('comment-input')

//Event Listeners
plusButton.addEventListener('click', setTime);
minusButton.addEventListener('click', minusTime);
likeButton.addEventListener('click', likeAmount);
pauseButton.addEventListener('click', stopTimer);
submitForm.addEventListener('submit', addComment);

//Functions
startTime();

function startTime(){
    myCounter = setInterval(setTime, 1000);
}

function setTime(){
    ++counter;
    timerValue.innerHTML = counter;
}

function minusTime(){
    --counter;
    timerValue.innerHTML = counter;
}

function likeAmount(){
    timerValue.innerHTML = counter;
    let p = document.createElement('p');
    commentSection.append(`You liked it at ${counter}!`, p);
}

function addComment(e){
    e.preventDefault()
    let comment = commentText.value
    let p = document.createElement('p');
    commentSection.append(comment, p);
    commentText.value = "";
}

function stopTimer(){
    if (pauseButton.innerText === "pause"){
        clearInterval(myCounter);
        pauseButton.innerText = "resume";
        minusButton.disabled = true;
        plusButton.disabled = true;
        likeButton.disabled = true;
    }
    else if (pauseButton.innerText === "resume"){
        startTime();
        pauseButton.innerText = "pause";
        minusButton.disabled = false;
        plusButton.disabled = false;
        likeButton.disabled = false;
    }
}
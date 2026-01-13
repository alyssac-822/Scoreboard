const homeScore = document.getElementById('home-score');
const guestScore = document.getElementById('guest-score');
const homeButtons = document.querySelectorAll('.home .points button');
const guestButtons = document.querySelectorAll('.guest .points button');
const timerDisplay = document.getElementById('timer-display');
let timerInterval;
let timeLeft = 60; // 60 seconds timer
let homePoints = 0;
let guestPoints = 0;
homeButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        homePoints += index + 1;
        homeScore.textContent = homePoints;
    });
});
function addOnePointToHome() {
    homePoints += 1;
    homeScore.textContent = homePoints;
}
function addTwoPointsToHome() {
    homePoints += 2;
    homeScore.textContent = homePoints;
}
function addThreePointsToHome() {
    homePoints += 3;
    homeScore.textContent = homePoints;
}
guestButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        guestPoints += index + 1;
        guestScore.textContent = guestPoints;
    });
});
function addOnePointToGuest() {
    guestPoints += 1;
    guestScore.textContent = guestPoints;
}
function addTwoPointsToGuest() {
    guestPoints += 2;
    guestScore.textContent = guestPoints;
}
function addThreePointsToGuest() {
    guestPoints += 3;
    guestScore.textContent = guestPoints;
}
function resetScores() {
    homePoints = 0;
    guestPoints = 0;
    homeScore.textContent = homePoints;
    guestScore.textContent = guestPoints;
    stopTimer();
    timeLeft = 60;
    timerDisplay.textContent = formatTime(timeLeft);
}
function startTimer() {
    clearInterval(timerInterval);
    timeLeft = 60;
    timerDisplay.textContent = formatTime(timeLeft);
    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = formatTime(timeLeft);
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}
function stopTimer() {
    clearInterval(timerInterval);
}
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}
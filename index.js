const homeScore = document.getElementById('home-score');
const guestScore = document.getElementById('guest-score');
const homeButtons = document.querySelectorAll('.home .points button');
const guestButtons = document.querySelectorAll('.guest .points button');
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
}
let guestScore = 0;
let homeScore =0;
const homescoreboard = document.getElementById("home-score");
const guestscoreboard = document.getElementById("guest-score");
function addhomescore1(){
    homeScore += 1;
    homescoreboard.textContent = homeScore;
}
function addhomescore2(){
    homeScore += 2;
    homescoreboard.textContent = homeScore;
}
function addhomescore3(){
    homeScore += 3;
    homescoreboard.textContent = homeScore;
}   
function addguestscore1(){
    guestScore += 1;
    guestscoreboard.textContent = guestScore;
}   
function addguestscore2(){
    guestScore += 2;
    guestscoreboard.textContent = guestScore;
}   
function addguestscore3(){
    guestScore += 3;
    guestscoreboard.textContent = guestScore;
}  

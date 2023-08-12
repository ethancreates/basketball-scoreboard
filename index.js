let score = 0
let scoreHome = document.getElementById("homeScore")
let scoreAway = document.getElementById("guestScore")

function HplusOne() {
    score += 1
    scoreHome.textContent = score
}

function HplusTwo() {
    score += 2
    scoreHome.textContent = score
}

function HplusThree() {
    score += 3
    scoreHome.textContent = score
}

function GplusOne() {
    score += 1
    scoreAway.textContent = score
}

function GplusTwo() {
    score += 2
    scoreAway.textContent = score
}

function GplusThree() {
    score += 3
    scoreAway.textContent = score
}

function resetBtn() {
    score = 0
    scoreHome.textContent = score
    scoreAway.textContent = score
}
const rulesButton = document.querySelector(".rulesBtn");

const container = document.querySelector(".container");

const rulesSection = document.querySelector(".rules-img")

const closeBtn = document.querySelector(".close-icon")

rulesButton.addEventListener("click", function () {
    container.style.display = "none"; // Container'ı gizle
    rulesSection.style.display = "block"; // Rules'ı göster
});


closeBtn.addEventListener("click", function () {
    container.style.display = "block"; // Container'ı gizle
    rulesSection.style.display = "none"; // Rules'ı göster
});


let gameBtns = document.querySelectorAll(".gameBtn")


for (const btn of gameBtns) {
    btn.addEventListener("click", playMove);
}

const moves = [
    'rock',
    'paper',
    'scissors'
];

function pcMove() {
    return moves.at(Math.floor(Math.random() * 3))
}

const heroArea = document.querySelector(".hero");


function playMove() {
    const playerMove = this.id;
    const cpuMove = pcMove();
    heroArea.classList.add("display-none")
}
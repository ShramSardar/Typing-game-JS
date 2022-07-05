// Variables for the DOM elements
const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const settingsBtn = document.getElementById("settings-btn");
const difficultySelect = document.getElementById("difficulty");

// Array
const words = [
    "dependent",
    "dog",
    "superficial",
    "admit",
    "juice",
    "javascript",
    "developer",
    "airplane",
    "great",
    "fun",
    "manipulate",
    "cat",
    "transition",
    "school",
    "computer",
    "programming",
    "drag",
    "loving",
    "north",
];

// getRandomword
// addWordToDom
// add event listener to text elemet
// updateScore

// get the cursor automatically in input
// counting down - timer 
// update timer
// gameOver
// eventListener  => time =+ 5;

// settings btn
// settings slecet
// pll from local stroage
// set difficult select value
// set time dependig on difficulty in the eventlistener



// Initializing word
let randomWord;

// Initializing score
let score = 0;

// initializing time
let time = 10;

// difficulty
let difficulty =
    localStorage.getItem("difficulty") !== null
        ? localStorage.getItem("difficulty")
        : "medium";


// Set difficulty select value
difficultySelect.value =
    localStorage.getItem("difficulty") !== null
        ? localStorage.getItem("difficulty")
        : "medium";



// focus text input at start
text.focus();

// Counting down
const timeInterval = setInterval(updateTime, 1000)


// Random Word
function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
    // floor will just round down
    // function to getarandom word from our words array
}

// add word to DOM
function addWordToDOM() {
    randomWord = getRandomWord();
    word.innerHTML = randomWord;
}

// update score
function updateScore() {
    score++;
    scoreEl.innerHTML = score;
}

// update time
function updateTime() {
    time--;

    timeEl.innerHTML = time + "s";

    if (time === 0) {
        clearInterval(timeInterval);

        gameOver();
    }

};


// Game Over
function gameOver() {
    endgameEl.innerHTML = `<h1>Time ran out!</h1> <p>Your final score is ${score}</p> <button onClick="location.reload()">Reload</button>`;

    endgameEl.style.display = "flex";
}



addWordToDOM();

text.addEventListener("input", (event) => {
    const insertedText = event.target.value;
    // console.log(insertedText)

    if (insertedText === randomWord) {
        addWordToDOM();

        updateScore();
        // clear input field
        event.target.value = "";

        // increment the time after correct input
        //        time += 5;
        if (difficulty === "hard") {
            time += 2;
        } else if (difficulty === "medium") {
            time += 3;
        }
        else if (difficulty === "easy") {
            time += 5;
        }

    }
});


// Settings button click
settingsBtn.addEventListener("click", () => settings.classList.toggle("hide"));

// Settings Select
settingsForm.addEventListener("change", (event) => {
    difficulty = event.target.value;

    localStorage.setItem("difficulty", difficulty);
});

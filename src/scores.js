function loadHighscores() {
   getHighscores().then(highscores => displayScores(highscores));
}

loadHighscores();

const displayScores = (scores) => {
    const scoreList = document.getElementById("highscores");
    scoreList.innerHTML = ""
    scores.forEach((score) => {
        const scoreLi = document.createElement("li");
        scoreLi.innerText = "Player: " + score.player + ", " + "Score: " + score.score;
        scoreList.appendChild(scoreLi);
    });
}

const showScoreForm = (score) => {
    
    const form = document.getElementById("scoreForm");
    
    form.classList.add("capture");

    const value = document.getElementById("score-value");
    value.innerText = score;

    form.addEventListener("submit", (event) => {
    submitScore(score, event);
    form.classList.remove("capture");
    });
}

const submitScore = (score, event) => {
    event.preventDefault();
    const name = document.getElementById("player_name");
    sendHighscore(name.value, score).then((score) => {
        // display message with position
        loadHighscores()
    });
}

document.addEventListener("GAME_OVER", handleGameOver);

function handleGameOver(event) {
  showScoreForm(event.detail.score);
}
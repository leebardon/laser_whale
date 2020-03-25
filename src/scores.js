getHighscores().then(highscores => displayScores(highscores))

const displayScores = (scores) => {
    scores.forEach((score) => {
        const scoreLi = document.createElement("li");
        scoreLi.innerText = score.player;
        document.body.append(scoreLi);
    });
}

const showScoreForm = (score) => {
    // display the form
    // display the score value in the score span
    // add submit listener
    // post the score to the backend
    // tells you your score position
    console.log("GAME OVER", score);
    // Get hold of the form.
    const form = document.getElementById("scoreForm");
    // Show the form.
    form.classList.add("capture");

    const value = document.getElementById("score-value");
    value.innerText = score;

    //form.addEventListener("submit", submitScore);
}

// const submitScore = () => {
//     const name = document.getElementById("player_name");
//     console.log(name.value);
// }

document.addEventListener("GAME_OVER", handleGameOver);

function handleGameOver(event) {
  // In here, you should be able to get hold of the score.
  showScoreForm(event.detail.score);
  console.log("GAME OVER", event);
}
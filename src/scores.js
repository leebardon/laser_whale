getHighscores().then(highscores => displayScores(highscores))

const displayScores = (scores) => {
    scores.forEach((score) => {
        const scoreLi = document.createElement("li")
        scoreLi.innerText = score.player
        document.body.append(scoreLi)
    })
}

const showScoreForm = (score) => {
    // display the form
    // display the score value in the score span
    // add submit listener
    // post the score to the backend
    // tells you your score position
}

setTimeout(() => showScoreForm(45), 1000) 
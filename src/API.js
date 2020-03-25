const getHighscores = () => {
    return fetch("http://localhost:3000/scores/highscores").then(resp => resp.json())
}



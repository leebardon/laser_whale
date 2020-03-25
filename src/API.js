const getHighscores = () => {
    return fetch("http://localhost:3000/scores/highscores").then(resp => resp.json())
}


const sendHighscore = (name, score) => {
    const body = JSON.stringify({
       player_name: name,
       number: score
    });
    const data = {
       method: "POST",
       body:  body
    };
    return fetch("http://localhost:3000/scores/create", data).then(resp => resp.json());
}

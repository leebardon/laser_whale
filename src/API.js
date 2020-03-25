const getHighscores = () => {
    return fetch("http://localhost:3000/scores/highscores").then(resp => resp.json())
}


const sendHighscore = (name, score) => {
    const body = JSON.stringify({
        score: {
           player_name: name,
           number: score
        }
     });


    const data = {
        method: "POST",
        body:  body,
        headers: {
           'Content-Type': 'application/json'
        }}
    
    return fetch("http://localhost:3000/scores", data).then(resp => resp.json());
}

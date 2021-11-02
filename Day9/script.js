const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJokeAsync)

generateJokeAsync()

// Normal fetch
// function generateJoke() {
//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     }

//     const url = 'https://icanhazdadjoke.com'

//     fetch(url, config)
//         .then(res => res.json())
//         .then(data => {
//             jokeEl.innerHTML = data.joke
//         });
// }

// async/await
async function generateJokeAsync(){
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }

    const url = 'https://icanhazdadjoke.com'

    const res = await fetch(url, config);

    const data = await res.json();

    jokeEl.innerHTML = data.joke;
}
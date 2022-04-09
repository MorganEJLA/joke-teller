const button = document.getElementById("button");
const audioElement = document.getElementById("audio");

//Disable/Enable button

function toggleBtn(){
    button.disabled = !button.disabled;
}

// test();
// Passing Joke to VoiceRSS API //
function tellMe(joke){
    // console.log('tell me ', joke);
    VoiceRSS.speech({
        key: '5bcd8192c22c4846b490449450453d11',
        src: joke,
        hl: 'en-us',
        v: 'Linda',
        r: 0, 
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}
//Get Jokes from joke API //

async function getJokes(){
    const apiUrl = "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
    try{
        const response = await fetch(apiUrl);
        const data = await response.json();
        // console.log(data.joke);
        //Text tp speech//
        tellMe(data.joke);  
        //Disable Button//
        toggleBtn();
    }catch(error){
        // Catch Errors here
        console.log("nope!", error);
    }
}

// getJokes();

//Event Listeners

button.addEventListener("click", getJokes);
audioElement.addEventListener("ended", toggleBtn);
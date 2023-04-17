
const sounds = {
    49: new Audio (`Sounds/boom.wav`),
    50: new Audio (`Sounds/clap.wav`),
    51: new Audio (`Sounds/hihat.wav`),
    52: new Audio (`Sounds/kick.wav`),
    53: new Audio (`Sounds/openhat.wav`),
    54: new Audio (`Sounds/ride.wav`),
    55: new Audio (`Sounds/snare.wav`),
    56: new Audio (`Sounds/tink.wav`),
    57: new Audio (`Sounds/tom.wav`),
    
}


function on_keypress(event){
    sounds[event.which].play()
    console.log(event.which)
 
}

window.addEventListener(`keydown`, on_keypress)

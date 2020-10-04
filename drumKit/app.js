const keys = document.querySelectorAll('.key');
keys.forEach(key => 
    key.addEventListener('transitionend', removeTransition));

// Functions

function removeTransition(e) {
    console.log(e);
    if (e.propertyName !== 'transform') return //skip if it's not a transform
    this.classList.remove('playing')
};

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; //this will prevent the function from running
    audio.currentTime = 0; //this will rewind to the start
    audio.play();
    key.classList.add('playing');
};

window.addEventListener('keydown', playSound);



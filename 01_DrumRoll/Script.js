
const keyBox = document.querySelectorAll('.keyBox');

window.addEventListener("keydown", playSound);
window.addEventListener("transitionend", removeTransition);

function playSound(e){
    const soundBox = document.querySelector(`div[data-key=${e.key}]`);
    const audio = document.querySelector(`audio[data-key=${e.key}]`);
    audio.currentTime = 0;
    if(audio) audio.play();
    else return;

    soundBox.classList.add("playing");
}

function removeTransition(e){
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
   
}
window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key="${e.key}"`); 
    const key = document.querySelector(`.key[data-key="${e.keyCode}"`); 
    if(!audio) return;
    audio.currentTime = 0; //Rewinds sound to the start
    audio.play()
    key.classList.add('playing')
    console.log(key)
})

window.addEventListener('keyup', function (e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"`); 
    key.classList.remove('playing')

})
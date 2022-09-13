document.addEventListener("keydown", (event)=>{
    let key = event.key;
    let drum = document.querySelector('[data-d='+key+']');
    let audio = document.querySelector('[data-a='+key+']');

    audio.currentTime = 0;
    audio.play();

});

document.querySelectorAll(".drum").forEach(function(item) {
    item.addEventListener('click',handleClick)
})

function handleClick(){
    //let audio = new Audio('./sounds/crash.mp3')
    //audio.play()
    let buttonInnerHtml = this.innerHTML
    makesSound(buttonInnerHtml)   
    setAnimation(buttonInnerHtml)
}

document.addEventListener("keydown",event=>{
    makesSound(event.key)
    setAnimation(event.key)
})

document.addEventListener("keyup",event=>{
    originalAnimation(event.key)
})

document.addEventListener("onmouseup",event=>{
    originalAnimation(event.key)
})


function makesSound(key){
    let audio
    switch (key) {
        case "w":
            audio = new Audio('./sounds/tom-1.mp3')
            break;
        case "a":
            audio= new Audio('./sounds/tom-2.mp3')
            break;
        case "s":
            audio= new Audio('./sounds/tom-3.mp3')
            break;
        case "d":
            audio = new Audio('./sounds/tom-4.mp3')
            break;
        case "j":
            audio = new Audio('./sounds/snare.mp3')
            break;
        case "k":
            audio = new Audio('./sounds/crash.mp3')
            audio.play()
            break;
        case "l":
            audio = new Audio('./sounds/kick-bass.mp3')
            break;        
        default:
            console.log(buttonInnerHtml)
    }
    audio.play()
}

function setAnimation(currentKey){
    let activeButton = document.querySelector("."+currentKey)
    activeButton.classList.add('pressed')
}

function originalAnimation(currentKey){
    let activeButton = document.querySelector("."+currentKey)
    activeButton.classList.remove('pressed')
}
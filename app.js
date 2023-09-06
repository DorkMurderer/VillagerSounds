const btnEl = document.getElementById("btn")
const btnEl1 = document.getElementById("btn1")
const btnEl2 = document.getElementById("btn2")
const btnEl3 = document.getElementById("btn3")


btnEl.addEventListener("click", function(audioName){
    playSound("greet.mp3")

    const h1El = document.getElementById("h1el")

    h1El.innerText = "Hello!"
})

btnEl1.addEventListener("click", function(audioName){
    playSound("ouch.mp3")

    const h1El = document.getElementById("h1el")

    h1El.innerText = "Ouch! That hurts!"
})

btnEl2.addEventListener("click", function(audioName){
    playSound("Happy.mp3")

    const h1El = document.getElementById("h1el")

    h1El.innerText = "Wahoo!"
})

btnEl3.addEventListener("click", function(audioName){
    playSound("annoyed.mp3")

    const h1El = document.getElementById("h1el")

    h1El.innerText = "please quit taking my crops..."
})




function playSound(audioName){
    let audio = new Audio(audioName)
     audio.loop = false 
     audio.play()
}



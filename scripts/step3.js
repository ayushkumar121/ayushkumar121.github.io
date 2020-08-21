var alcoholMeasured = false

//gsap.to('#step-3 #arrowHand2', { y: 5, yoyo: true, repeat: 1000 })

function measureAlcohol() {
    if (!alcoholMeasured) {
        var drop = document.createElement("img")
        drop.src = './assets/drop.png'
        drop.classList.add('element', 'drop-step-3')
        drop.style.zIndex = 5

        gsap.to('#measuring small', { opacity: 0 })

        var anim = gsap.timeline()

        anim
            .to('#alcoholCabottleCap', { y: -50 })
            .to('#alcoholbottle', { duration: 2, x: -100, y: -50 })
            .to('#alcoholbottle', {
                rotation: -45, onComplete: () => {
                    document.querySelector('#step-3 .instruments').appendChild(drop)
                }
            })
            .to(drop, { y: 50, opacity: 0 })
            .to('#alcoholbottle', { rotation: 0 })
            .to('#alcoholbottle', { duration: 2, x: 0, y: 0 })
            .to('#alcoholCabottleCap', {
                y: 0
                , onComplete: () => {
                    alcoholMeasured = true
                }
            })
            //  .to('#step-3 #arrowHand2', {x: -130})
            .to('#step3flask small', { opacity: 1 })

    }
}

function pourAlcohol() {
    if (alcoholMeasured && !task_done) {

        var drop = document.createElement("img")
        drop.src = './assets/drop.png'
        drop.classList.add('element', 'drop-step-31')
        drop.style.zIndex = 5

        var anim = gsap.timeline()

        anim
            .to('#measuring', { duration: 1, y: -50, x: -80 })
            .to('#measuring', {
                duration: 1, rotation: -30, onComplete: () => {
                    document.querySelector('#step-3 .instruments').appendChild(drop)
                }
            })
            .to(drop, { y: 50, opacity: 0 })
            .to('#measuring', { rotation: 0 })
            .to('#measuring', {
                duration: 1, x: 0, y: 0, onComplete: () => {
                    task_done = true
                    addTask('<b>Step 3</b> Add 50 ml ethyl alcohol in conical flask')
                }
            })
            .to('#step3flask small', { opacity: 0 })

    }
}
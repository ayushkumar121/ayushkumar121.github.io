var acidMeasured = false


function measureAcid() {
    if (!acidMeasured) {

        var drop = document.createElement("img")
        drop.src = './assets/drop.png'
        drop.classList.add('element', 'drop-step-3')
        drop.style.zIndex = 5

        gsap.to('#measuring small', { opacity: 0 })

        var anim = gsap.timeline()

        anim
            .to('#acidBottleCap', {duration: 1, y: -100})
            .to('#acidBottle', { duration: 2, x: -100, y: -50 })
            .to('#acidBottle', {
                rotation: -45, onComplete: () => {
                    document.querySelector('#step-3 .instruments').appendChild(drop)
                }
            })
            .to(drop, { y: 50, opacity: 0 })
            .to('#acidBottle', { rotation: 0 })
            .to('#acidBottle', {
                duration: 2, x: 0, y: 0, onComplete: () => {
                    acidMeasured = true
                }
            })
            .to('#acidBottleCap', {duration: 1, y: 0})
            .to('#step3flask small', { opacity: 1 })

    }
}

function pourAcid() {
    if (acidMeasured && !task_done) {

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
                    addTask('<b>Step 3</b> Add 30 ml acetic acid-chloroform solution in the sample flask and swirl to dissolve')
                }
            })
            .to('#step3flask small', { opacity: 0 })

    }
}
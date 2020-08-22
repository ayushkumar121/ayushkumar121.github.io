var reading = 0.0
var sample = 0.0

//var alcoholAdded = false
var flaskAdded = false
var animating = false

function addSample() {
    if (flaskAdded && !animating) {
        if (reading < 10.0) {

            var drop = document.createElement("img")
            drop.src = './assets/drop.png'
            drop.classList.add('element', 'drop-step-2')
            drop.style.zIndex = 5

            var anim1 = gsap.timeline()
            anim1
                .to('#sampleimage', { duration: 1, y: -100, x: -230, onStart: () => animating = true })
                .to('#sampleimage', {
                    duration: 2, rotation: -60, onComplete: () => {
                        document.querySelector('#step-2 .instruments').appendChild(drop)
                        reading += 5
                        sample += 5

                        common()
                    }
                })
                .to(drop, { y: 50, opacity: 0, ease: Sine.easeIn })
                .to('#sampleimage', { duration: 2, rotation: 0 })
                .to('#sampleimage', { duration: 1, y: 0, x: 0, onComplete: () => animating = false })
        }
    }
}

function removeSample() {
    if (flaskAdded) {
        if (reading > 0.0) {
            reading -= 2.5
            sample -= 2.5
        }
        common()
    }
}

function zeroReading() {
    if (flaskAdded) {
        reading = 0.0
    }
    common()
}

function common() {
    document.querySelector('#sample-reading').innerHTML = `${reading.toPrecision(2)}`

    if (sample == 5.0)
    {    
        task_done = true
        addTask('<b>Step 2</b> Weigh 5g of Oil/Fat sample in conical flask')
    }
    else
        task_done = false
}

function placeFlask() {
    if (!flaskAdded) {
        var readingObj = { x: 0 };
        gsap.to('#placeflask > small', { duration: .25, opacity: 0 })

        var anim1 = gsap.timeline()
        anim1
            .to('#placeflask', { duration: 2, y: -100, x: -180, onStart: () => animating = true })
            .to('#placeflask', { duration: 1, y: -40 })
            .to('#step-2 button.element', { duration: 1, opacity: 1 })
            .to(readingObj, {
                duration: .25, ease: new SteppedEase.config(10), x: 10, onUpdate: () => {
                    reading = readingObj.x
                    common()
                },
                onComplete: () => animating = false
            })

        flaskAdded = true
    }
}
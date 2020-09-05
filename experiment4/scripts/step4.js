let beakerAnimation_4 = bodymovin.loadAnimation({
    container: document.querySelector('#step-4 .bodymovinanim_4'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets3.lottiefiles.com/packages/lf20_q04HJy.json'
});

var suckedAlcohol = false

function suckPourAlcohol() {
    if (!task_done) {
        if (!suckedAlcohol) {
            var obj = { i: 0 }
            var tl = gsap.timeline()

            tl
                .to('#step-4 .pipette small', { opacity: 0 })
                .to('#step-4 .cap', {duration: 2, y: 150, x: 150})
                .to('#step-4 .pipette', { duration: 2, y: -150, x: 195 })
                .to('#step-4 .pipette', {duration: 3, y: -30})
                .to('#step-4 .pipette .pipetteTop', { y: -30 })
                .to(obj, {
                    i: 5, ease: new SteppedEase.config(5), onUpdate: () => {
                        document.querySelector('#step-4 .ppReading').innerHTML = `${obj.i}000uL`
                    }
                })
                .to('#step-4 .pipette', { duration: 1, y: -150 })
                .to('#step-4 .pipette', {
                    duration: 2,
                    y: 0, x: 0,
                    onComplete: () => {
                        document.querySelector('#step-4 .pipette small').innerHTML = 'click to pour alcohol'
                    }
                })
                .to('#step-4 .cap', {duration: 2, y: 0, x: 0})
                .to('#step-4 .pipette small', {
                    opacity: 1, onComplete: () => {
                        suckedAlcohol = true
                    }
                })

        } else {
            var obj = { i: 5 }
            var tl = gsap.timeline()

            tl
                .to('#step-4 .pipette small', { opacity: 0 })
                .to('#step-4 .ppCap', { duration: 2, x: -100, y: 150 })
                .to('#step-4 .pipette', { duration: 2, y: -110, x: -170 })
                .to('#step-4 .pipette .pipetteTop', { y: 0})
                .to('#step-4 .pipette', {
                    duration: 3, y: -30, onStart: () => {
                        beakerAnimation_4.play()
                    }
                })
                .to(obj, {
                    i: 0, ease: new SteppedEase.config(5), onUpdate: () => {
                        document.querySelector('#step-4 .ppReading').innerHTML = `${obj.i}000uL`
                    }
                })
                .to('#step-4 .pipette', { duration: 1, y: -110 })
                .to('#step-4 .ppCap', { duration: 2, x: 0, y: 0 })
                .to('#step-4 .pipette', {
                    duration: 2, y: 0, x: 0, onComplete: () => {
                        task_done = true
                        addTask('Step4: Add 5 ml of 95% ethyl alcohol in the centrifuge Tube')
                    }
                })
        }
    }
}
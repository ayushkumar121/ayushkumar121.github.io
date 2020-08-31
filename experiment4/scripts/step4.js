let beakerAnimation_4 = bodymovin.loadAnimation({
    container: document.querySelector('#step-4 .bodymovinanim_4'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://gist.githubusercontent.com/ayushkumar121/715ccd4ba894c272e9789683b06db3c6/raw/54e166d3512c9e3e383d84d58c9555994f2fee26/pp_tube_ethyl_alcohol.json'
});

var suckedAlcohol = false

function suckPourAlcohol() {
    if (!task_done) {
        if (!suckedAlcohol) {
            var obj = { i: 0 }
            var tl = gsap.timeline()

            tl
                .to('#step-4 .pipette small', { opacity: 0 })
                .to('#step-4 .pipette', { duration: 2, y: -150, x: 220 })
                .to('#step-4 .pipette .pipetteTop', { zIndex: -1 })
                .to('#step-4 .pipette .pipetteTop', { y: 50 })
                .to('#step-4 .pipette', {duration: 3, y: -30})
                .to(obj, {
                    i: 5, ease: new SteppedEase.config(5), onUpdate: () => {
                        document.querySelector('#step-4 .ppReading').innerHTML = `${obj.i}000uL`
                    }
                })
                .to('#step-4 .pipette .pipetteTop', { y: 0 , delay: "+1.5"})
                .to('#step-4 .pipette', { duration: 1, y: -150 })
                .to('#step-4 .pipette', {
                    duration: 2,
                    y: 0, x: 0,
                    onComplete: () => {
                        document.querySelector('#step-4 .pipette small').innerHTML = 'click to pour alcohol'
                    }
                })
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
                .to('#step-4 .pipette', { duration: 2, y: -110, x: -170 })
                .to('#step-4 .pipette .pipetteTop', { y: 50 })
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
                .to('#step-4 .pipette .pipetteTop', { y: 0, delay: "+2" })
                .to('#step-4 .pipette', { duration: 1, y: -110 })
                .to('#step-4 .pipette', {
                    duration: 2, y: 0, x: 0, onComplete: () => {
                        task_done = true
                        addTask('Add 5ml of 95% Ethyl alcohol')
                    }
                })
        }
    }
}
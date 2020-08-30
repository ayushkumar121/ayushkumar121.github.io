let beakerAnimation_31 = bodymovin.loadAnimation({
    container: document.querySelector('#step-3 .bodymovinanim_31'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://gist.githubusercontent.com/ayushkumar121/57ce20e4e3e4343540f041118cdc09bb/raw/03d0e472b2ae472aebee8f7aa6417abc955daa0d/pp_tube_filling.json'
});

let beakerAnimation_32 = bodymovin.loadAnimation({
    container: document.querySelector('#step-3 .bodymovinanim_32'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://gist.githubusercontent.com/ayushkumar121/57ce20e4e3e4343540f041118cdc09bb/raw/03d0e472b2ae472aebee8f7aa6417abc955daa0d/beaker_reducing.json'
});

var sucked = false

function suckPour() {
    if (!task_done) {
        if (!sucked) {
            var tl = gsap.timeline()

            tl
                .to('#step-3 .pipette small', { opacity: 0, zIndex: -1 })
                .to('#step-3 .pipette', { duration: 2, y: -150, x: 220})
                .to('#step-3 .pipette', { duration: 1, y: -20, x: 220, onComplete: () => {
                    beakerAnimation_32.play()
                }})
                .to('#step-3 .pipette .pipetteTop', {y: 50})
                .to('#step-3 .pipette', { duration: 1,  y: -150, delay: "+1"})
                .to('#step-3 .pipette .pipetteTop', {y: 0})
                .to('#step-3 .pipette', {
                    duration: 2,
                    y: 0, x: 0, 
                    onComplete: () => {
                        document.querySelector('#step-3 .pipette small').innerHTML = 'click to pour juice'
                    }
                })
                .to('#step-3 .pipette small', {opacity: 1, onComplete: () => {
                    sucked = true
                }})

        } else {
            var obj = {i:0}
            var tl = gsap.timeline()

            tl
                .to('#step-3 .pipette small', { opacity: 0 })
                .to('#step-3 .ppCap', { duration: 2, x: -100, y: 150})
                .to('#step-3 .pipette', { duration: 2, y: -110, x: -160 })
                .to('#step-3 .pipette .pipetteTop', {y: 50})
                .to('#step-3 .pipette', {
                    duration: 3, y: -30, onStart: () => {
                        beakerAnimation_31.play()
                    }
                })
                .to(obj, {i: 5,  ease: new SteppedEase.config(5), onUpdate: () => {
                    document.querySelector('#step-3 .ppReading').innerHTML = `${obj.i}000uL`
                }})
                .to('#step-3 .pipette', { duration: 1, delay: "+2", y: -110 })
                .to('#step-3 .pipette .pipetteTop', {y: 0})
                .to('#step-3 .pipette', { duration: 2, y: 0, x: 0, onComplete: () => {
                    task_done = true
                    addTask('Filtration of Juice')
                } })
        }
    }
}
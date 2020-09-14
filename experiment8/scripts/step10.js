let beakerAnimation_10 = bodymovin.loadAnimation({
    container: document.querySelector('#step-10 .bodymovinanim_10'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'assets/specto.json'
});

var currentAnimate10 = 1
var canread = false

function read10() {
    if (canread) {
        beep.play()

        if (currentAnimate10 == 3) {
            document.querySelector('#step-10 .read-2').innerHTML = `Abs=0.7312`

            document.querySelector('#step-10 .control-1 small').innerHTML = 'Open Lid'
            gsap.to('#step-10 .control-1', { opacity: 1 })

            currentAnimate10++
        } else if (currentAnimate10 == 6) {
            document.querySelector('#step-10 .read-2').innerHTML = `Abs=0.9147`

            task_done = true
            addTask('Step10: Switch on the UV-vis spectrophotometer and set the wavelength at 420 nm & calibrate it using ethyl alcohol cuvettes')

        }
    }
}

function animateMessage10() {
    if (!task_done) {
        if (currentAnimate10 == 1) {
            beakerAnimation_10.playSegments([0, 30], true)

            gsap.to('#step-10 .control-1', { opacity: 0 })
            gsap.to('#step-10 .control-2', {
                delay: 3, opacity: 1, onComplete: () => {
                    currentAnimate10++
                }
            })
        } else if (currentAnimate10 == 2) {
            beakerAnimation_10.playSegments([30, 300], true)

            document.querySelector('#step-10 .control-1 small').innerHTML = 'Close Lid'

            gsap.to('#step-10 .control-2', { opacity: 0 })
            gsap.to('#step-10 .control-1', {
                delay: 10, opacity: 1, onComplete: () => {
                    currentAnimate10++

                    gsap.to('#step-10 .control-3', { opacity: 1 }) 
                    canread = true
                }
            })
        } else if (currentAnimate10 == 4) {
            beakerAnimation_10.playSegments([300, 420], true)

            gsap.to('#step-10 .control-1', { opacity: 0 })
            gsap.to('#step-10 .control-2', {
                delay: 3, opacity: 1, onComplete: () => {
                    currentAnimate10++
                }
            })
        } else if (currentAnimate10 == 5) {
            beakerAnimation_10.playSegments([420, 644], true)

            document.querySelector('#step-10 .control-1 small').innerHTML = 'Close Lid'

            gsap.to('#step-10 .control-2', { opacity: 0 })
            gsap.to('#step-10 .control-1', {
                delay: 10, opacity: 1, onComplete: () => {
                    currentAnimate10++

                    gsap.to('#step-10 .control-3', { opacity: 1 }) 
                    canread = true
                }
            })
        }
    }
}
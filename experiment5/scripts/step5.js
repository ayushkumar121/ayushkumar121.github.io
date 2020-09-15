var part51done = false
var titrating = false
var titration_values = [
    7.4,
    4.2,
    2.4
]

var currentValue = 0
var handle = null
var curretSegment5 = 1;

function part51() {
    if (!part51done) {
        if (curretSegment5 == 1) {
            lottie5.playSegments([0, 40], true)

            gsap.to('#step-5 .control-1', { opacity: 0 })
            gsap.to('#step-5 .control-2', {
                opacity: 1, delay: "2", onComplete: () => {
                    curretSegment5++
                }
            })
        } else if (curretSegment5 == 2) {
            lottie5.playSegments([40, 263], true)

            gsap.to('#step-5 .control-2', { opacity: 0 })
            gsap.to('#step-5 .control-3', {
                opacity: 1, delay: "8", onComplete: () => {
                    curretSegment5++
                }
            })
        } else if (curretSegment5 == 3) {
            lottie5.playSegments([263, 345], true)

            gsap.to('#step-5 .control-3', { opacity: 0 })
            gsap.to('#step-5 .control-4', {
                opacity: 1, delay: "6", onComplete: () => {
                    curretSegment5++
                }
            })
        } else if (curretSegment5 == 4) {
            lottie5.playSegments([345, 392], true)

            gsap.to('#step-5 .control-4', { opacity: 0 })
            gsap.to('#step-5 .control-5, #step-5 .control-6', {
                opacity: 1, delay: "4", onComplete: () => {
                    part51done = true
                }
            })
        }
    }
}

function startTitration() {
    if (part51done && !titrating) {
        lottie5.setSpeed(1)
        lottie5.playSegments([392, 8460], true)
        titrating = true
        handle = setInterval(() => {
            currentValue += 0.2

            if (Math.abs(currentValue - titration_values[selectedSample]) <= 0.4) {
                gsap.to('.titration-status', { opacity: 1 })
            } else if ((currentValue - titration_values[selectedSample]) > 0.4) {
                gsap.to('.titration-status', { background: '#F44336' })
                document.querySelector('.titration-status h1').innerHTML = 'Over Titrated'
                stopTitration()

                gsap.to('#controls-2', { display: 'block' })
                document.querySelector('.back-button').onclick = () => {
                    location.reload()
                    gsap.to('#controls-2', { display: 'none' })
                }
            }
        }, 1000);
    }
}

function stopTitration() {
    if (part51done && titrating) {
        lottie5.pause()
        titrating = false
        clearInterval(handle)

        if (Math.abs(currentValue - titration_values[selectedSample]) <= 0.4) {

            document.querySelector('#step-6 .read-1').innerHTML = `${currentValue.toFixed(3)} ml`
            document.querySelector('#step-6 .read-2').innerHTML = `${(currentValue/25).toFixed(3)}`

            task_done = true
            addTask('step6: Titrate the sample with 0.01M standard EDTA solution until the wine red color changes permanently into blue color')
        }
    }
}
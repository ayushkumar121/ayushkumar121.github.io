var currentSegment8 = 1;

locked = false
machine_on = false

var temp = 0

function platySegments8() {
    if (!locked) {
        if (currentSegment8 == 1) {
            lottie8.playSegments([0, 50], true)

            gsap.to('#step-8 .control-1', { opacity: 0 })
            gsap.to('#step-8 .reading', {
                opacity: 1, onComplete: () => {
                    locked = true
                    machine_on = true
                }
            })
        }

        else if (currentSegment8 == 2) {
            lottie8.playSegments([50, 310], true)

            gsap.to('#step-8', {delay: 2, onComplete: () => {
                humming.play()
            }})

            gsap.to('#step-8', {delay: 6, onComplete: () => {
                humming.stop()
            }})

            gsap.to('#step-8 .control-2', { opacity: 0 })
            gsap.to('#step-8 .control-2', {
                delay: 8, onComplete: () => {
                    locked = true
                }
            })
        }

        else if (currentSegment8 == 3) {
            lottie8.playSegments([310, 510], true)

            gsap.to('#step-8', {delay: 2, onComplete: () => {
                humming.play()
            }})

            gsap.to('#step-8', {delay: 6, onComplete: () => {
                humming.stop()
            }})

            gsap.to('#step-8 .control-3', { opacity: 0 })
            gsap.to('#step-8 .control-3', {
                delay: 8, onComplete: () => {
                    locked = true
                }
            })
        }
        else if (currentSegment8 == 4) {
            lottie8.playSegments([510, 760], true)

            lottie8.playSegments([310, 510], true)

            gsap.to('#step-8', {delay: 2, onComplete: () => {
                humming.play()
            }})

            gsap.to('#step-8', {delay: 6, onComplete: () => {
                humming.stop()
            }})

            gsap.to('#step-8 .control-4', { opacity: 0 })
            gsap.to('#step-8 .control-4', {
                delay: 8, onComplete: () => {
                    locked = true
                    task_done = true
                    addTask('Step8: Heat the J2, J3, J4 sample at 60, 75, 90°C respectively ')
                }
            })
        }
    }
}

function incTemp() {
    if (machine_on) {
        temp++
        document.querySelector('#step-8 .reading').innerHTML = `${pad(temp, 2)}℃`

        beep.play()
    }
}

function decTemp() {
    if (machine_on) {
        temp--
        document.querySelector('#step-8 .reading').innerHTML = `${pad(temp, 2)}℃`

        beep.play()
    }
}

function set() {
    if (machine_on) {

        if(currentSegment8 == 1) {
            gsap.to('#step-8 .control-2', {opacity: 1})
            currentSegment8++
            locked = false
        } else if(currentSegment8 == 2) {
            gsap.to('#step-8 .control-3', {opacity: 1})
            currentSegment8++
            locked = false
        }
        else if(currentSegment8 == 3) {
            gsap.to('#step-8 .control-4', {opacity: 1})
            currentSegment8++
            locked = false
        }

        beep.play()
    }
}
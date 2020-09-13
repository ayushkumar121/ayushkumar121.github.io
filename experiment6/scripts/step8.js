var currentSegment8 = 1;

locked = false
machine_on = false

var temp = 0
var last_temp = 0

function platySegments8() {
    if (!locked) {
        if (currentSegment8 == 1) {
            lottie8.playSegments([0, 50], true)

            gsap.to('#step-8 .control-1', { opacity: 0 })
            gsap.to('#step-8 .reading-1, #step-8 .reading-2', {
                opacity: 1, onComplete: () => {
                    locked = true
                    machine_on = true
                }
            })
        }
        else if (currentSegment8 == 2) {
            lottie8.playSegments([50, 567], true)

            gsap.to('#step-8 .control-2', { opacity: 0 })
            gsap.to('#step-8 .control-2', {
                delay: 14, onComplete: () => {
                    locked = true
                }
            })

            var obj = { i: 10 }
            gsap.to(obj, {
                i: 0,
                ease: new SteppedEase.config(10),
                delay: 2,
                duration: 10,
                onUpdate: () => {
                    document.querySelector('#step-8 .clock-read').innerHTML = `${pad(obj.i, 2)}:00`
                }
            })
        }
        else if (currentSegment8 == 3) {
            lottie8.playSegments([567, 1063], true)

            gsap.to('#step-8 .control-3', { opacity: 0 })
            gsap.to('#step-8 .control-3', {
                delay: 14, onComplete: () => {
                    locked = true
                }
            })

            var obj = { i: 10 }
            gsap.to(obj, {
                i: 0,
                ease: new SteppedEase.config(10),
                delay: 2,
                duration: 10,
                onUpdate: () => {
                    document.querySelector('#step-8 .clock-read').innerHTML = `${pad(obj.i, 2)}:00`
                }
            })
        }
        else if (currentSegment8 == 4) {
            lottie8.playSegments([1063, 1650], true)

            gsap.to('#step-8 .control-4', { opacity: 0 })
            gsap.to('#step-8 .control-4', {
                delay: 14, onComplete: () => {
                    locked = true
                    task_done = true
                    addTask('Step8: Heat the J2, J3, J4 sample at 60, 75, 90°C respectively ')
                }
            })

            var obj = { i: 10 }
            gsap.to(obj, {
                i: 0,
                ease: new SteppedEase.config(10),
                delay: 2,
                duration: 10,
                onUpdate: () => {
                    document.querySelector('#step-8 .clock-read').innerHTML = `${pad(obj.i, 2)}:00`
                }
            })
        }
    }
}

function incTemp() {
    if (machine_on) {
        temp++
        document.querySelector('#step-8 .reading-2').innerHTML = `ST ${pad(temp, 2)}℃`

        beep.play()
    }
}

function decTemp() {
    if (machine_on) {
        temp--
        document.querySelector('#step-8 .reading-2').innerHTML = `ST ${pad(temp, 2)}℃`

        beep.play()
    }
}

function set() {
    if (machine_on) {

        if (currentSegment8 == 1) {
            gsap.to('#step-8 .control-2', { opacity: 1 })
            currentSegment8++
            locked = false
        } else if (currentSegment8 == 2) {
            gsap.to('#step-8 .control-3', { opacity: 1 })
            currentSegment8++
            locked = false
        }
        else if (currentSegment8 == 3) {
            gsap.to('#step-8 .control-4', { opacity: 1 })
            currentSegment8++
            locked = false
        }

        if (last_temp != temp) {
            var obj = { i: last_temp }
            gsap.to(obj, {
                i: temp,
                ease: new SteppedEase.config(temp - last_temp),
                duration: 5,
                onUpdate: () => {
                    document.querySelector('#step-8 .reading-1').innerHTML = `PT ${pad(obj.i, 2)}℃`
                }, onComplete: () => {
                    last_temp = temp
                }
            })
        }

        beep.play()
    }
}
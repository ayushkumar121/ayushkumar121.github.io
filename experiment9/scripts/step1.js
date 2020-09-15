let lottie1 = bodymovin.loadAnimation({
    container: document.querySelector('#step-1 .bodymovinanim'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets7.lottiefiles.com/packages/lf20_pffI0m.json'
})

var currentSegment1 = 1;
var machineOn = false
var tared = false
var part1done = false

function turnOn1() {
    if(!machineOn) {
        gsap.to('#step-1 .reading, #step-1 .control-1', {opacity: 1})
        gsap.to('#step-1 .control-3', {background: 'green'})
        machineOn = true

        beep.play()
    }
}

function tare1() {
    if(machineOn && !tared && part1done) {
        beep.play()

        document.querySelector('#step-1 .reading').innerHTML = `0.0 gms`
        tared = true

        currentSegment1++
        gsap.to('#step-1 .control-2', {opacity: 1})
    }
}

function platySegments1() {
    if (machineOn && !task_done) {
        if (currentSegment1 == 1) {
            lottie1.playSegments([0, 100], true)
            
            gsap.to('#step-1 .control-1', {opacity: 0})

            var obj = {i:0}
            gsap.to(obj, {delay: 2.8, i: 10, ease: new SteppedEase.config(10), onComplete: () => {
                part1done = true
            }, onUpdate: () => {
                document.querySelector('#step-1 .reading').innerHTML = `${obj.i.toFixed(1)} gms`
            }})
        }
        else if (currentSegment1 == 2) {
            lottie1.playSegments([100, 469], true)
            
            gsap.to('#step-1 .control-2', {opacity: 0})
            gsap.to('#step-1 .control-2', {delay: 5, opacity: 1, onComplete: () => {
                currentSegment1++
            }})
            
            var obj = {i:0}
            gsap.to(obj, {delay: 7, i: 1, ease: new SteppedEase.config(1), onUpdate: () => {
                document.querySelector('#step-1 .reading').innerHTML = `${obj.i.toFixed(1)} gms`
            }})
        }
        else if (currentSegment1 == 3) {
            lottie1.playSegments([469, 732], true)

            gsap.to('#step-1 .control-2',{opacity: 0})
            gsap.to('#step-1 .control-2', {delay: 5, onComplete: () => {
                task_done = true
                addTask('Step1: Add 2 g pre-dried powdered sample in that crucible and record as Initial weight.')
            }})

            var obj = {i:1}
            gsap.to(obj, {delay: 7, i: 2, ease: new SteppedEase.config(1), onUpdate: () => {
                document.querySelector('#step-1 .reading').innerHTML = `${obj.i.toFixed(1)} gms`
            }})
        }

    }
}
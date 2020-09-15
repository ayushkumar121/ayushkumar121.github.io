let lottie15 = bodymovin.loadAnimation({
    container: document.querySelector('#step-15 .bodymovinanim'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets4.lottiefiles.com/packages/lf20_YjutVb.json'
})

var currentSegment15 = 1;
var part1done15 = false
var machineOn15 = false
var temp15 = 0

var machineset15 = false

function platySegments15() {
    if (!part1done15) {
        if (currentSegment15 == 1) {
            lottie15.playSegments([0, 112], true)
            
            gsap.to('#step-15 .control-1', {opacity: 0})
            gsap.to('#step-15 .control-2', {delay: 4, opacity: 1, onComplete: () => {
                currentSegment15++
            }})
        }
        else if (currentSegment15 == 2) {
            lottie15.playSegments([112, 230], true)
            
            gsap.to('#step-15 .control-2', {opacity: 0})
            gsap.to('#step-15 .control-3', {delay: 4, opacity: 1, onComplete: () => {
                currentSegment15++
            }})
        }
        else if (currentSegment15 == 3) {
            lottie15.playSegments([230, 430], true)
            
            gsap.to('#step-15 .control-3', {opacity: 0})
            gsap.to('#step-15 .control-4', {delay: 6, opacity: 1, onComplete: () => {
                part1done15 = true
            }})
        }
    }
}

function turnOn15() {
    if(!machineOn15 && part1done15) {
        machineOn15 = true
        gsap.to('#step-15 .control-4', {opacity: 0})

        gsap.to('#step-15 .read-1', {opacity: 1})
        gsap.to('#step-15 .read-2', {opacity: 1})

        beep.play()
    }
}

function SET15() {
    if(machineOn15 & !machineset15) {
        beep.play()
        machineset15 = true

        var obj = {i:0}
        gsap.to(obj, {duration: 5, i: temp15, ease: new SteppedEase.config(temp15), onUpdate: () => {
            document.querySelector('#step-15 .read-1').innerHTML = `PT ${pad(obj.i, 3)}C`
        }, onComplete: () => {
            task_done = true
            addTask('Step13: Put this sample crucible in muffle furnace and set the temp15erature to 500°C')
        }})
    }
}

function INC15() {
    if(machineOn15 && !machineset15) {
        temp15 += 50
        beep.play()
    }

    document.querySelector('#step-15 .read-2').innerHTML = `ST ${pad(temp15, 3)}C`
}

function DEC15() {
    if(machineOn15 && !machineset15) {
        temp15 -= 1
        beep.play()
    }

    document.querySelector('#step-15 .read-2').innerHTML = `ST ${pad(temp15, 3)}C`
}
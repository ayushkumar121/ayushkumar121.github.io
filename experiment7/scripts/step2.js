let lottie2 = bodymovin.loadAnimation({
    container: document.querySelector('#step-2 .bodymovinanim'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets4.lottiefiles.com/packages/lf20_YjutVb.json'
})

var currentSegment2 = 1;
var part1done_2 = false
var machineOn2 = false
var temp2 = 0

var machineset = false

function platySegments2() {
    if (!part1done_2) {
        if (currentSegment2 == 1) {
            lottie2.playSegments([0, 112], true)
            
            gsap.to('#step-2 .control-1', {opacity: 0})
            gsap.to('#step-2 .control-2', {delay: 4, opacity: 1, onComplete: () => {
                currentSegment2++
            }})
        }
        else if (currentSegment2 == 2) {
            lottie2.playSegments([112, 230], true)
            
            gsap.to('#step-2 .control-2', {opacity: 0})
            gsap.to('#step-2 .control-3', {delay: 4, opacity: 1, onComplete: () => {
                currentSegment2++
            }})
        }
        else if (currentSegment2 == 3) {
            lottie2.playSegments([230, 430], true)
            
            gsap.to('#step-2 .control-3', {opacity: 0})
            gsap.to('#step-2 .control-4', {delay: 6, opacity: 1, onComplete: () => {
                part1done_2 = true
            }})
        }
    }
}

function turnOn2() {
    if(!machineOn2 && part1done_2) {
        machineOn2 = true
        gsap.to('#step-2 .control-4', {opacity: 0})

        gsap.to('#step-2 .read-1', {opacity: 1})
        gsap.to('#step-2 .read-2', {opacity: 1})

        beep.play()
    }
}

function SET2() {
    if(machineOn2 & !machineset) {
        beep.play()
        machineset = true

        var obj = {i:0}
        gsap.to(obj, {duration: 5, i: temp2, ease: new SteppedEase.config(temp2), onUpdate: () => {
            document.querySelector('#step-2 .read-1').innerHTML = `PT ${pad(obj.i, 3)}C`
        }, onComplete: () => {
            task_done = true
            addTask('Step2: Put this sample crucible in muffle furnace and set the temp2erature to 500°C')
        }})
    }
}

function INC2() {
    if(machineOn2 && !machineset) {
        temp2 += 50
        beep.play()
    }

    document.querySelector('#step-2 .read-2').innerHTML = `ST ${pad(temp2, 3)}C`
}

function DEC2() {
    if(machineOn2 && !machineset) {
        temp2 -= 1
        beep.play()
    }

    document.querySelector('#step-2 .read-2').innerHTML = `ST ${pad(temp2, 3)}C`
}
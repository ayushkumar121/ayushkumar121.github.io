let lottie8 = bodymovin.loadAnimation({
    container: document.querySelector('#step-8 .bodymovinanim'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets2.lottiefiles.com/packages/lf20_w5Euqd.json'
})

var currentSegment8 = 1;
var part1done_8 = false
var machineOn8 = false
var temp8 = 0

var machineset8 = false

function platySegments8() {
    if (!part1done_8) {
        if (currentSegment8 == 1) {
            lottie8.playSegments([0, 112], true)
            
            gsap.to('#step-8 .control-1', {opacity: 0})
            gsap.to('#step-8 .control-2', {delay: 4, opacity: 1, onComplete: () => {
                currentSegment8++
            }})
        }
        else if (currentSegment8 == 2) {
            lottie8.playSegments([112, 230], true)
            
            gsap.to('#step-8 .control-2', {opacity: 0})
            gsap.to('#step-8 .control-3', {delay: 3, opacity: 1, onComplete: () => {
                currentSegment8++
            }})
        }
        else if (currentSegment8 == 3) {
            lottie8.playSegments([230, 430], true)
            
            gsap.to('#step-8 .control-3', {opacity: 0})
            gsap.to('#step-8 .control-4', {delay: 6, opacity: 1, onComplete: () => {
                part1done_8 = true
            }})
        }
    }
}

function turnOn8() {
    if(!machineOn8 && part1done_8) {
        machineOn8 = true
        gsap.to('#step-8 .control-4', {opacity: 0})

        gsap.to('#step-8 .read-1', {opacity: 1})
        gsap.to('#step-8 .read-2', {opacity: 1})

        beep.play()
    }
}

function SET8() {
    if(machineOn8 & !machineset8) {
        beep.play()
        machineset8 = true

        var obj = {i:0}
        gsap.to(obj, {duration: 5, i: temp8, ease: new SteppedEase.config(temp8), onUpdate: () => {
            document.querySelector('#step-8 .read-1').innerHTML = `PT ${pad(obj.i, 3)}C`
        }, onComplete: () => {
            task_done = true
            addTask('Step8: Put the sample crucible in muffle furnace and set the temperature to 500°C')
        }})
    }
}

function INC8() {
    if(machineOn8 && !machineset8) {
        temp8 += 50
        beep.play()
    }

    document.querySelector('#step-8 .read-2').innerHTML = `ST ${pad(temp8, 3)}C`
}

function DEC8() {
    if(machineOn8 && !machineset8) {
        temp8 -= 1
        beep.play()
    }

    document.querySelector('#step-8 .read-2').innerHTML = `ST ${pad(temp8, 3)}C`
}
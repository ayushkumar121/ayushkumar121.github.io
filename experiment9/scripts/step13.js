let lottie13 = bodymovin.loadAnimation({
    container: document.querySelector('#step-13 .bodymovinanim'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets4.lottiefiles.com/packages/lf20_Sv6w8V.json'
})

var currentSegment13 = 1;
var locked = false
task_done= false

var temp13 = 0
var machineset13 = false

function platySegments13() {
    if (!task_done && !locked) {
        if (currentSegment13 == 1) {
            lottie13.playSegments([0, 150], true)
            
            gsap.to('#step-13 .control-1', {opacity: 0})
            gsap.to('#step-13 .control-2', {delay: 5, opacity: 1,  onComplete: () => {
                currentSegment13++
            }})
        } else if (currentSegment13 == 2) {
            lottie13.playSegments([150, 352], true)
            
            gsap.to('#step-13 .control-2', {opacity: 0})
            gsap.to('#step-13 .control-1', {delay: 8, onComplete: () => {
                locked = true
                gsap.to('#step-13 .readings', {opacity: 1})
            }})
        }
    }
}

function add13() {
    if(locked && !machineset13) {
        beep.play()
        temp13++
        document.querySelector('#step-13 .read-2').innerHTML = `ST ${pad(temp13,3)}C`
    }
}

function sub13() {
    if(locked && !machineset13) {
        beep.play()
        temp13--
        document.querySelector('#step-13 .read-2').innerHTML = `ST ${pad(temp13,3)}C`
    }
}

function set13() {
    if(locked && !machineset13) {
        beep.play()
        beep.play()

        var obj = {i:0}
        gsap.to(obj, {i: temp13, duration: 10, ease: new SteppedEase.config(temp13), onUpdate: () => {
            document.querySelector('#step-13 .read-1').innerHTML = `PT ${pad(obj.i,3)}C`
        }})

        gsap.to('#step-13 .read-2', {delay: 21, onComplete: () => {
            task_done = true
            addTask('Step11: Set the temperature of hot air oven to 130C and dry for 2 hrs')
        }})

        machineset13 = true
        lottie13.playSegments([352, 1113], true)
    }
}
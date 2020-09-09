let lottie5 = bodymovin.loadAnimation({
    container: document.querySelector('#step-5 .bodymovinanim'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets2.lottiefiles.com/packages/lf20_TKpDxf.json'
})
lottie5.setSpeed(.75)

var part51done = false
var titrating = false
var titration_values = [
    5,
    6,
    7
]
var currentValue = 0
var handle = null

function part51() {
    if(!part51done) {
        lottie5.playSegments([0, 220], true)

        gsap.to('#step-5 .control-1', {opacity: 0}) 
        gsap.to('#step-5 .control-2, #step-5 .control-3', {opacity: 1, delay: "8", onComplete: () => {
            part51done = true
        }})
    }
}

function startTitration() {
    if(part51done && !titrating) {
        lottie5.playSegments([220, 2600], true)
        titrating = true
        handle = setInterval(() => {
            currentValue++
        }, 1000);
    }
}

function stopTitration() {
    if(part51done && titrating) {
        lottie5.pause()
        titrating = false
        clearInterval(handle)
        
        if(currentValue >= titration_values[selectedSample]) {
            task_done = true
            addTask('step 5')
        }
    }
}
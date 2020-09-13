let lottie4 = bodymovin.loadAnimation({
    container: document.querySelector('#step-4 .bodymovinanim'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets2.lottiefiles.com/packages/lf20_V3DrWK.json'
})

var currentSegment4 = 1;

var part41done = false
var titrating = false

var currentValue = 0
var handle = null

function platySegments4() {
    if (!part41done) {
        if (currentSegment4 == 1) {
            lottie4.playSegments([0, 135], true)
            
            gsap.to('#step-4 .control-1', {opacity: 0})
            gsap.to('#step-4 .control-2', {delay: 4, opacity: 1, onComplete: () => {
                currentSegment4++
            }})
        }
        else if (currentSegment4 == 2) {
            lottie4.playSegments([135, 366], true)
            
            gsap.to('#step-4 .control-2', {opacity: 0})
            gsap.to('#step-4 .control-3', {delay: 7, opacity: 1, onComplete: () => {
                currentSegment4++
            }})
        }
        else if (currentSegment4 == 3) {
            lottie4.playSegments([366, 428], true)
            
            gsap.to('#step-4 .control-3', {opacity: 0})
            gsap.to('#step-4 .control-4', {delay: 2.5, opacity: 1, onComplete: () => {
                currentSegment4++
            }})
        }
        else if (currentSegment4 == 4) {
            lottie4.playSegments([428, 500], true)
            
            gsap.to('#step-4 .control-4', {opacity: 0})
            gsap.to('#step-4 .control-5, #step-4 .control-6', {delay: 4, opacity: 1, onComplete: () => {
                part41done = true
            }})
        }
    }
}

function startTitration() {
    if(part41done && !titrating) {
        lottie4.playSegments([500, 1228], true)
        titrating = true
        handle = setInterval(() => {
            currentValue++
        }, 1000);
    }
}

function stopTitration() {
    if(part41done && titrating) {
        lottie4.pause()
        titrating = false
        clearInterval(handle)
        
        if(currentValue >= 6) {
            task_done = true
            document.querySelector('#step-4 .read-1').innerHTML = '<b>6.1 ml</b>'
            addTask('Step4: Titrate the mixture with DCPIP dye solution')
        }
    }
}
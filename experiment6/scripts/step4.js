let lottie4 = bodymovin.loadAnimation({
    container: document.querySelector('#step-4 .bodymovinanim'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets5.lottiefiles.com/packages/lf20_UNKGw0.json'
})

var currentSegment4 = 1;

var part41done = false
var titrating = false

var currentValue = 0
var handle = null

var dyeFactor = 0

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
        lottie4.playSegments([500, 4129], true)
        titrating = true
        handle = setInterval(() => {
            currentValue += 0.2

            if(Math.abs(currentValue - 6.0) <= 0.4) {
                gsap.to('.titration-status', {opacity: 1})
            } else if((currentValue - 6.0) > 0.4) {
                gsap.to('.titration-status', {background: '#F44336'})
                document.querySelector('.titration-status h1').innerHTML = 'Over Titrated'
                stopTitration()

                gsap.to('#controls-2', {display: 'block'})
                document.querySelector('.back-button').onclick = () => {
                    previous()
                    previous()

                    gsap.to('#controls-2', {display: 'none'})
                }
            }

            document.querySelector('#step-4 .read-1').innerHTML = `<b>${currentValue.toFixed(1)} ml</b>`
        }, 1000);
    }
}

function stopTitration() {
    if(part41done) {
        lottie4.pause()
        titrating = false
        clearInterval(handle)
        
        if(Math.abs(currentValue - 6.0) <= 0.4) {
            task_done = true
            dyeFactor = (0.5/currentValue)
            
            document.querySelector('.result-1').innerHTML = `<b>${currentValue.toFixed(1)} ml</b>`
            document.querySelector('.result-11').innerHTML = ` = <b>${dyeFactor.toFixed(3)}</b>`

            addTask('Step4: Titrate the mixture with DCPIP dye solution')
        }
    }
}
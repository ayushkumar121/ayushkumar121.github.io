let lottie7 = bodymovin.loadAnimation({
    container: document.querySelector('#step-7 .bodymovinanim'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets5.lottiefiles.com/packages/lf20_o5cDSv.json'
})

var currentSegment7 = 1;

function platySegments7() {
    if (!task_done) {
        if (currentSegment7 == 1) {
            lottie7.playSegments([0, 230], true)
            
            gsap.to('#step-7 .control-1', {opacity: 0, onComplete: () => {
                document.querySelector('#step-7 .control-1').innerHTML = `Pour in the flask`
            }})

            gsap.to('#step-7 .control-1', {delay: 6, opacity: 1, onComplete: () => {
                currentSegment7++
            }})
        }
        else if (currentSegment7 == 2) {
            lottie7.playSegments([230, 445], true)
            
            gsap.to('#step-7 .control-1', {opacity: 0, onComplete: () => {
                document.querySelector('#step-7 .control-1').innerHTML = `Measure Again`
            }})

            gsap.to('#step-7 .control-1', {delay: 6, opacity: 1, onComplete: () => {
                currentSegment7++
            }})
        }
        else if (currentSegment7 == 3) {
            lottie7.playSegments([445, 650], true)
            
            gsap.to('#step-7 .control-1', {opacity: 0, onComplete: () => {
                document.querySelector('#step-7 .control-1').innerHTML = `Pour in the flask`
            }})

            gsap.to('#step-7 .control-1', {delay: 6, opacity: 1, onComplete: () => {
                currentSegment7++
            }})
        } else if (currentSegment7 == 4) {
            lottie7.playSegments([650, 860], true)
            
            gsap.to('#step-7 .control-1', {opacity: 0})
            gsap.to('#step-7 .control-1', {delay: 6, opacity: 0, onComplete: () => {
                task_done = true
                addTask('Step7: Measure 200 ml of 0.313 M Sodium hydroxideand pour in a conical flask')
            }})
        }
    }
}
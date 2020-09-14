let lottie2 = bodymovin.loadAnimation({
    container: document.querySelector('#step-2 .bodymovinanim'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets5.lottiefiles.com/packages/lf20_h3y8qD.json'
})

var currentSegment2 = 1;

function platySegments2() {
    if (!task_done) {
        if (currentSegment2 == 1) {
            lottie2.playSegments([0, 230], true)
            
            gsap.to('#step-2 .control-1', {opacity: 0, onComplete: () => {
                document.querySelector('#step-2 .control-1').innerHTML = `Pour in the flask`
            }})

            gsap.to('#step-2 .control-1', {delay: 6, opacity: 1, onComplete: () => {
                currentSegment2++
            }})
        }
        else if (currentSegment2 == 2) {
            lottie2.playSegments([230, 445], true)
            
            gsap.to('#step-2 .control-1', {opacity: 0, onComplete: () => {
                document.querySelector('#step-2 .control-1').innerHTML = `Measure Again`
            }})

            gsap.to('#step-2 .control-1', {delay: 6, opacity: 1, onComplete: () => {
                currentSegment2++
            }})
        }
        else if (currentSegment2 == 3) {
            lottie2.playSegments([445, 650], true)
            
            gsap.to('#step-2 .control-1', {opacity: 0, onComplete: () => {
                document.querySelector('#step-2 .control-1').innerHTML = `Pour in the flask`
            }})

            gsap.to('#step-2 .control-1', {delay: 6, opacity: 1, onComplete: () => {
                currentSegment2++
            }})
        } else if (currentSegment2 == 4) {
            lottie2.playSegments([650, 860], true)
            
            gsap.to('#step-2 .control-1', {opacity: 0})
            gsap.to('#step-2 .control-1', {delay: 6, opacity: 0, onComplete: () => {
                task_done = true
                addTask('Step2: Measure 200 ml of 0.128 M Sulphuric acid and pour in a conical flask')
            }})
        }
    }
}
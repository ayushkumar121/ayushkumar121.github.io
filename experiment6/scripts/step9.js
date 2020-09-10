let lottie9 = bodymovin.loadAnimation({
    container: document.querySelector('#step-9 .bodymovinanim'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets6.lottiefiles.com/packages/lf20_1UANSb.json'
})

var currentSegment9 = 1;

function platySegments9() {
    if (!task_done) {
        if (currentSegment9 == 1) {
            lottie9.playSegments([0, 290], true)
            
            gsap.to('#step-9 .control-1', {opacity: 0})
            gsap.to('#step-9 .control-2', {delay: 9, opacity: 1, onComplete: () => {
                currentSegment9++
            }})
        }
        else if (currentSegment9 == 2) {
            lottie9.playSegments([290, 600], true)
            
            gsap.to('#step-9 .control-2', {opacity: 0})
            gsap.to('#step-9 .control-3', {delay: 10, opacity: 1, onComplete: () => {
                currentSegment9++
            }})
        }
        else if (currentSegment9 == 3) {
            lottie9.playSegments([600, 950], true)
            
            gsap.to('#step-9 .control-3', {opacity: 0})
            gsap.to('#step-9 .control-4', {delay: 11, opacity: 1, onComplete: () => {
                currentSegment9++
            }})
        }
        else if (currentSegment9 == 4) {
            lottie9.playSegments([950, 1200], true)
            
            gsap.to('#step-9 .control-4', {opacity: 0})
            gsap.to('#step-9 .control-4', {delay: 12, onComplete: () => {
                task_done = true
                addTask('Step3: Add 5 ml of HPO<sub>3</sub> solution in the conical flask')
            }})
        }
    }
}
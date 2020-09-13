let lottie3 = bodymovin.loadAnimation({
    container: document.querySelector('#step-3 .bodymovinanim'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets8.lottiefiles.com/packages/lf20_LWRRmy.json'
})

var currentSegment3 = 1;

function platySegments3() {
    if (!task_done) {
        if (currentSegment3 == 1) {
            lottie3.playSegments([0, 180], true)
            
            gsap.to('#step-3 .control-1', {opacity: 0})
            gsap.to('#step-3 .control-2', {delay: 6, opacity: 1, onComplete: () => {
                currentSegment3++
            }})
        }
        else if (currentSegment3 == 2) {
            lottie3.playSegments([180, 508], true)
            
            gsap.to('#step-3 .control-2', {opacity: 0})
            gsap.to('#step-3 .control-2', {delay: 6, onComplete: () => {
                task_done = true
                addTask('Step3: Add 5 ml of HPO<sub>3</sub> solution in the conical flask')
            }})
        }
    }
}
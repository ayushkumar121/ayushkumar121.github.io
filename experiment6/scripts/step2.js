let lottie2 = bodymovin.loadAnimation({
    container: document.querySelector('#step-2 .bodymovinanim'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets7.lottiefiles.com/packages/lf20_Yy27Vg.json'
})

var currentSegment2 = 1;

function platySegments2() {
    if (!task_done) {
        if (currentSegment2 == 1) {
            lottie2.playSegments([0, 180], true)
            
            gsap.to('#step-2 .control-1', {opacity: 0})
            gsap.to('#step-2 .control-2', {delay: 6, opacity: 1, onComplete: () => {
                currentSegment2++
            }})
        }
        else if (currentSegment2 == 2) {
            lottie2.playSegments([180, 508], true)
            
            gsap.to('#step-2 .control-2', {opacity: 0})
            gsap.to('#step-2 .control-2', {delay: 6, opacity: 0, onComplete: () => {
                task_done = true
                addTask('Step2: Take 5 ml of standard ascorbic acid solution in the conical flask')
            }})
        }
    }
}
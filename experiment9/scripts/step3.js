let lottie3 = bodymovin.loadAnimation({
    container: document.querySelector('#step-3 .bodymovinanim'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets6.lottiefiles.com/packages/lf20_T4D7E1.json'
})

var currentSegment3 = 1;

function platySegments3() {
    if (!task_done) {
        if (currentSegment3 == 1) {
            lottie3.play()
            
            gsap.to('#step-3 .control-1', {opacity: 0})
            gsap.to('#step-3 .control-1', {delay: 10, onComplete: () => {
                task_done = true
                addTask('Step3: Add 2 gm sample into the conical flask ')
            }})
        }
    }
}
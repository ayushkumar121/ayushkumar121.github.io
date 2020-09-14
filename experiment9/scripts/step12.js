let lottie12 = bodymovin.loadAnimation({
    container: document.querySelector('#step-12 .bodymovinanim'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets1.lottiefiles.com/packages/lf20_OLVRKw.json'
})

var currentSegment12 = 1;

function platySegments12() {
    if (!task_done) {
        if (currentSegment12 == 1) {
            lottie12.playSegments([0, 700], true)
            
            gsap.to('#step-12 .control-1', {opacity: 0})
            gsap.to('#step-12 .control-1', {delay: 10, onComplete: () => {
                task_done = true
                addTask('Step10: Collect the fibre in crucible ')
            }})
        }
    }
}
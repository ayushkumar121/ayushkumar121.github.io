let lottie16 = bodymovin.loadAnimation({
    container: document.querySelector('#step-16 .bodymovinanim'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets3.lottiefiles.com/packages/lf20_w2tvhz.json'
})

var currentSegment16 = 1;

function platySegments16() {
    if (!task_done) {
        if (currentSegment16 == 1) {
            lottie16.playSegments([0, 100], true)
            
            gsap.to('#step-16 .control-1', {opacity: 0})
            gsap.to('#step-16 .control-2', {delay: 4, opacity: 1, onComplete: () => {
                currentSegment16++
            }})
        }
        else if (currentSegment16 == 2) {
            lottie16.playSegments([100, 270], true)
            
            gsap.to('#step-16 .control-2', {opacity: 0})
            gsap.to('#step-16 .control-3', {delay: 6, opacity: 1, onComplete: () => {
                currentSegment16++
            }})
        }
        else if (currentSegment16 == 3) {
            lottie16.playSegments([270, 443], true)
            
            gsap.to('#step-16 .control-3', {opacity: 0})
            gsap.to('#step-16 .control-3', {delay: 4, onComplete: () => {
                task_done = true
                addTask('Step16: Then take out sample crucible carefully with help of tong and confirm proper ashing of sample')
            }})
        }
    }
}
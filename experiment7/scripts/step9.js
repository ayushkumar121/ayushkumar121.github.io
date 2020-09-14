let lottie9 = bodymovin.loadAnimation({
    container: document.querySelector('#step-9 .bodymovinanim'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets7.lottiefiles.com/packages/lf20_QgNB5U.json'
})

var currentSegment9 = 1;

function platySegments9() {
    if (!task_done) {
        if (currentSegment9 == 1) {
            lottie9.playSegments([0, 100], true)
            
            gsap.to('#step-9 .control-1', {opacity: 0})
            gsap.to('#step-9 .control-2', {delay: 4, opacity: 1, onComplete: () => {
                currentSegment9++
            }})
        }
        else if (currentSegment9 == 2) {
            lottie9.playSegments([100, 270], true)
            
            gsap.to('#step-9 .control-2', {opacity: 0})
            gsap.to('#step-9 .control-3', {delay: 6, opacity: 1, onComplete: () => {
                currentSegment9++
            }})
        }
        else if (currentSegment9 == 3) {
            lottie9.playSegments([270, 449], true)
            
            gsap.to('#step-9 .control-3', {opacity: 0})
            gsap.to('#step-9 .control-3', {delay: 4, onComplete: () => {
                task_done = true
                addTask('Step9: Then take out sample crucible carefully')
            }})
        }
    }
}
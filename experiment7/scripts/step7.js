let lottie7 = bodymovin.loadAnimation({
    container: document.querySelector('#step-7 .bodymovinanim'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets10.lottiefiles.com/packages/lf20_MaObZk.json'
})

var currentSegment7 = 1;

function platySegments7() {
    if (!task_done) {
        if (currentSegment7 == 1) {
            lottie7.playSegments([0, 277], true)
            
            gsap.to('#step-7 .control-1', {opacity: 0})
            gsap.to('#step-7 .control-2', {delay: 8, opacity: 1, onComplete: () => {
                currentSegment7++
            }})
        }
        if (currentSegment7 == 2) {
            lottie7.playSegments([277, 426], true)
            
            gsap.to('#step-7 .control-2', {opacity: 0})
            gsap.to('#step-7 .control-3', {delay: 6, opacity: 1, onComplete: () => {
                currentSegment7++
            }})
        }
        else if (currentSegment7 == 3) {
            lottie7.playSegments([426, 720], true)
            
            gsap.to('#step-7 .control-3', {opacity: 0})
            gsap.to('#step-7 .control-3', {delay: 8, onComplete: () => {
                task_done = true
                addTask('Step7: Filter it carefully using ashless filter-paper')
            }})
        }
    }
}
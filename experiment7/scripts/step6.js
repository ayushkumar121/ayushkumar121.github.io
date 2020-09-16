let lottie6 = bodymovin.loadAnimation({
    container: document.querySelector('#step-6 .bodymovinanim'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets10.lottiefiles.com/packages/lf20_c10FAo.json'
})

var currentSegment6 = 1;

function platySegments6() {
    if (!task_done) {
        if (currentSegment6 == 1) {            
            gsap.to('#step-6 .control-1', {opacity: 0})
            gsap.to('#step-6 .control-2', {opacity: 1, onComplete: () => {
                currentSegment6++ 
            }})
        }
        if (currentSegment6 == 2) {
            lottie6.playSegments([0, 138], true)
            
            gsap.to('#step-6 .control-2', {opacity: 0})
            gsap.to('#step-6 .control-3', {delay: 10, opacity: 1, onComplete: () => {
                currentSegment6++
            }})
        }
        else if (currentSegment6 == 3) {
            lottie6.playSegments([200, 400], true)
            
            gsap.to('#step-6 .control-3', {opacity: 0})
            gsap.to('#step-6 .control-3', {delay: 4, onComplete: () => {
                task_done = true
                addTask('Step6: Heat the sample beaker for 5 minutes using hot plate')
            }})
        }
    }
}
let lottie3 = bodymovin.loadAnimation({
    container: document.querySelector('#step-3 .bodymovinanim'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets7.lottiefiles.com/packages/lf20_QkNmVe.json'
})

var currentSegment3 = 1;

function platySegments3() {
    if (!task_done) {
        if (currentSegment3 == 1) {
            lottie3.playSegments([0, 100], true)
            
            gsap.to('#step-3 .control-1', {opacity: 0})
            gsap.to('#step-3 .control-2', {delay: 4, opacity: 1, onComplete: () => {
                currentSegment3++
            }})
        }
        else if (currentSegment3 == 2) {
            lottie3.playSegments([100, 270], true)
            
            gsap.to('#step-3 .control-2', {opacity: 0})
            gsap.to('#step-3 .control-3', {delay: 6, opacity: 1, onComplete: () => {
                currentSegment3++
            }})
        }
        else if (currentSegment3 == 3) {
            lottie3.playSegments([270, 443], true)
            
            gsap.to('#step-3 .control-3', {opacity: 0})
            gsap.to('#step-3 .control-3', {delay: 4, onComplete: () => {
                task_done = true
                addTask('Step3: Then take out sample crucible carefully with help of tong and confirm proper ashing of sample')
            }})
        }
    }
}
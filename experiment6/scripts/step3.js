let lottie3 = bodymovin.loadAnimation({
    container: document.querySelector('#step-3 .bodymovinanim'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets2.lottiefiles.com/packages/lf20_HaSXq3.json'
})

var currentSegment3 = 1;

function platySegments3() {
    if (!task_done) {
        // 1x speed
        if (currentSegment3 == 1) {
            lottie3.setSpeed(1)
            lottie3.playSegments([0, 90], true)
            
            gsap.to('#step-3 .control-1', {opacity: 0})
            gsap.to('#step-3 .control-2', {delay: 2, opacity: 1, onComplete: () => {
                currentSegment3++
            }})
        }
        else if (currentSegment3 == 2) {
            lottie3.playSegments([90, 480], true)
            
            gsap.to('#step-3 .control-2', {opacity: 0})
            gsap.to('#step-3 .control-3', {delay: 13, opacity: 1, onComplete: () => {
                currentSegment3++
            }})
        }
        // 2x speed
        else if (currentSegment3 == 3) {
            lottie3.setSpeed(2)
            lottie3.playSegments([480, 1130], true)
            gsap.to('#step-3 .control-3', {opacity: 0})
            gsap.to('#step-3 .control-4', {delay: 8, opacity: 1, onComplete: () => {
                currentSegment3++
            }})
        }
        else if (currentSegment3 == 4) {
            lottie3.playSegments([1130, 2100], true)
            gsap.to('#step-3 .control-4', {opacity: 0})
            gsap.to('#step-3 .control-5', {delay: 16, opacity: 1, onComplete: () => {
                currentSegment3++
            }})
        }

        // 1x Speed
        else if (currentSegment3 == 5) {
            lottie3.setSpeed(1)
            lottie3.playSegments([2100, 2470], true)
            gsap.to('#step-3 .control-5', {opacity: 0})
            gsap.to('#step-3 .control-5', {delay: 13, onComplete: () => {
                task_done = true
            }})
        }
    }
}
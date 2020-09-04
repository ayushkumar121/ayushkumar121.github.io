var currentSegment7 = 1;

function platySegments7() {
    if (!task_done) {
        // 1x Speed
        if (currentSegment7 == 1) {
            lottie7.setSpeed(1)
            lottie7.play()
            
            gsap.to('#step-7 .control-1', {opacity: 0})
            gsap.to('#step-7 .control-1', {delay: 11, onComplete: () => {
               task_done = true
            }})
        }
    }
}
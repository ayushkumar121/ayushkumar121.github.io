var currentSegment6 = 1;

function platySegments6() {
    if (!task_done) {
        // 1x Speed
        if (currentSegment6 == 1) {
            lottie6.setSpeed(1)
            lottie6.playSegments([0, 90], true)
            
            gsap.to('#step-6 .control-1', {opacity: 0})
            gsap.to('#step-6 .control-2', {delay: 2, opacity: 1, onComplete: () => {
                currentSegment6++
            }})
        }
        else if (currentSegment6 == 2) {
            lottie6.playSegments([90, 480], true)
            
            gsap.to('#step-6 .control-2', {opacity: 0})
            gsap.to('#step-6 .control-3', {delay: 13, opacity: 1, onComplete: () => {
                currentSegment6++
            }})
        }

        else if (currentSegment6 == 3) {
            lottie6.playSegments([480, 890], true)
            gsap.to('#step-6 .control-3', {opacity: 0})
            gsap.to('#step-6 .control-4', {delay: 13, opacity: 1, onComplete: () => {
                currentSegment6++
            }})
        }
        else if (currentSegment6 == 4) {
            lottie6.playSegments([890, 1400], true)
            gsap.to('#step-6 .control-4', {opacity: 0})
            gsap.to('#step-6 .control-4', {delay: 12, onComplete: () => {
                task_done = true
            }})
        }
    }
}
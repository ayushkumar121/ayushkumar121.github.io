var currentSegment7 = 1;

function platySegments7() {
    if (!task_done) {
        if (currentSegment7 == 1) {
            lottie7.playSegments([0, 504], true)
            
            gsap.to('#step-7 .control-1', {opacity: 0})
            gsap.to('#step-7 .control-2', {delay: 6, opacity: 1, onComplete: () => {
                currentSegment7++
            }})
        }
        else if (currentSegment7 == 2) {
            lottie7.playSegments([504, 1080], true)
            
            gsap.to('#step-7 .control-2', {opacity: 0})
            gsap.to('#step-7 .control-3', {delay: 10, opacity: 1, onComplete: () => {
                currentSegment7++
            }})
        }
        else if (currentSegment7 == 3) {
            lottie7.playSegments([1080, 1770], true)
            
            gsap.to('#step-7 .control-3', {opacity: 0})
            gsap.to('#step-7 .control-4', {delay: 11, opacity: 1, onComplete: () => {
                currentSegment7++
            }})
        }
        else if (currentSegment7 == 4) {
            lottie7.playSegments([1770, 2600], true)
            
            gsap.to('#step-7 .control-4', {opacity: 0})
            gsap.to('#step-7 .control-4', {delay: 12, onComplete: () => {
                task_done = true
                addTask('Step7: Take out 50 ml juice in four different conical flasks marked as J1, J2, J3, J4')
            }})
        }
    }
}
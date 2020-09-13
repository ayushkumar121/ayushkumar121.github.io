var currentSegment10 = 1;

function platySegments10() {
    if (!task_done) {
        if (currentSegment10 == 1) {
            lottie10.playSegments([0, 580], true)
            
            gsap.to('#step-10 .control-1', {opacity: 0})
            gsap.to('#step-10 .control-2', {delay: 13, opacity: 1, onComplete: () => {
                currentSegment10++
            }})
        }
        else if (currentSegment10 == 2) {
            lottie10.playSegments([580, 1120], true)
            
            gsap.to('#step-10 .control-2', {opacity: 0})
            gsap.to('#step-10 .control-3', {delay: 13, opacity: 1, onComplete: () => {
                currentSegment10++
            }})
        }
        else if (currentSegment10 == 3) {
            lottie10.playSegments([1120, 1580], true)
            
            gsap.to('#step-10 .control-3', {opacity: 0})
            gsap.to('#step-10 .control-4', {delay: 13, opacity: 1, onComplete: () => {
                currentSegment10++
            }})
        }
        else if (currentSegment10 == 4) {
            lottie10.playSegments([1580, 2200], true)
            
            gsap.to('#step-10 .control-4', {opacity: 0})
            gsap.to('#step-10 .control-4', {delay: 13, onComplete: () => {
                task_done = true
                addTask('Step3: Add 5 ml of HPO<sub>3</sub> solution in the conical flask')
            }})
        }
    }
}
var part41done = false

function part41() {
    if(!part41done) {
        lottie4.playSegments([0, 135], true)

        gsap.to('#step-4 .control-1', {opacity: 0}) 
        gsap.to('#step-4 .control-2', {opacity: 1, delay: "6", onComplete: () => {
            part41done = true
        }})
    }
}

function part42() {
    if(part41done && !task_done) {
        lottie4.playSegments([135, 390], true)

        gsap.to('#step-4 .control-2', {opacity: 0})
        gsap.to('#step-4 .control-2', {delay: "8", onComplete: () => {
            task_done = true
            addTask('Step 4')
        }}) 
    }
}
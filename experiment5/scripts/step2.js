var part21done = false

function part21() {
    if(!part21done) {
        lottie2.playSegments([0, 130], true)

        gsap.to('#step-2 .control-1', {opacity: 0}) 
        gsap.to('#step-2 .control-2', {opacity: 1, delay: "6", onComplete: () => {
            part21done = true
        }})
    }
}

function part22() {
    if(part21done && !task_done) {
        lottie2.playSegments([130, 280], true)

        gsap.to('#step-2 .control-2', {opacity: 0})
        gsap.to('#step-2 .control-2', {delay: "6", onComplete: () => {
            task_done = true
            addTask('Step3 : Pipette out 25 ml water in a conical flask')
        }}) 
    }
}
let lottie2 = bodymovin.loadAnimation({
    container: document.querySelector('#step-2 .bodymovinanim'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets2.lottiefiles.com/packages/lf20_qDEU4M.json'
})
lottie2.setSpeed(.75)

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
            addTask('Step 2')
        }}) 
    }
}
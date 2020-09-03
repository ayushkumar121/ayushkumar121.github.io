let lottie3 = bodymovin.loadAnimation({
    container: document.querySelector('#step-3 .bodymovinanim'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets3.lottiefiles.com/packages/lf20_nse5Ng.json'
})
lottie3.setSpeed(.75)

var part31done = false

function part31() {
    if(!part31done) {
        lottie3.playSegments([0, 130], true)

        gsap.to('#step-3 .control-1', {opacity: 0}) 
        gsap.to('#step-3 .control-2', {opacity: 1, delay: "6", onComplete: () => {
            part31done = true
        }})
    }
}

function part32() {
    if(part31done && !task_done) {
        lottie3.playSegments([130, 300], true)

        gsap.to('#step-3 .control-2', {opacity: 0})
        gsap.to('#step-3 .control-2', {delay: "6", onComplete: () => {
            task_done = true
            addTask('Step 3')
        }}) 
    }
}
let lottie9 = bodymovin.loadAnimation({
    container: document.querySelector('#step-9 .bodymovinanim'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets4.lottiefiles.com/packages/lf20_trTHu3.json'
})

var currentSegment9 = 1;

function platySegments9() {
    if (!task_done) {
        if (currentSegment9 == 1) {
            beep.play()
            lottie9.playSegments([0, 64], true)
            
            gsap.to('#step-9 .reading', {opacity: 1})
            gsap.to('#step-9 .control-1', {opacity: 0})

            gsap.to('#step-9 .control-2', {delay: 4, opacity: 1, onComplete: () => {
                currentSegment9++
            }})
        } else if (currentSegment9 == 2) {
            lottie9.playSegments([64, 840], true)
            
            gsap.to('#step-9 .control-2', {opacity: 0})
            
            gsap.to('#step-9 .control-2', {delay: 22, onComplete: () => {
                task_done = true
                addTask('Step4: Put the sample flask on hot plate and boil for 30 mins')
            }})
        }
    }
}
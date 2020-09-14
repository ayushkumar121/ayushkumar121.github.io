let lottie4 = bodymovin.loadAnimation({
    container: document.querySelector('#step-4 .bodymovinanim'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets6.lottiefiles.com/packages/lf20_vWdcD4.json'
})

var currentSegment4 = 1;

function platySegments4() {
    if (!task_done) {
        if (currentSegment4 == 1) {
            beep.play()
            lottie4.playSegments([0, 64], true)
            
            gsap.to('#step-4 .reading', {opacity: 1})
            gsap.to('#step-4 .control-1', {opacity: 0})

            gsap.to('#step-4 .control-2', {delay: 4, opacity: 1, onComplete: () => {
                currentSegment4++
            }})
        } else if (currentSegment4 == 2) {
            lottie4.playSegments([64, 840], true)
            
            gsap.to('#step-4 .control-2', {opacity: 0})
            
            gsap.to('#step-4 .control-2', {delay: 22, onComplete: () => {
                task_done = true
                addTask('Step4: Put the sample flask on hot plate and boil for 30 mins')
            }})
        }
    }
}
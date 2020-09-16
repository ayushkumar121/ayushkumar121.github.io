let lottie5 = bodymovin.loadAnimation({
    container: document.querySelector('#step-5 .bodymovinanim'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets2.lottiefiles.com/packages/lf20_R9tH2o.json'
})

var currentSegment5 = 1;

function platySegments5() {
    if (!task_done) {
        if (currentSegment5 == 1) {
            lottie5.playSegments([0, 235], true)
            
            gsap.to('#step-5 .control-1', {opacity: 0})
            gsap.to('#step-5 .control-2', {delay: 8, opacity: 1, onComplete: () => {
                currentSegment5++
            }})
        }
        else if (currentSegment5 == 2) {
            lottie5.playSegments([270, 660], true)
            
            gsap.to('#step-5 .control-2', {opacity: 0})
            gsap.to('#step-5 .control-2', {delay: 10, onComplete: () => {
                task_done = true
                addTask('Step5: Take the ash in a beaker and add 25 mL of hydrochloric acid to it')
            }})
        }
    }
}
let lottie5 = bodymovin.loadAnimation({
    container: document.querySelector('#step-5 .bodymovinanim'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets3.lottiefiles.com/packages/lf20_O4egWc.json'
})

var currentSegment5 = 1;

function platySegments5() {
    if (!task_done) {
        if (currentSegment5 == 1) {
            lottie5.playSegments([0, 112], true)
            
            gsap.to('#step-5 .control-1', {opacity: 0})
            gsap.to('#step-5 .control-2', {delay: 4, opacity: 1, onComplete: () => {
                currentSegment5++
            }})
        } else if (currentSegment5 == 2) {
            lottie5.playSegments([112, 460], true)
            
            gsap.to('#step-5 .control-2', {opacity: 0})
            gsap.to('#step-5 .control-3', {delay: 12, opacity: 1, onComplete: () => {
                currentSegment5++
            }})
        }
        else if (currentSegment5 == 3) {
            lottie5.playSegments([460, 550], true)
            
            gsap.to('#step-5 .control-3', {opacity: 0})
            gsap.to('#step-5 .control-3', {delay: 2, onComplete: () => {
                task_done = true
                addTask('Step5: Filter the boiled sample solution using filter cloth')
            }})
        } 
    }
}
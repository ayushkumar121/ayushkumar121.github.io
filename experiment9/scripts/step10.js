let lottie10 = bodymovin.loadAnimation({
    container: document.querySelector('#step-10 .bodymovinanim'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets3.lottiefiles.com/packages/lf20_O4egWc.json'
})

var currentSegment10 = 1;

function platySegments10() {
    if (!task_done) {
        if (currentSegment10 == 1) {
            lottie10.playSegments([0, 112], true)
            
            gsap.to('#step-10 .control-1', {opacity: 0})
            gsap.to('#step-10 .control-2', {delay: 4, opacity: 1, onComplete: () => {
                currentSegment10++
            }})
        } else if (currentSegment10 == 2) {
            lottie10.playSegments([112, 460], true)
            
            gsap.to('#step-10 .control-2', {opacity: 0})
            gsap.to('#step-10 .control-3', {delay: 12, opacity: 1, onComplete: () => {
                currentSegment10++
            }})
        }
        else if (currentSegment10 == 3) {
            lottie10.playSegments([460, 550], true)
            
            gsap.to('#step-10 .control-3', {opacity: 0})
            gsap.to('#step-10 .control-3', {delay: 2, onComplete: () => {
                task_done = true
                addTask('Step9: Filter the boiled sample solution using filter cloth')
            }})
        } 
    }
}
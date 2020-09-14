let lottie17 = bodymovin.loadAnimation({
    container: document.querySelector('#step-17 .bodymovinanim'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets2.lottiefiles.com/packages/lf20_C4g64z.json'
})

var currentSegment17 = 1;

function platySegments17() {
    if (!task_done) {
        if (currentSegment17 == 1) {
            lottie17.playSegments([0, 166], true)
            
            gsap.to('#step-17 .control-1', {opacity: 0})
            gsap.to('#step-17 .control-1', {delay: 10, onComplete: () => {
                task_done = true
                addTask('Step15: weigh the sample crucible and record the weight')
            }})

            var obj = {i:0}
            gsap.to(obj, {delay: 3.8, i: 22.15, ease: new SteppedEase.config(552), duration: 1, onUpdate: () => {
                document.querySelector('#step-17 .reading').innerHTML = `${obj.i.toFixed(2)} gms`
            }})
        }
    }
}
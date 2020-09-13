let lottie4 = bodymovin.loadAnimation({
    container: document.querySelector('#step-4 .bodymovinanim'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets5.lottiefiles.com/packages/lf20_6HLgFx.json'
})

var currentSegment4 = 1;

function platySegments4() {
    if (!task_done) {
        if (currentSegment4 == 1) {
            lottie4.playSegments([0, 166], true)
            
            gsap.to('#step-4 .control-1', {opacity: 0})
            gsap.to('#step-4 .control-1', {delay: 4, onComplete: () => {
                task_done = true
                addTask('Step4: Take weight of sample crucible and recorded as final weight of sample.')
            }})

            var obj = {i:0}
            gsap.to(obj, {delay: 3.8, i: 11.5, ease: new SteppedEase.config(23), onUpdate: () => {
                document.querySelector('#step-4 .reading').innerHTML = `${obj.i.toFixed(1)} gms`
            }})
        }
    }
}
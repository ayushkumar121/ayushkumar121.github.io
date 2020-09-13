let lottie10 = bodymovin.loadAnimation({
    container: document.querySelector('#step-10 .bodymovinanim'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets5.lottiefiles.com/packages/lf20_6HLgFx.json'
})

var currentSegment10 = 1;

function platySegments10() {
    if (!task_done) {
        if (currentSegment10 == 1) {
            lottie10.playSegments([0, 166], true)
            
            gsap.to('#step-10 .control-1', {opacity: 0})
            gsap.to('#step-10 .control-1', {delay: 10, onComplete: () => {
                task_done = true
                addTask('Step10: Take weight of sample crucible and recorded as final weight of sample.')
            }})

            var obj = {i:0}
            gsap.to(obj, {delay: 3.8, i: 11, ease: new SteppedEase.config(22), onUpdate: () => {
                document.querySelector('#step-10 .reading').innerHTML = `${obj.i.toFixed(1)} gms`
            }})
        }
    }
}
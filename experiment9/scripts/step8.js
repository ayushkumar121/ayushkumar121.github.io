let lottie8 = bodymovin.loadAnimation({
    container: document.querySelector('#step-8 .bodymovinanim'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets7.lottiefiles.com/packages/lf20_IFCB4d.json'
})

var currentSegment8 = 1;

function platySegments8() {
    if (!task_done) {
        if (currentSegment3 == 1) {
            lottie8.play()
            
            gsap.to('#step-8 .control-1', {opacity: 0})
            gsap.to('#step-8 .control-1', {delay: 10, onComplete: () => {
                task_done = true
                addTask('Step7: Mix the sample residue obtained in step 7 to the conical flask having NaOH')
            }})
        }
    }
}
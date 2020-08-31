let beakerAnimation_7 = bodymovin.loadAnimation({
    container: document.querySelector('#step-7 .bodymovinanim_7'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets2.lottiefiles.com/packages/lf20_uEhOwo.json'
});

var part1done = false

function step71() {
    if (!part1done) {
        beakerAnimation_7.playSegments([0, 300], true)
        gsap.to('#step-7 .controlCentrifuge', {
            delay: "+10", onComplete: () => {
                part1done = true
                document.querySelector('#step-7 .controlCentrifuge small').innerHTML = `click to pour blue solution`
            }
        })
    } else {
        beakerAnimation_7.playSegments([300, 800], true)
        gsap
            .to('#step-7 .controlCentrifuge', { delay: "+17", x: 100 })
            .to('#step-7 .controlCentrifuge', {
                opacity: 0, onComplete: () => {
                    task_done = true
                }
            })
    }
}

let beakerAnimation_8 = bodymovin.loadAnimation({
    container: document.querySelector('#step-8 .bodymovinanim_8'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets6.lottiefiles.com/packages/lf20_uSXFiV.json'
});

var part81done = false

function step8() {
    if (!part81done) {
        beakerAnimation_8.playSegments([0, 450], true)
        gsap.to('#step-8 .controlCentrifuge', {
            delay: "+10", onComplete: () => {
                part81done = true
            }
        })
    } else {
        beakerAnimation_8.playSegments([500, 850], true)
        gsap
            .to('#step-8 .controlCentrifuge', { delay: "+17", x: 100 })
            .to('#step-8 .controlCentrifuge', {
                opacity: 0, onComplete: () => {
                    task_done = true
                }
            })
    }
}

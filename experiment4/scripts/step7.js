let beakerAnimation_7 = bodymovin.loadAnimation({
    container: document.querySelector('#step-7 .bodymovinanim_7'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets2.lottiefiles.com/packages/lf20_uEhOwo.json'
});

var part1done = false

function step7() {
    if (!part1done) {
        var tl = gsap.timeline()
        beakerAnimation_7.playSegments([0, 300], true)

        tl
            .to('#step-7 .controlCentrifuge', { opacity: 0 })
            .to('#step-7 .controlCentrifuge', {
                delay: "+10", onComplete: () => {
                    part1done = true
                    document.querySelector('#step-7 .controlCentrifuge small').innerHTML = `click to pour ethyl alcohol`
                }
            })
            .to('#step-7 .controlCentrifuge', {x: 100, opacity: 1})

    } else {
        var tl = gsap.timeline()
        beakerAnimation_7.playSegments([300, 800], true)

        tl
            .to('#step-7 .controlCentrifuge', { opacity: 0 })
            .to('#step-7 .controlCentrifuge', {
                delay: "+15", onComplete: () => {
                    task_done = true
                    addTask('Take absorbance at 420nm')
                }
            })
    }
}

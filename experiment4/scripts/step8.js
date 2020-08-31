let beakerAnimation_8 = bodymovin.loadAnimation({
    container: document.querySelector('#step-8 .bodymovinanim_8'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets6.lottiefiles.com/packages/lf20_uSXFiV.json'
});

var part81done = false
var lidOpen = false

function lidOpenFunc(sender) {
    if(!lidOpen) {
        sender.style.background = "green"
        beakerAnimation_8.playSegments([0, 100], true)
        gsap.to('#step-8 .controlCentrifuge', {delay: "2", opacity: 1})
        lidOpen = true
    }
}

function step8() {
    if (lidOpen) {
        if (!part81done) {
            beakerAnimation_8.playSegments([100, 450], true)
            var tl = gsap.timeline()
            tl
            .to('#step-8 .controlCentrifuge', { opacity: 0})
            .to('#step-8 .controlCentrifuge', {
                delay: "+10", onComplete: () => {
                    part81done = true
                }
            })
            .to('#step-8 .controlCentrifuge', { opacity: 1})

        } else {
            beakerAnimation_8.playSegments([500, 850], true)
            var tl = gsap.timeline()
            tl
                .to('#step-8 .controlCentrifuge', { opacity: 0})
                .to('#step-8 .controlCentrifuge', {
                    delay: "+17", onComplete: () => {
                        task_done = true
                    }
                })
        }
    }
}

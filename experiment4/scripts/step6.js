let beakerAnimation_6 = bodymovin.loadAnimation({
    container: document.querySelector('#step-6 .bodymovinanim_6'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets4.lottiefiles.com/packages/lf20_4NU1jH.json'
});

function step6() {
    if(!task_done) {
        beakerAnimation_6.playSegments([0, 450], true)
        gsap.to('#step-6 .controlCentrifuge', {delay: "+7", opacity: 0, onComplete: () => {
            task_done = true
            addTask('Take out the supernatant')
        }})
    }
}
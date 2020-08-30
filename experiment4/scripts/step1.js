task_done = false

let beakerAnimation = bodymovin.loadAnimation({
        container: document.querySelector('.bodymovinanim'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'https://gist.githubusercontent.com/ayushkumar121/a7752f4fafe7f39163dc570128ccdcc9/raw/03e801d65ed9dff32d67f5cd890a8a8b22105786/mixer_and_beaker.json'
});


function juice() {
    if (!task_done) {
        var tl = gsap.timeline()

        tl
            .to('#step-1 .apple small', {
                opacity: 0,
            })
            .to('#step-1 .apple', {
                duration: 2,
                y: -250,
                zIndex: 0
            })
            .to('#step-1 .apple', {
                duration: 2,
                x: 200
            })
            .to('#step-1 .apple', {
                duration: 1,
                y: -100,
                onComplete: () => {
                    beakerAnimation.play()
                    task_done = true
                }
            })     
    }
}
task_done = false

let beakerAnimation = bodymovin.loadAnimation({
        container: document.querySelector('.bodymovinanim'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'assets/step1/juice_in_beaker.json'
});


function juice() {
    if (!task_done) {
        var tl = gsap.timeline()

        tl
            .to('#step-1 .apple small', {
                opacity: 0
            })
            .to('#step-1 .apple', {
                duration: 2,
                y: -250
            })
            .to('#step-1 .apple', {
                duration: 2,
                x: 300
            })
            .to('#step-1 .apple', {
                duration: 1,
                y: -100,
                onComplete: () => {
                    beakerAnimation.play()
                }
            })
            /*
            .to(obj, {
                i: 11,
                delay: "+1",
                duration: 1,
                ease: new SteppedEase.config(11),
                onUpdate: () => {
                    document.querySelector('#step-1 .juice').src = `assets/step1/juice/${obj.i}.svg`
                },
               
            })*/
    }
}
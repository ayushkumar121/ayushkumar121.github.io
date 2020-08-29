task_done = false

function juice() {
    if (!task_done) {
        var tl = gsap.timeline()
        var obj = { i: 0 }

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
                y: -100
            })
            .to(obj, {
                i: 11,
                delay: "+2",
                duration: 0.5,
                ease: new SteppedEase.config(11),
                onUpdate: () => {
                    document.querySelector('#step-1 .juice').src = `/assets/step1/juice/${obj.i}.svg`
                }
            })
    }
}
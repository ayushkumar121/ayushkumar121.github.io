function placeSample() {
    if (!task_done) {
        var obj = {i:0}

        var anim = gsap.timeline()
        anim
            .to('#step-4 .petri-dish .small', { opacity: 0 })
            .to('#sample1,#sample2', {duration: 1, y: -100})
            .to('#sample1,#sample2', {duration: 1, x: -150})
            .to('#sample1,#sample2', {duration: 1, y: -70})
            .to(obj, {i:5, ease: new SteppedEase.config(5), onUpdate: () => {
                document.querySelector('#step-4 .reading-indicator').innerHTML = `${obj.i.toFixed(1)} gm`
            }})

        task_done = true
        gsap.to('.question-1', {opacity: 1})
        addTask('<b>Step 4</b> Weigh 5 g ground food sample')
    }
}
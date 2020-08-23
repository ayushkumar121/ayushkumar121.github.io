function placeDish() {
    if (!task_done) {
        var obj = {i:0}

        var anim = gsap.timeline()
        anim
            .to('#step-2 .petri-dish .small', { opacity: 0 })
            .to('#step-2 .petri-dish', {duration: 1, y: -100 })
            .to('#step-2 .petri-dish', {duration: 1, x: -180, y: -70 })
            .to(obj, {i:30, ease: new SteppedEase.config(30), onUpdate: () => {
                document.querySelector('#step-2 .reading-indicator').innerHTML = `${obj.i.toFixed(1)} gm`
            }})

        task_done = true
        addTask('<b>Step 2</b> Place the Petri dish on weighing balance')
    }
}
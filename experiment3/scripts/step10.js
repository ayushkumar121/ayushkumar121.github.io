var R2 = 31.1
document.querySelector('#R2').innerHTML = `${R2.toFixed(1)}`

function placeDish2() {
    if (!task_done) {
        var obj = {i:0}

        var anim = gsap.timeline()
        anim
            .to('#step-10 .petri-dish .small', { opacity: 0 })
            .to('#step-10 .petri-dish', {duration: 1, y: -100 })
            .to('#step-10 .petri-dish', {duration: 1, x: -180, y: -70 })
            .to(obj, {i:R2, onUpdate: () => {
                document.querySelector('#step-10 .reading-indicator').innerHTML = `${obj.i.toFixed(1)} gm`
            }})

        task_done = true
        addTask('<b>Step 9</b> Take out petri dish from desiccator and record the weight')
    }
}
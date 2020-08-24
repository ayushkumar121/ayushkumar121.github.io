var R1 = 32.5
document.querySelector('#R1').innerHTML = `${R1.toFixed(1)}`

function placeDish1() {
    if (!task_done) {
        var obj = {i:0}

        var anim = gsap.timeline()
        anim
            .to('#step-8 .petri-dish .small', { opacity: 0 })
            .to('#step-8 .petri-dish', {duration: 1, y: -100 })
            .to('#step-8 .petri-dish', {duration: 1, x: -180, y: -70 })
            .to(obj, {i:R1, onUpdate: () => {
                document.querySelector('#step-8 .reading-indicator').innerHTML = `${obj.i.toFixed(1)} gm`
            }})

        task_done = true
        addTask('<b>Step 7</b> Take out petri dish from desiccator and record the weight')
    }
}
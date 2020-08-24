var R3 = 31.1
document.querySelector('#R3').innerHTML = `${R3.toFixed(1)}`

function placeDish3() {
    if (!task_done) {
        var obj = {i:0}

        var anim = gsap.timeline()
        anim
            .to('#step-12 .petri-dish .small', { opacity: 0 })
            .to('#step-12 .petri-dish', {duration: 1, y: -100 })
            .to('#step-12 .petri-dish', {duration: 1, x: -180, y: -70 })
            .to(obj, {i:R3, onUpdate: () => {
                document.querySelector('#step-12 .reading-indicator').innerHTML = `${obj.i.toFixed(1)} gm`
            }})

        task_done = true
        addTask('<b>Step 11</b> Take out petri dish from desiccator and record the weight')
    }
}
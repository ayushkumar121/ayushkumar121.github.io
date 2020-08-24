var R4 = 31.1
document.querySelector('#R4').innerHTML = `${R4.toFixed(1)}`

function placeDish4() {
    if (!task_done) {
        var obj = {i:0}

        var anim = gsap.timeline()
        anim
            .to('#step-14 .petri-dish .small', { opacity: 0 })
            .to('#step-14 .petri-dish', {duration: 1, y: -100 })
            .to('#step-14 .petri-dish', {duration: 1, x: -180, y: -70 })
            .to(obj, {i:R3, onUpdate: () => {
                document.querySelector('#step-14 .reading-indicator').innerHTML = `${obj.i.toFixed(1)} gm`
            }})

        document.querySelector('#nextbutton').innerHTML = 'Observations'

        task_done = true
        addTask('<b>Step 13</b> Take out petri dish from desiccator and record the weight')
    }
}
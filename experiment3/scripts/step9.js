function placeInOven1() {
    if(!task_done) {
        var anim = gsap.timeline()
        anim
        .to('#step-9 .petri-dish .small', { opacity: 0 })
        .to('#step-9 .petri-dish', {duration: 1, y: -150})
        .to('#step-9 .petri-dish', {duration: 1, x: -300, onComplete: () => {
            document.querySelector('#step-9').style.background  = `url('./assets/step5/closed oven.png')`
            document.querySelector('#step-9 .petri-dish').style.display = 'none'

            task_done = true
            addTask('<b>Step 8</b> Place sample Petri dish in oven once more')
        }})
    }
}
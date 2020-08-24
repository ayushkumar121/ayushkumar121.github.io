function placeInOven() {
    if(!task_done) {
        var anim = gsap.timeline()
        anim
        .to('#step-6 .petri-dish .small', { opacity: 0 })
        .to('#step-6 .petri-dish', {duration: 1, y: -150})
        .to('#step-6 .petri-dish', {duration: 1, x: -300, onComplete: () => {
            document.querySelector('#step-6').style.background  = `url('./assets/step5/closed oven.png')`
            document.querySelector('#step-6 .petri-dish').style.display = 'none'

            task_done = true
            addTask('<b>Step 6</b> Place sample Petri dish in oven once present temperature reaches 105°')
        }})
    }
}
function placeInOven2() {
    if(!task_done) {
        var anim = gsap.timeline()
        anim
        .to('#step-11 .petri-dish .small', { opacity: 0 })
        .to('#step-11 .petri-dish', {duration: 1, y: -150})
        .to('#step-11 .petri-dish', {duration: 1, x: -300, onComplete: () => {
            document.querySelector('#step-11 .oven-image').src = './assets/step5/hot air oven.png'
            document.querySelector('#step-11 .petri-dish').style.display = 'none'

            task_done = true
            addTask('<b>Step 11</b> Place sample Petri dish in oven once more')
        }})
    }
}
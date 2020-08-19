var flaskPlacedOnBurner = false

function placeFlaskOnBurner() {
    if (!flaskPlacedOnBurner) {
        gsap.to('#step-4-flask small', { opacity: 0 })

        var anim = gsap.timeline()
        anim
        .to('#step-4-flask', {duration: 1, x: -160, y: -60})
        .to('#step-4-flask', {duration: 1, y: -40, onComplete: () => {
            task_done = true
            addTask('<b>Step 4</b> Heat the mixture upto boiling condition')
        }})
    }
}
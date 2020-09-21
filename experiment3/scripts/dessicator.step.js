function descitorPlace(selector) {
    var tl = gsap.timeline()

    if(!task_done) {
        tl
            .to(`${selector} .petri-dish .small`, {opacity: 0})
            .to(`${selector} .petri-dish`, { duration: 1, y: -200})
            .to(`${selector} .petri-dish`, { duration: 1, x: -150})
            .to(`${selector} .petri-dish`, { duration: 1, y: -100})
            .to(`${selector} .lid-dessicator`, {duration: 1, y: -200})
            .to(`${selector} .lid-dessicator`, {duration: 1, x: 200})
            .to(`${selector} .lid-dessicator`, {duration: 1, y: -100, onComplete: () => {
                task_done = true
                addTask('Place Sample Petri dish in descicator')
            }})
    }
}
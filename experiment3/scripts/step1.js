function turnON() {
    if (!task_done) {
        gsap.to('#step-1 .reading-indicator', { opacity: 1 })
        gsap.to('.onbutton', {background: 'yellowgreen'})

        task_done = true
        addTask('<b>Step 1</b> Press ‘On’ button of the analytical balance')
    }
}
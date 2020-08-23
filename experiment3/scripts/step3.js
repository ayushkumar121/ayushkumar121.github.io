function tare() {
    if (!task_done) {
        document.querySelector('#step-3 .reading-indicator').innerHTML = '0.0 gm'

        task_done = true
        addTask('<b>Step 3</b> Press ‘Tare’ button of the analytical balance to make it zero')
    }
}
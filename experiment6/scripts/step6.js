let lottie6 = bodymovin.loadAnimation({
    container: document.querySelector('#step-6 .bodymovinanim'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets8.lottiefiles.com/packages/lf20_ff8g8V.json'
})

var selectedSample = null

function selectSample(id) {
    if (selectedSample == null) {
        selectedSample = id
        task_done = true

        gsap.to('#step-6 .controls', { opacity: 0 })

        addTask('Step6: Selection of sample')
    }
}
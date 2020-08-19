var sampleImages = [
    './assets/Fresh Oil.png',
    './assets/1passoil.png',
    './assets/2passoil.png',
    './assets/3passoil.png',
]

var selectedSample = null

function selectSample(sender, id) {
    if (selectedSample == null) {
        selectedSample = id
        task_done = true

        gsap.to('.step1-tools .tooltiptext', { opacity: 0 })
        gsap.to(sender, {
            duration: 1, y: -100, ease: Back.easeOut.config(1.7)
        })

        document.querySelector('#sampleimage').src = sampleImages[id]

        addTask('<b>Step 1</b> Sample selection')
    }
}
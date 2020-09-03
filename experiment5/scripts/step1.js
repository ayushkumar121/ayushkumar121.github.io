var sampleImages = [
    './assets/step1/borewellAsset 2.svg',
    './assets/step1/muncipalAsset 3.svg',
    './assets/step1/treatedAsset 4.svg'
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

        addTask('step 1')
    }
}
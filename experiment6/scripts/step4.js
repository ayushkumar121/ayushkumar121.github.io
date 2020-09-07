var step6Lottie = [
    'https://assets8.lottiefiles.com/packages/lf20_YJ2hxB.json',
    'https://assets4.lottiefiles.com/packages/lf20_JDNyqs.json',
    'https://assets2.lottiefiles.com/packages/lf20_x8yRdY.json'
]

var step7Lottie = [
    'https://assets8.lottiefiles.com/packages/lf20_vLRsnZ.json',
    'https://assets10.lottiefiles.com/packages/lf20_v4FAsE.json',
    'https://assets6.lottiefiles.com/packages/lf20_2qAo3E.json'
]

var selectedSample = null
var lottie6 = null
var lottie7 = null

function selectSample(sender, id) {
    if (selectedSample == null) {
        selectedSample = id
        task_done = true

        gsap.to('.step1-tools .tooltiptext', { opacity: 0 })
        gsap.to(sender, {
            duration: 1, y: -100, ease: Back.easeOut.config(1.7)
        })

        lottie6 = bodymovin.loadAnimation({
            container: document.querySelector('#step-6 .bodymovinanim'),
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: step6Lottie[selectedSample]
        })

        lottie7 = bodymovin.loadAnimation({
            container: document.querySelector('#step-7 .bodymovinanim'),
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: step7Lottie[selectedSample]
        })

        addTask('step 4')
    }
}
var sampleName = [
    'Borewell Water',
    'Muncipal Water',
    'Treated Water'
]

var step2 = [
    'https://assets2.lottiefiles.com/packages/lf20_IensYt.json',
    'https://assets2.lottiefiles.com/packages/lf20_Txlgtb.json',
    'https://assets4.lottiefiles.com/packages/lf20_elWMfJ.json'
]

var step3 = [
    'https://assets3.lottiefiles.com/packages/lf20_UP5gu1.json',
    'https://assets8.lottiefiles.com/packages/lf20_mhpcKG.json',
    'https://assets6.lottiefiles.com/packages/lf20_6PBsA1.json'
]

var step4 = [
    'https://assets1.lottiefiles.com/packages/lf20_Wh8078.json',
    'https://assets1.lottiefiles.com/packages/lf20_MbHkuH.json',
    'https://assets1.lottiefiles.com/packages/lf20_pschU2.json'
]

var step5 = [
    'https://assets6.lottiefiles.com/packages/lf20_8rVsux.json',
    'https://assets1.lottiefiles.com/packages/lf20_SD53lh.json',
    'https://assets3.lottiefiles.com/packages/lf20_nUmgSD.json'
]

var selectedSample = null

var lottie2 = null
var lottie3 = null
var lottie4 = null
var lottie5 = null

function selectSample(sender, id) {
    if (selectedSample == null) {
        selectedSample = id
        task_done = true

        gsap.to('.step1-tools .tooltiptext', { opacity: 0 })
        gsap.to(sender, {
            duration: 1, y: -100, ease: Back.easeOut.config(1.7)
        })

        lottie2 = bodymovin.loadAnimation({
            container: document.querySelector('#step-2 .bodymovinanim'),
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: step2[selectedSample]
        })
        lottie2.setSpeed(.75)

        lottie3 = bodymovin.loadAnimation({
            container: document.querySelector('#step-3 .bodymovinanim'),
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: step3[selectedSample]
        })
        lottie3.setSpeed(.75)

        lottie4 = bodymovin.loadAnimation({
            container: document.querySelector('#step-4 .bodymovinanim'),
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: step4[selectedSample]
        })
        lottie4.setSpeed(.75)

        lottie5 = bodymovin.loadAnimation({
            container: document.querySelector('#step-5 .bodymovinanim'),
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: step5[selectedSample]
        })
        lottie5.setSpeed(.75)

       // document.querySelector('#step-5 .sample-name').innerHTML = `${sampleName[selectedSample]}`
       document.querySelector('#step-6 .read-3').innerHTML = `${sampleName[selectedSample]}`

        addTask('step2 : Select the water sample')
    }
}
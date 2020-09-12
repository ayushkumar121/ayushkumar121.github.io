let lottie6 = bodymovin.loadAnimation({
    container: document.querySelector('#step-6 .bodymovinanim'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets8.lottiefiles.com/packages/lf20_ff8g8V.json'
})

var selectedSample = null

var lottie7 = null
var lottie8 = null
var lottie9 = null

function selectSample(id) {
    if (selectedSample == null) {
        selectedSample = id
        task_done = true

        gsap.to('#step-6 .controls', { opacity: 0 })

        var exp7 = [
            'https://assets2.lottiefiles.com/packages/lf20_OMWnNx.json', // apple
            'https://assets1.lottiefiles.com/packages/lf20_350dJ7.json', // Mosambi
            'https://assets7.lottiefiles.com/packages/lf20_DHD8Ph.json', // Lemon
            'https://assets2.lottiefiles.com/packages/lf20_pzf4Ct.json'  // Amla
        ]

        var exp8 = [
            'https://assets9.lottiefiles.com/packages/lf20_fe0XUs.json', // Apple
            'https://assets6.lottiefiles.com/packages/lf20_1CDiBz.json', // Mosambi
            'https://assets2.lottiefiles.com/packages/lf20_v7qiis.json', // Lemon
            'https://assets4.lottiefiles.com/packages/lf20_DTn4i9.json'  // Amla
        ]

        var exp9 = [
            'https://assets6.lottiefiles.com/packages/lf20_1UANSb.json', // Apple
            'https://assets2.lottiefiles.com/packages/lf20_WLNZ7q.json', // Mosambi
            'https://assets3.lottiefiles.com/packages/lf20_gPAHSo.json', // Lemon
            'https://assets7.lottiefiles.com/packages/lf20_8EsV8T.json'  // Amla
        ]
        
        
        lottie7 = bodymovin.loadAnimation({
            container: document.querySelector('#step-7 .bodymovinanim'),
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: exp7[selectedSample]
        })
        lottie7.setSpeed(2)

        lottie8 = bodymovin.loadAnimation({
            container: document.querySelector('#step-8 .bodymovinanim'),
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: exp8[selectedSample]
        })

        lottie9 = bodymovin.loadAnimation({
            container: document.querySelector('#step-9 .bodymovinanim'),
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: exp9[selectedSample]
        })
        
        addTask('Step6: Selection of sample')
    }
}
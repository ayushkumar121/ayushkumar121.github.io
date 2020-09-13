var selectedSample = null

var lottie7 = null
var lottie8 = null
var lottie9 = null
var lottie10 = null

function selectSample(className, id) {
    if (selectedSample == null) {
        selectedSample = id
        task_done = true

        list = ['.sample-1', '.sample-2', '.sample-3', '.sample-4']
        var selectedFlasks = []

        list.forEach(sample => {
            if(className !=  sample)
                selectedFlasks.push(sample) 
        });

        gsap.to(selectedFlasks.join(', '), { opacity: 0 })
        gsap.to('.tooltiptext', { opacity: 0 })

        var exp7 = [
            'https://assets5.lottiefiles.com/packages/lf20_RFyEsH.json', // apple
            'https://assets7.lottiefiles.com/packages/lf20_ycmWNg.json', // Mosambi
            'https://assets6.lottiefiles.com/packages/lf20_hFARos.json', // Lemon
            'https://assets3.lottiefiles.com/packages/lf20_lGyVuN.json'  // Amla
        ]

        var exp8 = [
            'https://assets10.lottiefiles.com/packages/lf20_PexXcT.json', // Apple
            'https://assets6.lottiefiles.com/packages/lf20_Tx03Ab.json', // Mosambi
            'https://assets5.lottiefiles.com/packages/lf20_QI7kUe.json', // Lemon
            'https://assets4.lottiefiles.com/packages/lf20_9aSGgN.json'  // Amla
        ]

        var exp9 = [
            'https://assets8.lottiefiles.com/packages/lf20_c5aLoW.json', // Apple
            'https://assets5.lottiefiles.com/packages/lf20_VL2DyZ.json', // Mosambi
            'https://assets1.lottiefiles.com/packages/lf20_3Q8hF8.json', // Lemon
            'https://assets7.lottiefiles.com/packages/lf20_fwEGL2.json'  // Amla
        ]

        var exp10 = [
            'https://assets3.lottiefiles.com/packages/lf20_GfMq0E.json', // Apple
            'https://assets2.lottiefiles.com/packages/lf20_NBsHSS.json', // Mosambi
            'https://assets1.lottiefiles.com/packages/lf20_1OK8XB.json', // Lemon
            'https://assets9.lottiefiles.com/packages/lf20_vsv9q5.json'  // Amla
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

        lottie10 = bodymovin.loadAnimation({
            container: document.querySelector('#step-10 .bodymovinanim'),
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: exp10[selectedSample]
        })
        
        lottie10.setSpeed(1.5)
        
        addTask('Step6: Selection of sample')
    }
}
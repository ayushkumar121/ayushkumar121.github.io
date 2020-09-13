var selectedSample = null

var lottie7 = null
var lottie8 = null
var lottie9 = null
var lottie10 = null
var lottie11 = null
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
            'https://assets4.lottiefiles.com/packages/lf20_MTAoxG.json', // Apple
            'https://assets2.lottiefiles.com/packages/lf20_G7bDYX.json', // Mosambi
            'https://assets4.lottiefiles.com/packages/lf20_RCugRH.json', // Lemon
            'https://assets1.lottiefiles.com/packages/lf20_d7ayV8.json'  // Amla
        ]

        var exp9 = [
            'https://assets10.lottiefiles.com/packages/lf20_jdNRfv.json', // Apple
            'https://assets2.lottiefiles.com/packages/lf20_UHUsvv.json', // Mosambi
            'https://assets8.lottiefiles.com/packages/lf20_C2ERxf.json', // Lemon
            'https://assets3.lottiefiles.com/packages/lf20_IHXjW0.json'  // Amla
        ]

        var exp10 = [
            'https://assets5.lottiefiles.com/packages/lf20_nt7eON.json', // Apple
            'https://assets5.lottiefiles.com/packages/lf20_hURgiW.json', // Mosambi
            'https://assets8.lottiefiles.com/packages/lf20_BTJOeL.json', // Lemon
            'https://assets3.lottiefiles.com/packages/lf20_vCwc6p.json'  // Amla
        ]

        var exp11 = [
            'https://assets8.lottiefiles.com/packages/lf20_rWokBD.json',
            'https://assets10.lottiefiles.com/packages/lf20_wJIzm4.json',
            'https://assets8.lottiefiles.com/packages/lf20_XZILwo.json',
            ''
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

        lottie11 = bodymovin.loadAnimation({
            container: document.querySelector('#step-11 .bodymovinanim'),
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: exp11[selectedSample]
        })
         
        addTask('Step6: Selection of sample')
    }
}
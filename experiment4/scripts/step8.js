let beakerAnimation_8 = bodymovin.loadAnimation({
    container: document.querySelector('#step-8 .bodymovinanim_8'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets7.lottiefiles.com/packages/lf20_sAWGMs.json'
});

var machineon = false
var machineset = false
var lambda = 280

var part81done = false
var read1done = false

function turnOnMachine() {
    beep.play()

    gsap.to('#step-8 .readings, #step-8 .control-1', {
        opacity: 1, onComplete: () => {
            machineon = true
        }
    })
}

function menu() {
    if (machineon) {
        beep.play()

        document.querySelector('#step-8 .read-1').style.fontWeight = '600'
    }
}

function read() {
    if (machineon) {
        beep.play()

        if (machineset) {
            if(!read1done) {
                document.querySelector('#step-8 .read-2').innerHTML = `Abs=0.1275`
                read1done = true
            } else{
                document.querySelector('#step-8 .read-2').innerHTML = `Abs=0.7312`
            }
        }
    }
}

function inc() {
    if (machineon) {
        beep.play()

        if (!machineset) {
            if (lambda >= 280 && lambda < 750) {
                lambda++
            }

            document.querySelector('#step-8 .read-1').innerHTML = `λ=${lambda}`
        }
    }
}

function dec() {
    if (machineon) {
        beep.play()

        if (!machineset) {
            if (lambda > 280 && lambda <= 750) {
                lambda--
            }

            document.querySelector('#step-8 .read-1').innerHTML = `λ=${lambda}`
        }
    }
}

function step8() {
    if (machineon) {
        if (!part81done) {
            machineset = true
            beakerAnimation_8.playSegments([0, 320], true)
            gsap.to('#step-8 .control-1', { opacity: 0 })
            gsap.to('#step-8 .control-2', { delay: "11", opacity: 1 })
        } 
        else {
            beakerAnimation_8.playSegments([500, 850], true)
            var tl = gsap.timeline()
            tl
                .to('#step-8 .control-1', { opacity: 0 })
                .to('#step-8 .control-1', {
                    delay: "+17", onComplete: () => {
                        task_done = true
                        addTask('Step8: Measure absorbance of sample in spectrophotometer at 420 nm')
                    }
                })
        }
    }
}

function closeLidFunc() {
    if (machineon && !part81done) {
        beakerAnimation_8.playSegments([320, 450], true)

        document.querySelector('#step-8 .control-1 small').innerHTML = 'replace cubit'

        var tl = gsap.timeline()
        tl
            .to('#step-8 .control-2', { opacity: 0 })
            .to('#step-8 .control-1', {
                delay: "4",
                opacity: 1,
                onComplete: () => {
                    part81done = true
                }
            })

    }
}


/*
var part81done = false
var lidOpen = false

function lidOpenFunc(sender) {
    if(!lidOpen) {
        sender.style.background = "green"
        beakerAnimation_8.playSegments([0, 100], true)
        gsap.to('#step-8 .controlCentrifuge', {delay: "2", opacity: 1})
        lidOpen = true
    }
}

function closeLidFunc() {
    if(lidOpen && !part81done) {
        beakerAnimation_8.playSegments([320, 450], true)

        var tl = gsap.timeline()
        tl
        .to('#step-8 .closeLid', { opacity: 0})
        .to('#step-8 .controlCentrifuge', {
            delay: "5",
            opacity:1,
            onComplete: () => {
                part81done = true
            }
        })

    }
}


function step8() {
    if (lidOpen) {
        if (!part81done) {
            beakerAnimation_8.playSegments([100, 320], true)
            gsap.to('#step-8 .controlCentrifuge', { opacity: 0})
            gsap.to('#step-8 .closeLid', { delay: "6", opacity: 1})

        } else {
            beakerAnimation_8.playSegments([500, 850], true)
            var tl = gsap.timeline()
            tl
                .to('#step-8 .controlCentrifuge', { opacity: 0})
                .to('#step-8 .controlCentrifuge', {
                    delay: "+17", onComplete: () => {
                        task_done = true
                    }
                })
        }
    }
}
*/
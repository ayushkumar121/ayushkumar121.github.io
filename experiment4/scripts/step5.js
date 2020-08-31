let beakerAnimation_5 = bodymovin.loadAnimation({
    container: document.querySelector('#step-5 .bodymovinanim_5'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets4.lottiefiles.com/packages/lf20_9caEPE.json'
});

var animateSegment1 = 1
var rpmVal = 100
var timVal = 1
var rpmLocked = false
var timLocked = false

function animateSegment() {
    if (!task_done) {
        if (animateSegment1 == 1) {
            beakerAnimation_5.playSegments([0, 70], true)
            document.querySelector('#step-5 .controlCentrifuge small').innerHTML = 'Place Juice'
            animateSegment1++
        }

        else if (animateSegment1 == 2) {
            beakerAnimation_5.playSegments([70, 250], true)
            document.querySelector('#step-5 .controlCentrifuge small').innerHTML = 'Place Water'
            animateSegment1++
        }

        else if (animateSegment1 == 3) {
            beakerAnimation_5.playSegments([250, 390], true)
            document.querySelector('#step-5 .controlCentrifuge small').innerHTML = 'Close Lid'
            animateSegment1++
        }

        else if (animateSegment1 == 4) {
            beakerAnimation_5.playSegments([390, 470], true)
            gsap.to('#step-5 .controlCentrifuge', { opacity: 0, delay: "+3", })
            gsap.to('#step-5 .rmpVal', { opacity: 1 })
            gsap.to('#step-5 .timVal', { opacity: 1 })
            animateSegment1++
        }

        else if (animateSegment1 == 6) {
            beakerAnimation_5.playSegments([470, 520], true)
            document.querySelector('#step-5 .controlCentrifuge small').innerHTML = 'Remove Juice'
            animateSegment1++
        }

        else if (animateSegment1 == 7) {
            beakerAnimation_5.playSegments([520, 620], true)
            document.querySelector('#step-5 .controlCentrifuge small').innerHTML = 'Remove Water'
            animateSegment1++
        }

        else if (animateSegment1 == 8) {
            beakerAnimation_5.playSegments([620, 760], true)
            gsap.to('#step-5 .controlCentrifuge', { opacity: 0 })

            task_done = true
            addTask('Centrifuge of juice for 10 min at 5000rpm')
        }
    }
}

function MEN() {
    if (animateSegment1 == 5) {

    }
}

function SET() {
    if (animateSegment1 == 5) {
        if (!rpmLocked)
            rpmLocked = true
        else {
            timLocked = true
            animateSegment1++
            gsap.to('#step-5 .controlCentrifuge', { opacity: 1 })
            document.querySelector('#step-5 .controlCentrifuge small').innerHTML = 'Open Lid'
        }
    }
}

function ADD() {
    if (animateSegment1 == 5) {
        if (!rpmLocked)
            rpmVal += 100
        else if (!timLocked)
            timVal += 1

        document.querySelector('#step-5 .rmpVal').innerHTML = `RPM ${rpmVal}`
        document.querySelector('#step-5 .timVal').innerHTML = `TIM ${timVal}`
    }
}

function SUB() {
    if (animateSegment1 == 5) {
        if (!rpmLocked)
            rpmVal -= 100
        else if (!timLocked)
            timVal -= 1

        document.querySelector('#step-5 .rmpVal').innerHTML = `RPM ${rpmVal}`
        document.querySelector('#step-5 .timVal').innerHTML = `TIM ${timVal}`
    }
}
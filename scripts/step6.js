var titrationStarted = false

var prefferedReading = [
    0.1,
    0.5,
    1.3,
    2.2
]

var readingTitration = 0.0
var handle = null

function pourSolution() {
    if(!titrationStarted) {
        gsap.to('#thio-sulphate small', { duration: 1, opacity: 0})

        var anim = gsap.timeline()
        
        anim
        .to('#thio-sulphate', { duration: 2, y: -270 })
        .to('#thio-sulphate', { duration: 1, x: -70 })
        .to('#thio-sulphate', { duration: 1, rotation: -30 })
        .to('#thio-sulphate', { duration: 1, rotation: 0 })
        .to('#thio-sulphate', { duration: 1, x: 0 })
        .to('#thio-sulphate', { duration: 1, y: 0})
        .to('#step-6 button', { duration: 1, opacity: 1, onComplete: () => {
            titrationStarted = true
        }})
    }
}

function openKnob() {
    if (titrationStarted) {
        if (handle == null) {
            handle = setInterval(() => {
                if (readingTitration < 50.0) {
                    readingTitration += 0.1
                    document.querySelector('#readingSlider').style.width = `${100 - readingTitration * 2}%`

                    var text = ''
                    if (Math.abs(prefferedReading[selectedSample] - readingTitration) <= 0.2) {
                        text += '(Titration Complete) '
                    }

                    text += `${readingTitration.toPrecision(2)} ml`

                    document.querySelector('#readingText').innerHTML = text
                    console.log(prefferedReading[selectedSample], readingTitration)
                }
            }, 1000);
        }
    }
}

function closeKnob() {
    if (titrationStarted) {
        if (handle != null) {
            clearInterval(handle);

            if (Math.abs(prefferedReading[selectedSample] - readingTitration) <= 0.2) {
                task_done = true

                document.querySelector('#observationReading').innerHTML = `${readingTitration.toPrecision(2)} ml`

                var result = (readingTitration.toPrecision(2) * 0.0282 * 10) / 2

                document.querySelector('#result').innerHTML = `<b>Result : ${result.toPrecision(4)}</b>`

                addTask('<b>Step 6</b> Titrate the mixture with 0.1 N sodium thio-sulphate solution until yellow color is almost gone')
               // addTask('🎉 Experiment Complete 🎉')
            }
        }
    }
}
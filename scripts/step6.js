var prefferedReading = [
    0.1,
    0.5,
    1.3,
    2.2
]

var readingTitration = 0.0
var handle = null

function openKnob() {
    if (handle == null) {
        handle = setInterval(() => {
            if (readingTitration < 50.0) {
                readingTitration += 0.1
                document.querySelector('#readingSlider').style.width = `${100 - readingTitration*2}%`
                
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

function closeKnob() {
    if (handle != null) {
        clearInterval(handle);

        if (Math.abs(prefferedReading[selectedSample] - readingTitration) <= 0.2) {
            task_done = true
            
            document.querySelector('#observationReading').innerHTML = `${readingTitration.toPrecision(2)} ml`

            var result = ( readingTitration.toPrecision(2) * 0.0282 * 10 ) / 2

            document.querySelector('#result').innerHTML = `<b>Result : ${result.toPrecision(4)}</b>`

            addTask('<b>Step 6</b>Titrate the mixture with 0.1 N NaOH Solution')
            addTask('🎉 Experiment Complete 🎉')
        }
    }
}
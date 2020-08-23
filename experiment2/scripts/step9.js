var readingTitration1 = 0.0
var handle1 = null

var currentFrame1 = 16

var S2 = 0

function openKnob1() {
    if (handle1 == null && !buretteFilled) {
        handle1 = setInterval(() => {
            if (readingTitration1 < 50.0) {
                readingTitration1 += 0.1
                document.querySelector('#readingSlider1').style.width = `${100 - readingTitration1 * 5}%`

                var drop = document.createElement("img")
                drop.src = './assets/drop.png'
                drop.classList.add('element', 'drop-step-6')
                drop.style.zIndex = 5

                document.querySelector('#step-9 .instruments').appendChild(drop)

                gsap.to(drop, { y: 50, opacity: 0, ease: Sine.easeIn })

                var text = ''
                if (Math.abs(prefferedReading[selectedSample] - readingTitration1) <= 0.2) {
                    text += '(Titration Complete) '

                    document.querySelector('#step-9-flask').src = `./assets/white flask.png`
                }

                if (currentFrame1 > 0) {
                    currentFrame1--

                    document.querySelector('#burettestep6').src = `./assets/burette/ff${currentFrame1}.png`
                }

                text += `${readingTitration1.toPrecision(2)} ml`

                document.querySelector('#readingText1').innerHTML = text
                console.log(prefferedReading[selectedSample], readingTitration1)
            }
        }, 2000);
    }
}

function closeKnob1() {
    if (handle1 != null) {
        clearInterval(handle1);
        handle1 = null

        if (Math.abs(prefferedReading[selectedSample] - readingTitration1) <= 0.2 && !task_done) {
            document.querySelector('#nextbutton').innerHTML = 'Observations'
            task_done = true

            var S2 = readingTitration1

            document.querySelector('#observationReading').innerHTML = `${(S1+S2).toPrecision(2)} ml`

            var peroxide = ((S1 + S2) * .1 * 1000) / 5

            document.querySelector('#result').innerHTML = `<b>Result : ${peroxide.toPrecision(4)}</b>`

            addTask('<b>Step 8</b> Titrate the mixture with 0.1 N sodium thio-sulphate solution until yellow color is almost gone.')
            addTask('🎉 Experiment Complete 🎉')
        }
    }
}
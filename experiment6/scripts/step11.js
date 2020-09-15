var currentSegment11 = 1;

var j1results = [0.40, 4.3, 1.7, 69]
var j2results = [0.36, 4.1, 1.6, 66]
var j3results = [0.32, 3.8, 1.4, 62]
var j4results = [0.24, 3.6, 1.2, 56]

var dropScale = [0.02, 0.4, 0.17, 6]

var currentValue11 = 0
var handle = null


var canTitrate = false

// Remove these in final build
//task_done = false
//var selectedSample = 0
//var dyeFactor = 0.08

function platySegments11() {
    if (!task_done) {
        if (currentSegment11 == 1) {
            lottie11.playSegments([0, 118], true)

            gsap.to('#step-11 .control-1', { opacity: 0 })
            gsap.to('#step-11 .control-2', {
                delay: 5, opacity: 1, onComplete: () => {
                    currentSegment11++
                }
            })
        }
        else if (currentSegment11 == 2) {
            lottie11.playSegments([118, 366], true)

            gsap.to('#step-11 .control-2', { opacity: 0 })
            gsap.to('#step-11 .control-3', {
                delay: 5, opacity: 1, onComplete: () => {
                    currentSegment11++
                }
            })
        }
        else if (currentSegment11 == 3) {
            lottie11.playSegments([366, 429], true)

            gsap.to('#step-11 .control-3', { opacity: 0 })
            gsap.to('#step-11 .control-4', {
                delay: 3, opacity: 1, onComplete: () => {
                    currentSegment11++
                }
            })
        }
        // J1
        else if (currentSegment11 == 4) {
            lottie11.playSegments([429, 520], true)

            gsap.to('#step-11 .control-4', { opacity: 0 })
            gsap.to('#step-11 .control-111, #step-11 .control-112', {
                delay: 3, opacity: 1, onComplete: () => {
                    canTitrate = true
                }
            })
        }
        // J2
        else if (currentSegment11 == 5) {
            lottie11.playSegments([1114, 1220], true)

            gsap.to('#step-11 .control-5', { opacity: 0 })
            gsap.to('#step-11 .control-111, #step-11 .control-112', {
                delay: 3, opacity: 1, onComplete: () => {
                    canTitrate = true
                }
            })
        }
        // J3
        else if (currentSegment11 == 6) {
            lottie11.playSegments([1730, 1820], true)

            gsap.to('#step-11 .control-6', { opacity: 0 })
            gsap.to('#step-11 .control-111, #step-11 .control-112', {
                delay: 3, opacity: 1, onComplete: () => {
                    canTitrate = true
                }
            })
        }
        // J4
        else if (currentSegment11 == 7) {
            lottie11.playSegments([2330, 2399], true)

            gsap.to('#step-11 .control-7', { opacity: 0 })
            gsap.to('#step-11 .control-111, #step-11 .control-112', {
                delay: 3, opacity: 1, onComplete: () => {
                    canTitrate = true
                }
            })
        }
    }
}

function startTitration2() {
    if (canTitrate) {
        if (currentSegment11 == 4) {
            lottie11.playSegments([520, 1093], true)
        } else if (currentSegment11 == 5) {
            lottie11.playSegments([1220, 1730], true)
        } else if (currentSegment11 == 6) {
            lottie11.playSegments([1815, 2330], true)
        } else if (currentSegment11 == 7) {
            lottie11.playSegments([2399, 2766], true)
        }

        handle = setInterval(() => {
            currentValue11 += dropScale[selectedSample]

            var diff = 0

            if (currentSegment11 == 4) {
                diff = currentValue11 - j1results[selectedSample]
            } else if (currentSegment11 == 5) {
                diff = currentValue11 - j2results[selectedSample]
            } else if (currentSegment11 == 6) {
                diff = currentValue11 - j3results[selectedSample]
            } else if (currentSegment11 == 7) {
                diff = currentValue11 - j4results[selectedSample]
            }

            if (Math.abs(diff) <= dropScale[selectedSample] * 2) {
                gsap.to('.titration-status-1', { opacity: 1 })
            } else if ((diff) > dropScale[selectedSample] * 2) {
                gsap.to('.titration-status-1', { background: '#F44336' })
                document.querySelector('.titration-status-1 h1').innerHTML = 'Over Titrated'
                stopTitration2()

                gsap.to('#controls-2', { display: 'block' })
                document.querySelector('.back-button').onclick = () => {
                    window.location.reload()
                    gsap.to('#controls-2', { display: 'none' })
                }
            }

            if (currentSegment11 == 4) {
                document.querySelector('#step-11 .read-1').innerHTML = `${currentValue11.toFixed(2)} ml`
            } else if (currentSegment11 == 5) {
                document.querySelector('#step-11 .read-2').innerHTML = `${currentValue11.toFixed(2)} ml`
            } else if (currentSegment11 == 6) {
                document.querySelector('#step-11 .read-3').innerHTML = `${currentValue11.toFixed(2)} ml`
            }  else if (currentSegment11 == 7) {
                document.querySelector('#step-11 .read-4').innerHTML = `${currentValue11.toFixed(2)} ml`
            }
        }, 1000);
    }
}

function stopTitration2() {
    if (canTitrate) {

        titrating = false
        clearInterval(handle)

        var diff = 0

        if (currentSegment11 == 4) {
            diff = currentValue11 - j1results[selectedSample]
        } else if (currentSegment11 == 5) {
            diff = currentValue11 - j2results[selectedSample]
        } else if (currentSegment11 == 6) {
            diff = currentValue11 - j3results[selectedSample]
        }  else if (currentSegment11 == 7) {
            diff = currentValue11 - j4results[selectedSample]
        }

        if (Math.abs(diff) <= dropScale[selectedSample] * 2) {
            gsap.to('#step-11 .control-111, #step-11 .control-112', { opacity: 0 })
            gsap.to('.titration-status-1', { opacity: 0 })

            if (currentSegment11 == 4) {
                gsap.to('#step-11 .control-5', { opacity: 1 })
                document.querySelector('.result-observation-j1').innerHTML = `${j1results[selectedSample].toFixed(2)} ml`
                document.querySelector('.result-final-j1').innerHTML = `J1:Ascorbic acid = ${(j1results[selectedSample] * dyeFactor * 100).toFixed(3)} mg/100mg`
            }

            if (currentSegment11 == 5) {
                gsap.to('#step-11 .control-6', { opacity: 1 })
                document.querySelector('.result-observation-j2').innerHTML = `${j2results[selectedSample].toFixed(2)} ml`
                document.querySelector('.result-final-j2').innerHTML = `J2:Ascorbic acid = ${(j2results[selectedSample] * dyeFactor * 100).toFixed(3)} mg/100mg`
            }

            if (currentSegment11 == 6) {
                gsap.to('#step-11 .control-7', { opacity: 1 })
                document.querySelector('.result-observation-j3').innerHTML = `${j3results[selectedSample].toFixed(2)} ml`
                document.querySelector('.result-final-j3').innerHTML = `J3:Ascorbic acid = ${(j3results[selectedSample] * dyeFactor * 100).toFixed(3)} mg/100mg`
            }

            if (currentSegment11 == 7) {
                lottie11.playSegments([2766, 2846], true)

                task_done = true
                addTask('Step11: Titrate each sample with DCPIP dye solution to a pink color which persists for 15s observation')

                document.querySelector('.result-observation-j4').innerHTML = `${j3results[selectedSample].toFixed(2)} ml`
                document.querySelector('.result-final-j4').innerHTML = `J4:Ascorbic acid = ${(j4results[selectedSample] * dyeFactor * 100).toFixed(3)} mg/100mg`
            }

            canTitrate = false
            currentSegment11++
            currentValue11 = 0
        }
    }
}

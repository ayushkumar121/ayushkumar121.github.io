lottie11 = bodymovin.loadAnimation({
    container: document.querySelector('#step-11 .bodymovinanim'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets8.lottiefiles.com/packages/lf20_rWokBD.json'
})

var currentSegment11 = 1;

var j1results = [0.40, 4.3, 1.7, 69]
var j2results = [0.36, 4.1, 1.6, 66]
var j3results = [0.32, 3.8, 1.4, 62]
var j4results = [0.24, 3.6, 1.2, 56]

function platySegments11() {
    if (!task_done) {
        if (currentSegment11 == 1) {
            lottie11.playSegments([0, 118], true)
            
            gsap.to('#step-11 .control-1', {opacity: 0})
            gsap.to('#step-11 .control-2', {delay: 5, opacity: 1, onComplete: () => {
                currentSegment11++
            }})
        }
        else if (currentSegment11 == 2) {
            lottie11.playSegments([118, 366], true)
            
            gsap.to('#step-11 .control-2', {opacity: 0})
            gsap.to('#step-11 .control-3', {delay: 5, opacity: 1, onComplete: () => {
                currentSegment11++
            }})
        }
        else if (currentSegment11 == 3) {
            lottie11.playSegments([810, 1290], true)
            
            gsap.to('#step-11 .control-3', {opacity: 0})
            gsap.to('#step-11 .control-4', {delay: 13, opacity: 1, onComplete: () => {
                currentSegment11++
                document.querySelector('#step-11 .read-2').innerHTML = '<b>12 ml</b>'
            }})
        }
        else if (currentSegment11 == 4) {
            lottie11.playSegments([1290, 1650], true)
            
            gsap.to('#step-11 .control-4', {opacity: 0})
            gsap.to('#step-11 .control-5', {delay: 13, opacity: 1, onComplete: () => {
                currentSegment11++
                document.querySelector('#step-11 .read-3').innerHTML = '<b>13 ml</b>'
            }})
        }
        else if (currentSegment11 == 5) {
            lottie11.playSegments([1580, 2200], true)
            
            gsap.to('#step-11 .control-5', {opacity: 0})
            gsap.to('#step-11 .control-5', {delay: 13, onComplete: () => {
                task_done = true
                document.querySelector('#step-11 .read-3').innerHTML = '<b>14 ml</b>'

                document.querySelector('.result-observation-j1').innerHTML = `${j1results[selectedSample]} ml`
                document.querySelector('.result-observation-j2').innerHTML = `${j2results[selectedSample]} ml`
                document.querySelector('.result-observation-j3').innerHTML = `${j3results[selectedSample]} ml`
                document.querySelector('.result-observation-j4').innerHTML = `${j4results[selectedSample]} ml`

                document.querySelector('.result-final-j1').innerHTML = `J1:Ascorbic acid = ${j1results[selectedSample] * dyeFactor * 100} mg/100mg`
                document.querySelector('.result-final-j2').innerHTML = `J2:Ascorbic acid = ${j2results[selectedSample] * dyeFactor * 100} mg/100mg`
                document.querySelector('.result-final-j3').innerHTML = `J3:Ascorbic acid = ${j3results[selectedSample] * dyeFactor * 100} mg/100mg`
                document.querySelector('.result-final-j4').innerHTML = `J4:Ascorbic acid = ${j4results[selectedSample] * dyeFactor * 100} mg/100mg`

                addTask('Step3: Add 5 ml of HPO<sub>3</sub> solution in the conical flask')
            }})
        }
    }
}


function startTitration2() {
    if(part41done && !titrating) {
        lottie4.playSegments([500, 4129], true)
        titrating = true
        handle = setInterval(() => {
            currentValue += 0.2

            if(Math.abs(currentValue - 6.0) <= 0.4) {
                gsap.to('.titration-status', {opacity: 1})
            } else if((currentValue - 6.0) > 0.4) {
                gsap.to('.titration-status', {background: '#F44336'})
                document.querySelector('.titration-status h1').innerHTML = 'Over Titrated'
                stopTitration()
            }

            document.querySelector('#step-4 .read-1').innerHTML = `<b>${currentValue.toFixed(1)} ml</b>`
        }, 1000);
    }
}

function stopTitration2() {
    if(part41done) {
        lottie4.pause()
        titrating = false
        clearInterval(handle)
        
        if(Math.abs(currentValue - 6.0) <= 0.4) {
            task_done = true
            dyeFactor = (0.5/currentValue).toFixed(2)
            
            document.querySelector('.result-1').innerHTML = `<b>${currentValue.toFixed(1)} ml</b>`
            document.querySelector('.result-11').innerHTML = ` = <b>${dyeFactor}</b>`

            addTask('Step4: Titrate the mixture with DCPIP dye solution')
        }
    }
}
let lottie11 = bodymovin.loadAnimation({
    container: document.querySelector('#step-11 .bodymovinanim'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets9.lottiefiles.com/packages/lf20_GZuAli.json'
})

var currentSegment11 = 1;

var j1results = [0.40, 4.3, 1.7, 69]
var j2results = [0.36, 4.1, 1.6, 66]
var j3results = [0.32, 3.8, 1.4, 62]
var j4results = [0.24, 3.6, 1.2, 56]


function platySegments11() {
    if (!task_done) {
        if (currentSegment11 == 1) {
            lottie11.playSegments([0, 425], true)
            
            gsap.to('#step-11 .control-1', {opacity: 0})
            gsap.to('#step-11 .control-2', {delay: 13, opacity: 1, onComplete: () => {
                currentSegment11++
            }})
        }
        else if (currentSegment11 == 2) {
            lottie11.playSegments([425, 810], true)
            
            gsap.to('#step-11 .control-2', {opacity: 0})
            gsap.to('#step-11 .control-3', {delay: 13, opacity: 1, onComplete: () => {
                currentSegment11++
                document.querySelector('#step-11 .read-1').innerHTML = '<b>11 ml</b>'
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
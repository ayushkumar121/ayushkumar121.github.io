var target = 0
var value = 0

function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

var machine_on = false

var handle = setInterval(() => {
    if(value < target){
        value ++
    }
    else if(value > target){
        value --
    }

    if(value == 105){
        task_done = true
        gsap.to('.question-2', {opacity: 1})

        addTask('<b>Step 5</b> press ‘On’ button of the convective hot air oven and set temperature to 105°')
        clearInterval(handle)
    }

    document.querySelector('#step-5 .read-2').innerHTML = `PT${pad(value, 3)}°C`
}, 400)

function turnOn() {
    machine_on = true
    gsap.to('#step-5 .reading-indicator', {opacity: 1})
}

function increaseTemp() {
    if(machine_on) {
        target++
        document.querySelector('#step-5 .read-1').innerHTML = `ST${pad(target, 3)}°C`
    }
}

function reduceTemp() {
    if(machine_on) {
        if(machine_on) {
            target--
            document.querySelector('#step-5 .read-1').innerHTML = `ST${pad(target, 3)}°C`
        }
    }
}

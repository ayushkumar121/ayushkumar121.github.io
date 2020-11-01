var R4 = 31.1
document.querySelector('#R4').innerHTML = `${R4.toFixed(1)}`

function placeDish4() {
    if (!task_done) {
        var obj = {i:0}

        var anim = gsap.timeline()
        anim
            .to('#step-14 .petri-dish .small', { opacity: 0 })
            .to('#step-14 .petri-dish', {duration: 1, y: -100 })
            .to('#step-14 .petri-dish', {duration: 1, x: -180, y: -70 })
            .to(obj, {i:R3, onUpdate: () => {
                document.querySelector('#step-14 .reading-indicator').innerHTML = `${obj.i.toFixed(1)} gm`
            }})

        document.querySelector('#nextbutton').innerHTML = 'Observations'

        gsap.to('.question-4', { opacity: 1 })
        
        addTask('<b>Step 17</b> Take out petri dish from desiccator and record the weight')
    }
}

var formulaToggled = false

function toggleformula() {
    formulaToggled = !formulaToggled

    if(formulaToggled)
        gsap.to('#forumla', {opacity: 1})
    else 
        gsap.to('#forumla', {opacity: 0})
}

function validateresult() {
    var val = document.querySelector('#result-user').value
    addTask('<b>Step 9</b> Calculation & Result')

    if(Math.abs(val - 78) < 5)
        document.querySelector('.result-status').innerHTML = '<span style="color:green; margin-right: 4px;">Correct Answer</span>'
    else 
        document.querySelector('.result-status').innerHTML = '<span style="color:red; margin-right: 4px;">Wrong Answer</span>'

    document.querySelector('.result-status').innerHTML += '<input type="button" style="border: 0;padding: 5px;font-weight: 600;font-size: 18px;  background-color: lightskyblue;" value="result" style="margin-left:10px;" onclick="showsteps()">'
}

function showsteps() {
    task_done = true
    gsap.to('.result-steps', {opacity: 1})

    gsap.to('.question-5', { opacity: 1 , delay: 2})
    gsap.to('.question-6', { opacity: 1 })

    document.querySelector('#nextbutton').innerHTML = 'Inference'
}
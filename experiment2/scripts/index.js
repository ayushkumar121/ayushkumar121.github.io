var curent_step = 0
var steps = document.querySelectorAll('.step')
var taskslist = document.querySelector('#taskslist')
var controls = document.querySelector('#controls')
var task_done = true

function next() {
    if (curent_step < steps.length - 1) {
        curent_step++
        task_done = false
    }
}

function addTask(task) {
    var taskli = document.createElement('li')
    taskli.innerHTML = task

    taskslist.appendChild(taskli)
}


setInterval(() => {
    for (let i = 0; i < steps.length; i++) {
        if (i == curent_step)
            steps[i].classList.add('active')
        else
            steps[i].classList.remove('active')
    }
    
    if (task_done)
        controls.classList.add('active')
    else
        controls.classList.remove('active')

}, 100)

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function openCity1(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.querySelectorAll("#step-7 .tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.querySelectorAll("#step-7 .tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("openDefaultsim").click();

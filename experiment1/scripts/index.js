var curent_step = 0
var steps = document.querySelectorAll('.step')
var taskslist = document.querySelector('#taskslist')
var controls = document.querySelector('#controls')
var task_done = false

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

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js').then(function (registration) {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function (err) {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}
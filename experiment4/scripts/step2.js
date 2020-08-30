let beakerAnimation_2 = bodymovin.loadAnimation({
    container: document.querySelector('#step-2 .bodymovinanim'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://gist.githubusercontent.com/ayushkumar121/2c5aa360bed3de1a8359cf5564e2605f/raw/39c02d0d5d865b7982a84176e4edf74b50c1c6a4/beaker_animation.json'
});


function filterJuice() {
    if (!task_done) {
        var tl = gsap.timeline()

        tl
        .to('#step-2 .filter small', {opacity: 0})
        .to('#step-2 .filter', {duration: 1, y: -170})
        .to('#step-2 .filter', {duration: 1, x: -175})
        .to('#step-2 .filter', {duration: 0.5, y: -110, onComplete: () => {
            beakerAnimation_2.play()
        }})
        .to('#step-2 .filtrate', {
            duration: 3.5,
            opacity: 1,
            onComplete: () => {
                task_done = true
                addTask('Filtration of Juice')
            }
        })
    }
}
function removeDish(id) {
    if (!task_done) {
        var anim = gsap.timeline()
        anim
            .to(`#${id} .small`, { opacity: 0 })
            .to(`#${id} .petri-dish`, {
                duration: 2,
                x: 300, y: 100, onComplete: () => {
                    task_done = true
                }
            })
    }
}
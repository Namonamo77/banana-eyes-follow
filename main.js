// let eyeball = ()=>{
//     let eyes = document.querySelectorAll(".eye")
//     eyes.forEach(eye =>{
//         let x = eye.getBoundingClientRect().left + eye.clientWidth / 2
//         let y = eye.getBoundingClientRect().top + eye.clientHeight / 2
//         let radian = Math.atan2(event.pageX -x, event.pageY -y)
//         let rotate = radian * (180 / Math.PI) * -1 + 270
//         eye.style.transform = `rotate(${rotate}deg)`
//     })
// }

// document.querySelector("body").addEventListener("mousemove", eyeball)

document.addEventListener("mousemove", e =>{
    let mousePosX = ((event.clientX * 2 - window.innerWidth) / window.innerWidth) * 18 + "%"
    let mousePosY = ((event.clientY * 2 - window.innerHeight) / window.innerHeight) * 12 + "%"
    gsap.to(".eye", {
        x: mousePosX,
        y: mousePosY,
        duration: 0.2
    })
})

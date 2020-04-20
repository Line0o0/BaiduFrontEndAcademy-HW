let button = document.getElementById('fade-btn'),
    obj = document.getElementById('fade-obj'),
    interID,
    flag = true,//opacity为1
    opa = 1
function handleBtn() {
    button.disabled = true
    interID = setInterval(fade, 10)
}
function fade() {
    if (flag) {
        opa -= 0.01
        obj.style.opacity = opa
    }
    else {
        opa += 0.01
        obj.style.opacity = opa
    }
    if (obj.style.opacity <= 0 || obj.style.opacity >= 1) {
        clearInterval(interID)
        flag = !flag
        button.innerText = flag ? "淡出" : "淡入"
        button.disabled = false
    }
}
button.addEventListener('click', handleBtn)
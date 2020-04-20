let button = document.getElementById('fade-btn')
let obj = document.getElementById('fade-obj')
let outID,
    inID,
    opa;
function handleBtn(e) {
    e = e || window.event
    if (button.innerText === "淡出") {
        button.disabled = true
        opa = 1
        outID = setInterval(fadeOut, 10)//fadeOut能用外层函数:handleBtn中的变量
        //但是为什么这里写let outID定义的话fadeOut就会拿不到outID的值？
    }
    else {
        opa = 0
        button.disabled = true
        inID = setInterval(fadeIn, 10)
    }
}

function fadeOut() {
    opa -= 0.01
    obj.style.opacity = opa
    if (obj.style.opacity <= 0) {
        clearInterval(outID)
        button.disabled = false
        button.innerText = "淡入"
    }
}

function fadeIn() {
    opa += 0.01
    obj.style.opacity = opa//这里写obj.style.opacity会一直停留在opacity=0.01 至今不知道原因是什么
    if (obj.style.opacity >= 1) {
        clearInterval(inID)
        button.disabled = false
        button.innerText = "淡出"
    }
}


button.addEventListener('click', function () {
    handleBtn()
})


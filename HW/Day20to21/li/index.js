// let ul = document.getElementById("list")
let ul = document.getElementsByTagName('ul')[0]//注意用标签筛选出来是一个集合 要取具体某一个
function handleClick(e) {
    let event = e || window.event
    let t = event.target || event.srcElement//兼容IE浏览器
    if (t.nodeName.toLowerCase() === 'li') {
        let color = t.style.backgroundColor
        let p = document.getElementsByClassName("color-picker")[0]
        p.innerHTML = color;
        p.style.color = color;
    }
}
ul.addEventListener('click', handleClick)


window.onload = function () {
    var oBtn = document.getElementById("btn");
    var oUl = document.getElementById("ul1");
    var num = 4;

    //事件委托，添加的子元素也有事件
    oUl.addEventListener('mouseover', mouseOver, false)
    function mouseOver(ev) {
        var ev = ev || window.event;
        var target = ev.target || ev.srcElement;
        if (target.nodeName.toLowerCase() === 'li') {
            target.style.background = "red";
        }

    };

    oUl.addEventListener('mouseout', mouseOut, false)
    function mouseOut(ev) {
        var ev = ev || window.event;
        var target = ev.target || ev.srcElement;
        if (target.nodeName.toLowerCase() == 'li') {
            target.style.background = "#fff";
        }
    };

    //添加新节点
    oBtn.addEventListener('click', clickButton)
    function clickButton() {
        num++;
        var oLi = document.createElement('li');
        oLi.innerHTML = 111 * num;
        oUl.appendChild(oLi);
    };
}
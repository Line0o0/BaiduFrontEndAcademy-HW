let input = document.getElementById('radio')
let status = document.getElementsByName('status')
function handleSelect() {
    for (let element of status) {
        if (element.checked) {
            let ID = element.getAttribute('id') + "-select";
            document.getElementById(ID).className = "selected"
        }
        else {
            let ID = element.getAttribute('id') + "-select";
            document.getElementById(ID).className = "select"
        }
    }
}
input.addEventListener('change', handleSelect, false);//冒泡 这里不能捕捉click事件 click会滞后输出两次（上次选中的和这次选中的） 不知道原因

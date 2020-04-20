//获取表单中的表单域  这部分还不懂
var txt = document.forms[0].elements["txt1"];
var btnStart = document.forms[0].elements["btnStart"];
var btnReset = document.forms[0].elements["btnReset"]
//定义定时器的id
var id;
//每10毫秒该值增加1
var seed = 0;
btnStart.onclick = function () {
    //根据按钮文本来判断当前操作   
    if (this.value == "开始") {
        //使按钮文本变为停止       
        this.value = "停止";
        //使重置按钮不可用       
        btnReset.disabled = true;
        //设置定时器，每0.01s跳一次       
        id = window.setInterval(tip, 10);
    }
    else {
        //使按钮文本变为开始       
        this.value = "开始";
        //使重置按钮可用       
        btnReset.disabled = false;//button自带的属性，表示可不可以被点击
        //取消定时       
        window.clearInterval(id);
    }
}
//重置按钮
btnReset.onclick = function () {
    seed = 0;
    txt.value = "0.00";
}
//让秒表跳一格
function tip() {
    seed++;
    txt.value = seed / 100;

}

var name = 'Jack'
function hello() {
    console.log("Hello");
}
window.setTimeout(hello, 2000)
window.setTimeout("hello()", 2000)//会报错:hello is not defined 
//所以第二种方式暂时不能用来传递参数，还是用return一个函数的方式来传参吧


function hello2(name) {
    console.log("Hello " + name);

}
function _hello2(name) {
    // return hello2(name)  // hello(name)这样写还是立即执行的
    return () => {
        return hello2(name)
    }
}
window.setTimeout(_hello2(name), 3000) //这里不用window也可以，因为setTimeOut自动注入window作为上下文

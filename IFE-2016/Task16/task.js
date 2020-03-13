// 1.正则匹配的方法 表单验证
// 2.输入更新render，有没有更好的方法？
// 3.分层处理的结构：设置listener==>handler==>具体操作函数
// 4.事件代理
// 5.多层函数怎么


var aqiData = {
    // "北京": 90,
    // "上海": 40
}


function addAqiData() {//因为是绑定点击提交按钮这个事件，所以在点击按钮时再获取表单内容，也就不用担心多层调用参数传递问题
    cityInput = document.getElementById('aqi-city-input');
    valueInput = document.getElementById('aqi-value-input');
    // cityInput.addEventListener('keypress', checkCity, false);
    // valueInput.addEventListener('keypress', checkValue, false);
    reCity = /^[\u4e00-\u9fa5]+$/;//+表示一或者多个
    reNum = /^-?\d+$/;
    city = cityInput.value;
    if (!reCity.test(city)) {
        alert('请输入中文城市名！')
        return false//return false使得下面的对象也就不会被赋值了；当然还是阻止不了rendering的
    }
    value = valueInput.value;
    if (!reNum.test(value)) {
        alert('请输入数字！')
        return false
    }
    aqiData[city] = value;
    return true
}

// function checkCity(e) {
//     if (e.charCode < 97 || e.charCode > 122) {//检查键盘按的是什么键的，没办法用来检查输入的是不是中文
//         e.preventDefault();
//         alert('请输入中文城市名！')
//     }
// }

// function checkValue(e) {
//     if (e.charCode < 97 || e.charCode > 122) {
//         e.preventDefault();
//         alert('请输入数字！')
//     }
// }



// function delAqidata(event) {//多一层函数event就已经捕捉不到了，学怎么传递
//     console.log(event);
//     var city = event.target.parentNode.parentNode.childNodes[0].innerHTML;
//     delete aqiData[city];
// }


/**
 * 渲染aqi-table表格
 */
function renderAqiList(city, value) {
    // console.log("I am rendering..");
    var table = document.getElementById('aqi-table')
    html = '<tr><td> 城市</td><td>空气质量</td><td>操作</td></tr>'
    Object.keys(aqiData).forEach(function (key) {
        html += "<tr><td>" + key + "</td><td>" + aqiData[key] + "</td><td><button>删除</button></td></tr>"
    })
    table.innerHTML = html;
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    toRender = addAqiData();
    if (toRender) {//addAqiData检查是合法输入再来render
        renderAqiList();
    }
}



/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(event) {
    var city = event.target.parentNode.parentNode.childNodes[0].innerHTML;
    delete aqiData[city];
    renderAqiList();
}

//代码逻辑是集中在init中定义eventListener给两个handler
function init() {

    var addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', addBtnHandle);

    var table = document.getElementById('aqi-table');
    table.addEventListener('click', function (e) {
        //下两行适配FF和IE，将event作为函数的参数传入例如e，然后为参数e添加适配方法
        e = e || window.event;
        target = e.target || e.srcElement;
        if (e.target.nodeName.toLowerCase() == "button") {//必须要匹配到了是button 才会调用handler
            delBtnHandle();
        }
    }, false)

}

init();

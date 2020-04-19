function format(date) {//传进来一个Date对象
    let year = date.getFullYear(),
        month = checkTime(date.getMonth() + 1),
        day = checkTime(date.getDate()),
        hour = checkTime(date.getHours()),
        minute = checkTime(date.getMinutes()),
        second = checkTime(date.getSeconds()),
        weekday = getWeekDay(date.getDay())
    return '' + year + '年' + month + '月' + day + '日 ' + weekday + ' ' + hour + ':' + minute + ':' + second
}

function checkTime(n) {
    if (n < 10)
        return '0' + n
    return n + ''//一律转换成字符串
}

function getWeekDay(n) {
    var week = ['日', '一', '二', '三', '四', '五', '六']
    return '星期' + week[n]
}


function refreshTime() {
    let text = format(new Date())
    let ele = document.getElementById('time')
    ele.innerText = text
}

refreshTime()//让初次显示不需要等250ms
setInterval(refreshTime, 250)


let options = document.getElementById('options'),
    yearEle = document.getElementById("year-select"),
    monthEle = document.getElementById("month-select"),
    dayEle = document.getElementById("day-select"),
    hourEle = document.getElementById("hour-select"),
    minuteEle = document.getElementById("minute-select"),
    secondEle = document.getElementById("second-select"),
    changeText = document.getElementById("changeText"),
    selected = document.getElementById('selected'),
    toNow = document.getElementById('toNow'),
    dayList = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31, 29]

window.onload = function () {
    addOptionList(2000, 2040, yearEle)
    for (var i = 1; i <= 12; i++) {
        let option = this.document.createElement("option")
        option.value = i - 1//value和index统一 
        option.innerText = i
        monthEle.appendChild(option)
    }
    addOptionList(1, 31, dayEle)
    addOptionList(1, 24, hourEle)
    addOptionList(0, 59, minuteEle)
    addOptionList(0, 59, secondEle)
}

function addOptionList(start, end, element) {
    for (let i = start; i <= end; i++) {
        let option = this.document.createElement("option")
        option.value = i
        option.innerText = i
        element.appendChild(option)
    }
}


function handleSelect(e) {
    let year = yearEle.value,
        monthIdx = monthEle.value,//value的值就是index
        day = dayEle.value,
        hour = hourEle.value,
        minute = minuteEle.value,
        second = secondEle.value,
        selectedDate = new Date(year, monthIdx, day, hour, minute, second),
        msDiff = new Date() - selectedDate
    selected.innerText = format(selectedDate)
    if (selectedDate.getTime() >= new Date().getTime()) {
        changeText.innerText = "还有"
        toNow.innerText = formatDiff(-msDiff)
    }
    else {
        changeText.innerText = "已经过去"
        toNow.innerText = formatDiff(msDiff)
    }
    if (e.target.id === "month-select" || e.target.id === "year-select") {
        if (yearEle.value % 4 === 0 && monthEle.value == 1) {
            dayEle.innerHTML = ""//先将子元素删掉再加
            addOptionList(1, dayList[12], dayEle)
        }
        else if (yearEle.value % 4 !== 0 && monthEle.value == 1) {
            dayEle.innerHTML = ""
            addOptionList(1, dayList[1], dayEle)
        }
        else if (e.target.id === "month-select") {
            dayEle.innerHTML = ""
            addOptionList(1, dayList[monthEle.value], dayEle)
        }
        //剩下的只改了年没有改月的就不需要修改了
    }
}

function formatDiff(diff) {
    diff /= 1000
    let dayDiff = Math.floor(diff / 86400)
    diff -= dayDiff * 86400
    let hourDiff = Math.floor(diff / 3600)
    diff -= hourDiff * 3600
    let minuteDiff = Math.floor(diff / 60),
        secondDiff = Math.round(diff - minuteDiff * 60)
    return dayDiff + '天' + hourDiff + '小时' + minuteDiff + '分' + secondDiff + '秒'
}

options.addEventListener('change', handleSelect)
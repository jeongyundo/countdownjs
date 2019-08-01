function setDate(needs) {
    let nowDate = new Date();
    let dueDate = new Date(needs.year, needs.month, needs.days, needs.hours, needs.minutes);
    let countDate = new Date(dueDate-nowDate);
    let minutes = parseInt((dueDate-nowDate)/(1000*60));
    let hours = parseInt(minutes/60);
    let dividedHours = hours%24;
    let dividedDays = parseInt(hours/24)-31;
    let divededMinutes = minutes%60;
    console.log(nowDate, dueDate, countDate);
    let result = {"days": dividedDays, "hours": dividedHours, "minutes": divededMinutes}
    return result
}

var a = {"year": 2019, "month": 8, "days": 7, "hours": 14, "minutes": 00};
var b = {"year": 2019, "month": 8, "days": 6, "hours": 14, "minutes": 00};
var c = {"year": 2019, "month": 9, "days": 26, "hours": 20, "minutes": 00};
var d = {"year": 2019, "month": 8, "days": 12, "hours": 9, "minutes": 00};

var a1 = {"day":setDate(a),"id":"demo1"};
var a2 = {"day":setDate(b),"id":"demo2"};
var a3 = {"day":setDate(c),"id":"demo3"};
var a4 = {"day":setDate(d),"id":"demo4"};

function writedata(value) {
    console.log(value);
    console.log(document.getElementById(value.id));
    document.getElementById(value.id).innerHTML = "남은시간 : "+value.day.days+"일"+value.day.hours+"시간"+value.day.minutes+"분";
}

window.onload=writedata(a1);
window.onload=writedata(a2);
window.onload=writedata(a3);
window.onload=writedata(a4);

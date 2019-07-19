
function setDate(needs) {
    let nowDate = new Date();
    let dueDate = new Date(needs.year, needs.month, needs.days, needs.hours, needs.minutes);
    let countDate = new Date(dueDate-nowDate);
    let minutes = parseInt((dueDate-nowDate)/(1000*60));
    let hours = parseInt(minutes/60);
    let dividedHours = hours%24;
    let dividedDays = parseInt(hours/24);
    let divededMinutes = minutes%60;
    let result = {"days": dividedDays, "hours": dividedHours, "minutes": divededMinutes}
    return result
}

let c={"year": 2019, "month": 12, "days": 31, "hours": 24, "minutes": 00}

console.log(setDate(c));
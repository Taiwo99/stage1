const getCurrentDate = () => {
    const day = new Date().toLocaleDateString('en-us', { weekday:"long"}) 
    return day
}
let currentDate = document.getElementById('currentDayOfTheWeek')
currentDate.textContent = getCurrentDate()

const currentTime = () => {
    let day = new Date()

    let utcTime = document.getElementById("currentUTCTime");

    utcTime.innerHTML = day.getTime()
}
setInterval(currentTime, 1000)

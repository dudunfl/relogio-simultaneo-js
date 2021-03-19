function hours() {
    var hours = document.getElementById('hours')
    var date1 = new Date()
    var gthours = date1.getHours()
    var gtminutes = date1.getMinutes()
    var gtseconds = date1.getSeconds()

    if (gthours < 10) {
        gthours = `0${gthours}`
    }
    if (gtminutes < 10) {
        gtminutes = `0${gtminutes}`
    }

    if (gtseconds < 10) {
        gtseconds = `0${gtseconds}`
    }

    hours.textContent = `${gthours}:${gtminutes}:${gtseconds}`
}
var tictac = setInterval(hours, 1000)
hours()
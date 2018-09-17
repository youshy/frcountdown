const gradient = {}
gradient.colours = [
    //night
    ["#0B0D10", "#05080D"],
    //morning
    ["0C2B5A", "#049AB6"],
    //day
    ["#39B3D0", "#4481D5"],
    //evening
    ["#02188C", "#CD6400"],
]
gradient.setGradient = (number, color1, color2) => {
    const body = document.getElementById("gradient");
	body.style.background = `linear-gradient(${number}deg, ${color1}, ${color2})`
	body.style.backgroundRepeat = "no-repeat";
	body.style.backgroundSize = "auto 1000px";
    body.style.backgroundPosition = "center top";
    body.style.color = "black"
}
gradient.year = new Date().getYear()
gradient.month = new Date().getMonth()
gradient.day = new Date().getDate()

gradient.zero = new Date(gradient.year, gradient.month, gradient.day, 00, 00, 00, 00)


document.addEventListener("DOMContentLoaded", () => {
    const count = {}
    count.toDate = new Date("Oct 13, 2018, 20:00:00").getTime()
    count.setDate = document.getElementById("setdate").innerHTML = "Waiting for the trip:"

    let interval = setInterval(() => {
        count.now = new Date().getTime()
        count.nowHours = new Date().getHours()
        count.nowMinutes = new Date().getMinutes()
        console.log(count.nowHours, count.nowMinutes)
        count.distance = count.toDate - count.now
        count.days = Math.floor(count.distance / (1000 * 60 * 60 * 24))
        count.hours = Math.floor((count.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        count.minutes = Math.floor((count.distance % (1000 * 60 * 60)) / (1000 * 60))
        count.seconds = Math.floor((count.distance % (1000 * 60)) / 1000)
        count.counter = () => {
            document.getElementById("countdown").innerHTML = count.days + "d " + count.hours + "h " + count.minutes + "m " + count.seconds + "s "
            if (count.distance < 0) {
                clearInterval(count.counter)
                document.getElementById("countdown").innerHTML = "DONE"
            }
        }
        count.counter()
    }, 1000)

})
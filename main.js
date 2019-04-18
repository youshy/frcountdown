document.addEventListener("DOMContentLoaded", () => {
    const count = {}
    count.toDate = new Date("Apr 29, 2019, 12:00:00").getTime()
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

    const gradient = {}
    gradient.colours = [
        //night
        ["#001C45", "#05080D"],
        //morning
        ["#0C2B5A", "#049AB6"],
        //day
        ["#39B3D0", "#4481D5"],
        //afternoon
        ["#39B3D0", "#CD6400"],
        //evening
        ["#02188C", "#CD6400"],
    ]
    
    gradient.setGradient = (number, color1, color2, textColor) => {
        const body = document.getElementById("gradient");
        body.style.background = `linear-gradient(${number}deg, ${color1}, ${color2})`
        body.style.backgroundRepeat = "no-repeat";
        body.style.backgroundSize = "auto 1000px";
        body.style.backgroundPosition = "center top";
        body.style.color = textColor
    }
    
    gradient.checkHour = (degree) => {
        if ((gradient.nowHours >= 0) && (gradient.nowHours < 5)) {
            gradient.setGradient(degree, gradient.colours[0][0], gradient.colours[0][1], "white")
        } else if ((gradient.nowHours >= 5) && (gradient.nowHours < 10)) {
            gradient.setGradient(degree, gradient.colours[1][0], gradient.colours[1][1], "black")
        } else if ((gradient.nowHours >= 10) && (gradient.nowHours < 16)) {
            gradient.setGradient(degree, gradient.colours[2][0], gradient.colours[2][1], "black")
        } else if ((gradient.nowHours >= 16) && (gradient.nowHours < 19)) {
            gradient.setGradient(degree, gradient.colours[3][0], gradient.colours[3][1], "black")
        } else if ((gradient.nowHours >= 19) && (gradient.nowHours < 21)){
            gradient.setGradient(degree, gradient.colours[4][1], gradient.colours[4][0], "white")
        } else if ((gradient.nowHours >= 21) && (gradient.nowHours <= 23)) {
            gradient.setGradient(degree, gradient.colours[0][0], gradient.colours[0][1], "white")
        } 
    }

    let degree = -(Math.random() * 46)
    console.log(degree)
    let checker = setInterval(() => {
        gradient.nowHours = new Date().getHours()
        let adder = 0.001
        degree = (degree + adder)
        gradient.checkHour(degree) 
    }, 100)


})


let date = new Date();
sec = document.getElementsByClassName("sec")
min = document.getElementsByClassName("min")
hour = document.getElementsByClassName("hour")
clock = document.getElementById("clock")
numberOfPoints = 60
centerX = 250
centerY = 250
r = 50
x = 0
y = 0
padd = 20

let point = date.getSeconds()

const timer = (ms) => new Promise((res) => setTimeout(res, ms));

let secValues = Array.prototype.map.call(sec, function (el) {
    return el;
});

let minValues = Array.prototype.map.call(min, function (el) {
    return el;
});

let hourValues = Array.prototype.map.call(hour, function (el) {
    return el;
});

secValues.forEach((element) => {
    x = 250-r;
    y = 250;
    element.style.top = `${x}px`;
    element.style.left = `${y}px`;
    r+=padd
})

r = 100;

minValues.forEach((element) => {
    x = 250-r;
    y = 250;
    element.style.top = `${x}px`;
    element.style.left = `${y}px`;
    r+=padd
})

setInterval(() => {
    r = 100
    let startAngle = Math.PI
    let secAngle = startAngle + (-date.getSeconds() / numberOfPoints) * 2 * Math.PI
    let minAngle = startAngle + (-date.getMinutes() / numberOfPoints) * 2 * Math.PI
    let hourAngle = startAngle + (-date.getHours() / numberOfPoints) * 2 * Math.PI

    secValues.forEach((element) => {
        x = (centerX + r * Math.cos(secAngle));
        y = (centerY + r * Math.sin(secAngle));
        element.style.top = `${x}px`;
        element.style.left = `${y}px`;
        element.innerHTML = date.getSeconds()
        r+=padd
    })

    r = 100

    minValues.forEach((element) => {
        x = (centerX + r * Math.cos(minAngle));
        y = (centerY + r * Math.sin(minAngle));
        element.style.top = `${x}px`;
        element.style.left = `${y}px`;
        element.innerHTML = date.getMinutes()
        r+=padd
    })

    r = 100

    hourValues.forEach((element) => {
        x = (centerX + r * Math.cos(hourAngle));
        y = (centerY + r * Math.sin(hourAngle));
        element.style.top = `${x}px`;
        element.style.left = `${y}px`;
        element.innerHTML = date.getHours()
        r+=padd
    })
    
    date = new Date()
}, 1000)





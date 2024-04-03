// the VARAIBLES
let date = new Date();
sec = document.getElementsByClassName("sec")
min = document.getElementsByClassName("min")
hour = document.getElementsByClassName("hour")
secValues = null;
minValues = null;
hourValues = null;
clock = document.getElementById("clock")
numberOfPoints = 60
centerX = 240
centerY = 240
r = 100
x = 0
y = 0
secPadd = 20
minPadd = 20
hourPadd = 20
secColor = "#000000"
minColor = "#000000"
hourColor = "#000000"
defaultSize = 350


//number generator function
const gen = (
    numS, numM, numH, 
    secPad = secPadd, minPad = minPadd, hourPad = hourPadd, 
    secCol = secColor, minCol = minColor, hourCol = hourColor, 
    R = r) => {

    defaultSize = r*2 + Math.max(secPad, minPadd, hourPadd) * Math.max(numS, numM, numH) + 20 * Math.max(numS, numM, numH)-10
    console.log(defaultSize)
    clock.innerHTML = ""

    secPadd = secPad
    minPadd = minPad
    hourPadd = hourPad

    secColor = secCol
    minColor = minCol
    hourColor = hourCol

    r = R
    for(let i = 0; i < numS; i++) {
        let span = document.createElement("span")
        span.classList.add("sec")
        span.style.color = secColor
        clock.appendChild(span);
    }

    for(let i = 0; i < numM; i++) {
        let span = document.createElement("span")
        span.classList.add("min")
        span.style.color = minColor
        clock.appendChild(span);
    }

    for(let i = 0; i < numH; i++) {
        let span = document.createElement("span")
        span.classList.add("hour")
        span.style.color = hourColor
        clock.appendChild(span);
    }

    sec = document.getElementsByClassName("sec")
    min = document.getElementsByClassName("min")
    hour = document.getElementsByClassName("hour")

    secValues = Array.prototype.map.call(sec, function (el) {
        return el;
    });
    
    minValues = Array.prototype.map.call(min, function (el) {
        return el;
    });
    
    hourValues = Array.prototype.map.call(hour, function (el) {
        return el;
    });

}

// da logic updating numbers and position
const runClock = () => {
    let tempR = r
    setInterval(() => {
        tempR = r
        let startAngle = Math.PI
        let secAngle = startAngle + (-date.getSeconds() / numberOfPoints) * 2 * Math.PI
        let minAngle = startAngle + (-date.getMinutes() / numberOfPoints) * 2 * Math.PI
        let hourAngle = startAngle + (-date.getHours() / numberOfPoints) * 2 * Math.PI
    
        secValues.forEach((element) => {
            x = (centerX + tempR * Math.cos(secAngle));
            y = (centerY + tempR * Math.sin(secAngle));
            element.style.top = `${x}px`;
            element.style.left = `${y}px`;
            element.style.transform = `rotate(${date.getSeconds()*6}deg)`  
            element.innerHTML = date.getSeconds()
            tempR+=secPadd
        })
    
        tempR = r
    
        minValues.forEach((element) => {
            x = (centerX + tempR * Math.cos(minAngle));
            y = (centerY + tempR * Math.sin(minAngle));
            element.style.top = `${x}px`;
            element.style.left = `${y}px`;
            element.style.transform = `rotate(${date.getMinutes()*6}deg)`  
            element.innerHTML = date.getMinutes()
            tempR+=minPadd
        })
    
        tempR = r
    
        hourValues.forEach((element) => {
            x = (centerX + tempR * Math.cos(hourAngle));
            y = (centerY + tempR * Math.sin(hourAngle));
            element.style.top = `${x}px`;
            element.style.left = `${y}px`;            
            element.style.transform = `rotate(${date.getHours()*6}deg)`  
            element.innerHTML = date.getHours()
            tempR+=hourPadd
        })
        
        date = new Date()
        console.log(r, tempR)
    }, 1000)
}

//form handling
const submitform = () => {
    const secAmm = parseInt(document.getElementById("secAmm").value)
    const minAmm = parseInt(document.getElementById("minAmm").value)
    const hourAmm = parseInt(document.getElementById("hourAmm").value)

    const secPadd = parseInt(document.getElementById("secPadding").value)
    const minPadd = parseInt(document.getElementById("minPadding").value)
    const hourPadd = parseInt(document.getElementById("hourPadding").value)

    const secCol = document.getElementById("secColor").value
    const minCol = document.getElementById("minColor").value
    const hourCol = document.getElementById("hourColor").value

    const radius = parseInt(document.getElementById("radius").value)

    if(secAmm <= 0 || minAmm <= 0 || hourAmm <= 0 || secPadd <= 0 || minPadd <= 0|| hourPadd <= 0 || radius <= 0) return -1;

    gen(secAmm, minAmm, hourAmm, secPadd, minPadd, hourPadd, secCol, minCol, hourCol, radius)
    runClock()
}

//da call
gen(4, 4, 4)
runClock()





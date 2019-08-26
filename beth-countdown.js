$(document).ready(countdown());

var endDate = new Date("2019-08-30T23:59:59") //date needs to be in this format, this will eventually be a variable based on campaign_end from the api

run() //this is called once before setInterval so the numbers will display as soon as the page is loaded

function countdown() {
    setInterval(run, 1000); //runs every second (Pun In. Ten Dead.)
    generateCountdownContainer()
}

function run() {
    //Gets current date
    var currentDate = new Date()
    currentDate.setDate(currentDate.getDate())

    //Gets difference in endDate and currentDate and console.logs it
    var timeUntilEnded = endDate - currentDate

    //Converts above calculated difference (milliseconds) to normal time
    convertFromMilliseconds(timeUntilEnded)
}

//Converts a large number of milliseconds to normal time - should I do months?
function convertFromMilliseconds(someVar) {

    var exactDays = (((someVar / 1000) / 60) / 60) / 24
    var days = Math.floor(exactDays);

    var exactHours = (exactDays - days) * 24
    var hours = Math.floor(exactHours);

    var exactMinutes = (exactHours - hours) * 60
    var minutes = Math.floor(exactMinutes)

    var exactSeconds = (exactMinutes - minutes) * 60
    var seconds = Math.floor(exactSeconds)

    document.getElementById("countdown-day-number").innerHTML = days
    document.getElementById("countdown-hours-number").innerHTML = hours
    document.getElementById("countdown-minutes-number").innerHTML = minutes
    document.getElementById("countdown-seconds-number").innerHTML = seconds
}

function generateCountdownContainer() {
    var containerDiv = document.createElement("div")
    var container = '<div class="countdown-container"><div class="countdown-number" id="countdown-day-number"></div><span class="countdown-unit">days</span></div><div class="countdown-container"><div class="countdown-number"id="countdown-hours-number"></div><span class="countdown-unit">hrs</span></div><div class="countdown-container"><div class="countdown-number"id="countdown-minutes-number"></div><span class="countdown-unit">mins</span></div><div class="countdown-container"><div class="countdown-number"id="countdown-seconds-number"></div><span class="countdown-unit">sec</span></div>'
    containerDiv.classList.add("countdown")
    containerDiv.innerHTML = container
    document.body.appendChild(containerDiv)
}

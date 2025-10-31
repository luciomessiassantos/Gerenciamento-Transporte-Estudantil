
/**
 * 
 * @type {HTMLDivElement[]}
 * 
 */

const weekDays = document.querySelectorAll("div#week-day");



weekDays.forEach((d) => {
    d.addEventListener("click", () => {
        d.classList.toggle("checked");
    })

    
})


const calendar = document.querySelector("div.calendar");





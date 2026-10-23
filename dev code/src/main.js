const hamburger = document.querySelector("#hamburger")
const smmenu = document.querySelector("#smmenu")
const main = document.querySelector("main")
const header = document.querySelector("header")
hamburger.addEventListener("click", ()=>{
    smmenu.classList.toggle("hidden")
    smmenu.classList.toggle("flex")
})
main.addEventListener("click", ()=>{
    smmenu.classList.remove("flex")
    smmenu.classList.add("hidden")
})
header.addEventListener("click", ()=>{
    smmenu.classList.remove("flex")
    smmenu.classList.add("hidden")
})
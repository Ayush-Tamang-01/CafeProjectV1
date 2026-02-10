
const menuList = document.getElementById("menuList")
const menuIcon = document.getElementById("menuTab")
const crossIcon = document.getElementById("crossIcon")

if(menuIcon){
        menuIcon.addEventListener("click", ()=>{
        menuIcon.classList.toggle("hidden")
        crossIcon.classList.toggle("hidden")
        menuList.classList.toggle("hidden")
    })
}

if(crossIcon){
    crossIcon.addEventListener("click", ()=>{
        menuIcon.classList.toggle("hidden")
        crossIcon.classList.toggle("hidden")
        menuList.classList.toggle("hidden")
    })
}

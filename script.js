// const arr=[{box:"nese"},{box2:"nese2"}]

// // localStorage.setItem("arrcontent", JSON.stringify(arr));

// // localStorage.getItem(arr);

// setLocalStorage("salam",arr)
// console.log(getLocalStorage["salam"]);


// function setLocalStorage(key,value) {
//     localStorage.setItem(key,JSON.stringify(value))
// }

// function getLocalStorage(key) {
//     return JSON.parse.localStorage.getItem(key)
// }

// const input=document.querySelector("input")
// const btn=document.querySelector("btn")




// btn.addEventListener("click",function(){
//     const div=document.createElement("div")
//     div.innerHTML="input.value"
//     container.append(div)
// })






// let rigtBtn = document.querySelector(".right")
// let leftBtn = document.querySelector(".left")
// let imageArea = document.querySelector(".images")

// rigtBtn.addEventListener("click",function(){
//     let active = document.querySelector(".active");
//     active.classList.remove("active");
//     if (active.nextElementSibling!==null) {
//         active.nextElementSibling.classList.add("active")
//     }else{
//         imageArea.firstElementChild.classList.add("active")
//     }
// })

let head = document.querySelectorAll(".head")
let textbox = document.querySelectorAll(".text")

for (let i = 0; i < head.length; i++) {
    head[i].addEventListener("click", function () {
        textbox[i].classList.toggle("active")
    })


}



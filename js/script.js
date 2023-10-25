// RACCOLTA DATI, DICHIARAZIONE VARIABILI
const images = ["./img/01.jpg", "./img/02.jpg", "./img/03.jpg", "./img/04.jpg", "./img/05.jpg"];


for (let i = 0; i < images.length; i++) {
    const curImage = images[i];
    // console.log(curImage);
    const items = document.querySelector(".items");
    // console.log(items);
    items.innerHTML += `<div class="item active">
    <img src="${curImage}" alt="">
    </div>`

}

const string = document.querySelectorAll(".item");
console.log(string);

let itemFlag;

for (let i = 0; i < string.length; i++) {
    curItem = string[i];
    // console.log(curItem);
    if (i != 0) {
        curItem.classList.remove("active");
        itemFlag = false;
    } else {
        itemFlag = true;
    }

}

console.log(string);
let string1 = string[0];
let string2 = string[1];
let string3 = string[2];
let string4 = string[3];
let string5 = string[4];

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let curPosition = 0;

next.addEventListener("click", function () {
    // console.log(itemFlag);
    for (let i = 0; i < string.length - 1; ++i) {
        curPosition = i + 1;
        console.log(curPosition);
        // console.log(nextImage);
                
        if (string[i].classList == "item active") {
           
            // console.log("ok");
            // console.log("----");
            string[i].classList.remove("active");
            string[i + 1].classList.add("active");
            // console.log(curPosition);

            break
            
        } else if (string[4].classList == "item active") {
            
            console.log("wow");
            string[4].classList.remove("active");
            string[3].classList.remove("active");
            string[2].classList.remove("active");
            string[1].classList.remove("active");
            string[0].classList.add("active");
            
            break

        }

    }
})
console.log(curPosition);

prev.addEventListener("click", function () {
    for (let i = curPosition; i >= 0; i--) {
        curPosition = i;
        console.log(curPosition);
        
        if (string[i].classList == "item") {
           
            // console.log("ok");
            // console.log("----");
            string[i + 1].classList.remove("active");
            string[i].classList.add("active");
            
            break
            
        } else if (string[0].classList != "item") {

            console.log("wAw");
            console.log(curPosition);
            string[0].classList.remove("active");
            // string[1].classList.add("active");
            // string[2].classList.add("active");
            // string[3].classList.add("active");
            string[4].classList.add("active");
            curPosition += 3;
            console.log(curPosition);
            
        }

    }
})


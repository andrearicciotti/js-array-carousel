// RACCOLTA DATI, DICHIARAZIONE VARIABILI
const images = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];
const itemsBlock = document.querySelector(".items");
const item = document.createElement("div");
item.classList.add("item");
let imageItem = document.createElement("img");
const display = [];
// console.log(itemsBlock);
// console.log(item,item.classList);


// LOGICA DEL PROGRAMMA E OUPUT
for (let i = 0; i < images.length; i++) {

    const image = images[i];
    // console.log(imageItem);
    imageItem.src = `${image}`;
    // console.log(imageItem);

    if (i === 0) {

        item.classList.add("active");
        display.push(true);

    } else {

        display.push(false)
    }

    item.append(imageItem);
    // console.log(item);
    itemsBlock.append(item);
    console.log(display);

}

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

prev.addEventListener("click", function () {
    for (let i = 0; i < display.length; i++) {
        const curImage = display[i];
        const prevImage = images[i - 1];
        console.log(curImage, prevImage);
        if (curImage) {
            console.log("ok");
            // item.classList.remove("active");
        }

    }
})


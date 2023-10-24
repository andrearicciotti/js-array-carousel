// RACCOLTA DATI, DICHIARAZIONE VARIABILI
const images = ["img/01.jpg","img/02.jpg","img/03.jpg","img/04.jpg","img/05.jpg"];
const itemsBlock = document.querySelector(".items");
const item = document.createElement("div");
item.classList.add("item");
let imageItem = document.createElement("img");
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
    }

    item.append(imageItem);
    // console.log(item);
    itemsBlock.append(item);

    
    
}

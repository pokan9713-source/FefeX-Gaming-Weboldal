// FefeX Gaming animációk

window.onload = function(){

    console.log("FefeX Gaming oldal betöltve!");

};


// Kártyák animációja

const cards = document.querySelectorAll(".card");


cards.forEach(card => {

    card.addEventListener("mouseenter",()=>{

        card.style.transition="0.3s";

    });


});

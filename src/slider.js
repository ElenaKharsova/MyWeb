const cards = document.querySelectorAll(".card-item");

cards.forEach(card => {
    card.addEventListener('click', ()=> {
        const container = document.querySelector(".carousel");
        const left = container.querySelector(".card_left");
        const center = container.querySelector(".card_center");
        const right = container.querySelector(".card_right");

        const cards = document.querySelectorAll(".card-item");

cards.forEach(card => {
    card.addEventListener('click', ()=> {
        const container = document.querySelector(".carousel");
        const left = container.querySelector(".card_left");
        const center = container.querySelector(".card_center");
        const right = container.querySelector(".card_right");

        if(card.classList.contains("card_right")) {
            right.className = "card-item card_center";
            center.className = "card-item card_left";
            left.className = "card-item card_right";            
        } else if (card.classList.contains("card_left")){
            left.className = "card-item card_center";
            center.className = "card-item card_right";
            right.className = "card-item card_left";
        }
    })
})
    })
})

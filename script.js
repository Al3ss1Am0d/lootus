const openBtn = document.querySelector("#openBtn");
card = document.querySelector(".card");
closeBtn = document.querySelector(".closeBtn");

openBtn.addEventListener("click", ()=>{
    card.classList.add('show'); // feche o parêntese aqui
})

closeBtn.addEventListener("click", ()=>{
    card.classList.remove('show');
})

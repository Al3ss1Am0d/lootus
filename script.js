const openBtn = document.querySelector("#openBtn");
card = document.querySelector(".card");
closeBtn = document.querySelector(".closeBtn");
loginLink = document.querySelector(".loginLink")
registerLink = document.querySelector(".registerLink");
containerform = document.querySelector(".containerform")



openBtn.addEventListener("click", ()=>{
    card.classList.add('show'); // feche o parêntese aqui
})

closeBtn.addEventListener("click", ()=>{
    card.classList.remove('show');
})

registerLink.addEventListener('click',(e)=>{
    e.preventDefault();
    containerform.classList.add('active');
})

loginLink.addEventListener('click',(e)=>{
    e.preventDefault();
    containerform.classList.remove('active');
})

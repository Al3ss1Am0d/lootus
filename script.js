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

//a function that generates bubbles

const createBubble = ()=>{
    const section = document.querySelector('.bubble-background');
    const bubbleEl = document.createElement('span');
    bubbleEl.className = "bubble"
    const minSize = 10;
    const maxSize = 40;
    const size = Math.random() * (maxSize + 1 - minSize) + minSize;
    bubbleEl.style.width = `${size}px`;
    bubbleEl.style.height = `${size}px`;
    bubbleEl.style.left = Math.random() * innerWidth + 'px';
    section.appendChild(bubbleEl);
}

setInterval(createBubble,500);
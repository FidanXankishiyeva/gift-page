let yesBtn= document.querySelector('.yes-btn')
let noBtn= document.querySelector('.no-btn')

// yes buttona click'leyende novbeti sehifeye kecid
function nextPage(){
    window.location.href= "../giftPage/index.html"
}

// no buttona click'lemek

function moveBtn(){
    let x = Math.random() * (window.innerWidth - noBtn.offsetWidth) - 85;
    let y = Math.random() * (window.innerHeight - noBtn.offsetHeight) - 48;
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}


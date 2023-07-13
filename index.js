btnSmall = document.querySelector('.smallbtn')
btnMed = document.querySelector('.medBtn')
lrgBtn = document.querySelector('.lrgBtn')

crement = document.querySelector('.crement')
pizzas = document.querySelector('.pizzas')

btnSmall.addEventListener('click', () => {
    crement.style.float = 'right';
    crement.style.width = '30%';
    pizzas.style.flexDirection = 'column';
})

lrgBtn.addEventListener('click', () => {
    crement.style.float = 'right';
    crement.style.width = '30%';
    pizzas.style.flexDirection = 'column';
})
btnMed.addEventListener('click', () => {
    crement.style.float = 'right';
    crement.style.width = '30%';
    pizzas.style.flexDirection = 'column';
})

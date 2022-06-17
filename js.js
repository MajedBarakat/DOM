
const aa=document.querySelectorAll('i')

console.log(aa);

for(let i of aa){
    i.addEventListener('click',function(){
        i.classList.toggle('new')
    })
}



const btn1=document.querySelectorAll('button')

console.log(btn1);

for (let i=0;i<btn1.length;i++){
    var btn2=btn1[i]
    btn2.addEventListener('click', remove )
}

function remove(event){
    var ssss=event.target
    ssss.closest('.div2').remove()
}

function addToCartClicked(event){
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('cart')[0].innerText
    var price = shopItem.getElementsByClassName('cart')[0].innerText
    var imageSrc = 
}
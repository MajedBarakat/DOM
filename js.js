
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
    var btn2 = btn1[i]
    btn2.addEventListener('click', remove )
}

function remove(event){
    var ssss=event.target
    ssss.closest('.div2').remove()
    total()
}

function total(){
    var prices =  document.getElementsByClassName('bb')
    var quantities = document.getElementsByClassName('ii1')
    var items = document.getElementsByClassName('div2')
    var sum = 0
    for (let i = 0; i < items.length; i++) {
        var price = prices[i].innerHTML.replace('DT','')
        var quantity = quantities[i].value
        sum += Number(price) * quantity  
    }
    document.getElementById('tt1').innerHTML = String(sum) + " DT"
}


total()
/* let btns = document.
let tab = [11, 12 ,13 ,14]
let tab2 =[]
tab.map(item=>tab2.push(item * 2))

console.log(tab2)*/


let btns = document.querySelectorAll('.btn')
btns.forEach(function(item){
    item.addEventListener('click',function(){
        let screen1 = document.querySelector('.little-screen')
        let screen2 = document.querySelector('.screen-content')     
     
        if (item.id === 'ac') {
            screen1.value = ""
            screen2.value = ""
        }else{
                if (item.id === '=') {
                    screen2.value = eval(screen1.value)
            } 
            else {
                screen1.value += item.id
        }
        }
    })
})
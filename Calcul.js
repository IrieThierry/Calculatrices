/* let btns = document.
let tab = [11, 12 ,13 ,14]
let tab2 =[]
tab.map(item=>tab2.push(item * 2))

console.log(tab2)*/


let btns = document.querySelectorAll('.btn')
btns.forEach(function(item){
    item.addEventListener('click',function(){
        let screen = document.querySelector('.screen-content')     
        if (item.id === 'ac') {
            screen.value = ""
        }else{
                if (item.id === '=') {
                    screen.value = eval(screen.value)
            } 
            else {
                screen.value += item.id
        }
        }
    })
})
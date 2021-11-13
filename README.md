# Calculatrice
## irie

![image de la calculatrice](https://github.com/IrieThierry/A7/blob/main/calc.PNG?raw=true)

## Fonctionnalité qui permet de ne pas faire suivre deux opérateurs
 ```js

 if (item.classList.contains('operator')) {
            operator.push(0)
           let op = operator.length
           if(op >= 2){
                let littleValue = document.querySelector(".little-screen")
               littleValue.value = littleValue.value.slice(0, -1);
            }
        }
        else{
            operator = []
        }
```
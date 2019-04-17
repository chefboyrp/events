

document.addEventListener('DOMContentLoaded', function(){
    console.log("yo world")

    let changeColorButton = document.querySelector('#changeColor')
    let colorDiv = document.querySelector('#colorDiv')
    let clickCount = 0


    changeColorButton.addEventListener('click', function(){

        clickCount = clickCount + 1

        if (clickCount % 2 == 0) {

            colorDiv.style.background = 'green'
            clickCount = 0
            
        } else {
            colorDiv.style.background = 'white'
            
        }


        console.log(clickCount) 
        

 
    })

    
    changeColorButton.addEventListener('mouseover', function(){

        colorDiv.style.background = 'pink'

    })

    

})

function changeColorDiv(){
    colorDiv.style.background = 'red'
  }




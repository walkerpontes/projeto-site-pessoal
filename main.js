const scrool = document.querySelector('.container-projetos');

const button = document.querySelectorAll('.button');

button[0].style.opacity = "0"

button.forEach( button => 
    button.addEventListener("click",()=>
    {
        direcao = button.classList[0] == "btn-left" ? -1 : 1
        scrool.scrollBy({left: (scrool.scrollWidth/2.5)*direcao, behavior:"smooth"})
        console.log(scrool.scrollLeft < scrool.scrollWidth/2.5 ? "yes" : "no" );

    })

)


function botoes(){
    if(scrool.scrollLeft == 0){
         button[0].style.opacity = "0"

        } else{
            button[0].style.opacity = "1" 
        }
        
        
    if(scrool.scrollLeft  >= scrool.scrollWidth - scrool.clientWidth){
         button[1].style.opacity = "0"
        } else{
         button[1].style.opacity = "1" 
        }
}

setInterval(botoes,1)







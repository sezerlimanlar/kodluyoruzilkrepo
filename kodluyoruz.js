//! KARIŞIK ÇALIŞMA SAYFASI


//İndexleriyle film isimlerini listeleme

/* const filmList = (list) =>{
    list.forEach((series,index) =>{
        console.log(`${index+1}.${series}`)

    })

}
filmList(["twd","tw","lc","tsa"]) */


 //MOUSE EVENTİ 
 /*let baslik = document.querySelector('#baslik');
baslik.addEventListener('mouseover', domClick)


function domClick(){
        console.log(this.style.color == "blue" ? this.style.color = "black" : this.style.color = "blue")
} */

//KLAVYE EVENTİ

/* baslik.addEventListener("copy",cuttingFunction);

function cuttingFunction(event){
  console.log("etkinlik tipi: " , event.type)
  }  */

/*   const selectBox = document.querySelector('#selectColor');
const button = document.querySelector('#button');
const form = document.querySelector('.inputText');  
const cerceve = document.querySelector('.container');
selectBox.addEventListener('click' ,function(){
    console.log("selectBox");    
    })
form.addEventListener('click',function(){
    console.log("form");
    })
cerceve.addEventListener('click',function(){
    console.log('cerceve');
    })
button.addEventListener('click',function(){
        console.log('buton');
        })
 */
        let counter = 0;
        let counterDOM = document.querySelector('#counter');
        let increaseDOM= document.querySelector('#increase');
        let decreaseDOM= document.querySelector('#decrease');

        counterDOM.innerHTML = counter
        increaseDOM.addEventListener('click', clickEvent)
        decreaseDOM.addEventListener('click', clickEvent)
        function clickEvent(){
            console.log(this.id)
            this.id == 'increase' 
            ?   counterDOM.innerHTML = counter+=1
            :   counterDOM.innerHTML = counter-=1;
        }
        

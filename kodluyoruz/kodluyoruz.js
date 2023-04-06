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

/* 
baslik.addEventListener("copy",cuttingFunction);

function cuttingFunction(event){
  console.log("etkinlik tipi: " , event.type)
  }  */

/*
const selectBox = document.querySelector('#selectColor');
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

//DOM EVENT + LOCALSTORAGE

/*   let counter = Number(localStorage.getItem('counter')) || 0;
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
            localStorage.setItem('counter', counter)
            
        } */
 

// LOCALSTORAGE
/* 
const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('#btn');
const input = document.getElementById('item');
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

const liMaker = (text) => {
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  itemsArray.push(input.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  liMaker(input.value);
  
});

data.forEach(item => {
  liMaker(item);
});

button.addEventListener('click', function () {
  localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  itemsArray = [];
}); */

//JSON.stringify JSON.parse
/* 
var movies = ["Sezer", "Limanlar","İzmir"];

localStorage.setItem("mySelf", JSON.stringify(movies));
let kitap = JSON.parse(localStorage.getItem("mySelf"));
console.log(kitap[2]) */

//FORM İŞLEMLERİ VE PREVENTDEFAULT KULLANIMI

/* let formDOM = document.querySelector("#userForm");
let inputDOM = document.querySelector("#score");
formDOM.addEventListener("submit", formSubmit)

 function formSubmit(e){
    e.preventDefault()  //İşlemin default özelliğini kısıtlar
    console.log(inputDOM.value)
    
 } */

//filter ve map methodu kullanarak sadece evli olanların ismini büyük harf kullanarak forEach ile listeleme
   const USERS = [
    {fullName:"A kiŞisi", isMarried: false},
    {fullName:"b kİşİSi", isMarried: false},
    {fullName: "C kİşİSİ", isMarried: true},
    {fullName: "d Kİşİsİ", isMarried: true},
    
]

let Married = USERS.filter(item => item.isMarried).map(insan => insan.fullName.toUpperCase())
Married.forEach(eleman => console.log(eleman))

//Dizi içerisindeki kişilerin map metotu ile ismini yazdır, isminin ilk harfini büyük yapıp yazdır ve isminin sadece ilk harfini büyük yapıp yazdır.
const USERS2 =["seZer","cerEn","aHmet","mehmEt","sELeN"]



const usersObject = USERS2.map(user => (
   {userName: user, shortName: `${user[0].toUpperCase()}`, newName: `${user[0].toUpperCase()}${user.slice(1).toLowerCase()}`})
)
console.log("----------------------------")
usersObject.forEach(listele => console.log(`${listele.userName} - ${listele.shortName} - ${listele.newName}`))






let form = document.querySelector('#userForm');
form.addEventListener("submit", submitEvent)
const alertDOM = document.querySelector('#alert');

const alertFunction = (title, message, className="warning") => `<div class="alert alert-${className} alert-dismissible fade show" role="alert">
<strong>${title}</strong> ${message}
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
</div>`

function submitEvent(e){
e.preventDefault();
const userName = document.querySelector("#username")
const score = document.querySelector("#score")
if(userName.value && score.value){
  addItem(userName.value, score.value)
  userName.value = " "
  score.value =" "
}else{
  alertDOM.innerHTML = alertFunction("Baslik Bilgisi", "Eksik Bilgi Girdiniz.", "danger")
  }



}

{/* <li class="list-group-item d-flex justify-content-between align-items-center">
                      Cras justo odio
                      <span class="badge badge-primary badge-pill">14</span>
                    </li>  */}

const userListDOM = document.querySelector("#userList")
const  addItem = (userName, score) =>{
  let liDOM = document.createElement("li")
  liDOM.innerHTML =  `${userName} <span class="badge badge-primary badge-pill">${score}</span>`
  liDOM.classList.add('list-group-item', 'd-flex', 'justify-content-between','align-items-center')
  userListDOM.appendChild(liDOM)
}




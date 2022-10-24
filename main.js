const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const commentaire = document.querySelector('#comment');
const userlist = document.querySelector('#users');
const endroitEnd = document.querySelector('#end');


myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
    e.preventDefault();

 if(nameInput.value === '' || emailInput.value === '') {
    alert('Entrez le champ requis');
 } else {
    console.log('succes');
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`Nom: ${nameInput.value} , email: ${emailInput.value} , ${commentaire.value}`));
    userlist.appendChild(li);
    const div = document.createElement('div');

   div.appendChild(document.createTextNode(`Nom: ${nameInput.value} , ${commentaire.value}`));
    endroitEnd.appendChild(div);
    
   }

    console.log(nameInput.value);
    console.log(emailInput.value);
    console.log(commentaire.value);

}



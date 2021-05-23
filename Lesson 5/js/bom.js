const input= document.querySelector('#favchap');
const button= document.querySelector('button');
const list= document.querySelector('.list');



let inputValue = "";
input.addEventListener('input', event => { inputValue = event.target.value});


button.addEventListener('click', (event) => {
    let li = document.createElement('LI');
    let deleteButton = document.createElement('BUTTON');
    li.textContent = inputValue;
    deleteButton.textContent = '✖';
    li.append(deleteButton);
    list.append(li);
    input.value= "";
    deleteButton.addEventListener('click', ()=>{
        list.removeChild(li);
    });
});









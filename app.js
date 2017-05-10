const myTextInput = document.querySelector('input.addItemInput');
const myButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');
//const myP = document.querySelector('p.myP');

myButton.addEventListener('click', () => {

  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
    li.textContent = myTextInput.value;
    ul.appendChild(li);
    myTextInput.value = '';
});

removeItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.querySelector('li:last-child');
    ul.removeChild(li);
});

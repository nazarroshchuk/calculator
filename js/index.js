
const account = document.querySelector('.calc .display');
document.querySelectorAll('.calc .digits, .calc .operation')
  .forEach(button => button.addEventListener("click", digitOperPressed));

function digitOperPressed(event) {
  const btnText = event.target.innerText;
  account.value += btnText;
}


document.querySelector('.calc .equal')
  .addEventListener('click', eqPressed);

function eqPressed() {
  account.value = eval(account.value);
}


document.querySelector('.calc .operation')
  .addEventListener('click', clean);
function clean() {
  account.value = "";
}

document.querySelector('.calc .del')
  .addEventListener('click', delDi);
function delDi() {
  dell = account.value;
  account.value = dell.substring(0, dell.length - 1);
}
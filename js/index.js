const calculator = document.querySelector('.calc .display');
//calculator.style.backgroundColor = 'black';
document.querySelectorAll('.enter button').style.backgroundColor = 'black';


const account = document.querySelector('.calc .display');
document.querySelectorAll('.enter button')
    .forEach(button => button.addEventListener("click", digitOperPressed));

function digitOperPressed(event) {
  const btnText = event.target.innerText;
  account.value += btnText;
}
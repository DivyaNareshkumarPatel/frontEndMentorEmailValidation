const input = document.getElementById('email');
const error = document.querySelector('form');
console.log(input);
function validation() {
    const email = input.value;
    const reg = /\S+@\S+\.\S+/;
    if (!reg.test(email)) {
        error.classList.add("error");
        input.classList.add("danger");
        return false;
    }
    else{
        alert('You will be notified soon!')
    }
    return true;
  }
  input.addEventListener('input',function(){
        error.classList.remove("error");
        input.classList.remove("danger");
  })
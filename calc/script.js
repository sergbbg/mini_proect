var field = document.querySelector('.calc__input');
var btnRes = document.querySelector('.btn_result');
let deleteDigit = document.querySelector('.btn-delete');

document.querySelectorAll('.btns').forEach(function(div) {
  if (!div.onclick) 
    div.onclick = function(div){
      field.value += this.innerText; 
      
    
    }

});




function solution(){
   let p2 = field.value.replace('÷', '/').replace('×', '*');
let f2 = new Function(`return ${p2}`);
field.value = f2();
}

btnRes.addEventListener("click", solution);

function deleteLastDigit(){
field.value = field.value.slice(0, -1);
}

deleteDigit.addEventListener("click", deleteLastDigit);

document.addEventListener('keydown', function(event) {
   if (event.key == "Enter") {
      solution();
   }
 });

///добавление задач

let btn = document.querySelector(".addBtn");
let CheckBoxT = ` <span id="span" data-is-focusable="true" class="checkBox" aria-label="Пометить как завершенные" role="checkbox" aria-checked="false" tabindex="-1"><svg  class="fluentIcon ___12fm75w f1w7gpdv fez10in fg4l7m0" fill="currentColor" aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" focusable="false"><path d="M10 3a7 7 0 100 14 7 7 0 000-14zm-8 7a8 8 0 1116 0 8 8 0 01-16 0z" fill="currentColor"></path></svg><svg id="S" class=" S fluentIcon checkBox-hover ___12fm75w f1w7gpdv fez10in fg4l7m0" fill="currentColor" aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" focusable="false"><path d="M10 2a8 8 0 110 16 8 8 0 010-16zm0 1a7 7 0 100 14 7 7 0 000-14zm3.36 4.65c.17.17.2.44.06.63l-.06.07-4 4a.5.5 0 01-.64.07l-.07-.06-2-2a.5.5 0 01.63-.77l.07.06L9 11.3l3.65-3.65c.2-.2.51-.2.7 0z" fill="currentColor"></path></svg></span>`;

function add3(){
  let div = document.createElement('li');
  div.className = "list-item";
  var inputValue = document.getElementById("newList").value;
  if(inputValue != ""){
   div.innerHTML = `${CheckBoxT} <span class="text-list-item"> ${inputValue} </span>  <span class="list-remove"> \u00D7 </span> `;  
   ul.append(div);
    document.getElementById("newList").value = "";
  }
  console.log(div)
}

btn.addEventListener("click", add3);

document.addEventListener('keydown', function(event) {
  if (event.key == "Enter") {
     add3();
  }
});

///дата и время 
const today = new Date();

const dateNumberElement = document.getElementById('date-number');
dateNumberElement.innerHTML = today.getDate();

const monthNumberElement = document.getElementById('month-number');
const month = ["январь", "ферваль", "март", "апрель", "мая", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"]
monthNumberElement.innerHTML = month[today.getMonth()];

const daysOfWeek = ["Воскресенье", "понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const dayOfWeekElement = document.getElementById('day-of-week');
dayOfWeekElement.innerHTML = daysOfWeek[today.getDay()];


ul.addEventListener("click", function(event) {
  if (event.target.className != 'list-remove') return;

  let pane = event.target.closest('.list-item');
  pane.remove();

 
} ); 



let ult = document.querySelector('.MyList');

let selectorTd;

ult.addEventListener('click',  function(event){
  let target = event.target;

  while (target != this) {
    if (target.classList.contains("list-item")){
      target.classList.toggle('line');
      let t =  target.querySelector(".S")
      t.classList.toggle('visible')
    }
    target = target.parentNode;
  }
}
)

/// поисковик по задачам
const searchengine = document.querySelector('#searchengine');


searchengine.addEventListener('input', (e)=>{
        const value = e.target.value.trim()
        const searchengineItems = document.querySelectorAll('.list-item');
        const searchRegExp = new RegExp(value, 'gi');

                if (value === '') {
                  searchengineItems .forEach((e) => {
                      e.classList.remove('hide');
                  })
                  return;
              };


              
              searchengineItems .forEach((e) => {
                const innerCard = e.querySelector('.text');
                const elementText = innerCard.textContent;
                const isContainsSearchRequest = searchRegExp.test(elementText);
                if (!isContainsSearchRequest) {
                    e.classList.add('hide')
                } else {
                    e.classList.remove('hide')
                }
            })
        })

      //   const icon = document.querySelector(".icon");
      //   searchengine.addEventListener("click", H(icon)); 
      

      // function H(icon){
      //   icon.toggle("hide");
      // }

      
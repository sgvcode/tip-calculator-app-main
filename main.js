let bill = document.querySelector('.input-section__bill-input');
let billNumber = parseInt(bill.value);

let people = document.querySelector('.input-section__people-input');
let peopleNumber = parseInt(people.value);

let tipResult = document.querySelector('.results__tip-value');
let totalResult = document.querySelector('.results__total-value');

let buttons = document.querySelectorAll('.btns__button');

let alert = document.querySelector('#alert');

let tipValue = 10;

buttons.forEach(element => {
  element.addEventListener('click', event=>{
    
    //cambiar estilos
    removeActiva()
    element.classList.add('btns__button--selected');
    tipValue = parseInt(event.target.innerText.slice(0,-1));

    calculateTip();
  });
})

function removeActiva(){
  buttons.forEach(element =>{
    element.classList.remove('btns__button--selected');
  });
}

//Actualizando Bill
bill.addEventListener('input', ()=>{
  billNumber = parseFloat(bill.value);
  calculateTip()
});

//Actualizando Custom
let custom = document.querySelector('.btns__custom');
custom.addEventListener('click', ()=>{
  removeActiva()
})

custom.addEventListener('input', ()=>{
  removeActiva()
  billNumber = parseFloat(bill.value);
  tipValue = parseInt(custom.value);
  if (!isNaN(tipValue)){
    calculateTip();
  }
})

//Actualizando People
people.addEventListener('input', ()=>{
  peopleNumber = parseFloat(people.value);

  console.log(peopleNumber);

  if (peopleNumber == 0 || isNaN(peopleNumber)){
    people.style.borderColor = 'brown';
    alert.classList.add('error');  
  }else{
    alert.classList.remove('error');
    people.style.borderColor = 'hsl(189,41%,97%)';
    calculateTip();
  }
});

//Boton Reset
let resetBtn = document.querySelector('.results-section__reset');
resetBtn.addEventListener('click', ()=>{
  bill.value = "";
  billNumber = 0;
  people.value = "";
  peopleNumber = 0;
  custom.value = 'Custom';
  calculateTip();
})

function calculateTip(){
  //Calculo de Tip Amount
  if (billNumber === 0) {
    tipResult.innerText = "0";
  } else {
    tipResult.innerText = ((billNumber * tipValue / 100) / peopleNumber).toFixed(2);
  }

  //Calculo de Total
  if (peopleNumber === 0) {
    totalResult.innerText = "0";
  } else {
    totalResult.innerText = (((billNumber * tipValue / 100) + billNumber) / peopleNumber).toFixed(2);
  }
}
// VARIABLES ERROR CHECK
// Начальная сумма (неотрицательное число)
// Сумма ежемесячного пополнения (неотрицательное число)
// Срок вклада (положительное целое число месяцев)
// Валюта вклада (строка ‘RUB’/’USD’)

function error(variable) {
    console.log(`${variable} is not suitable for further processing`);
  alert(`${variable}, is not suitable`);
}

// const deposit = 100000;
// const payment = 0;
// const period = 12;
// const currency = "USD";

// ERROR CHECK:
function errorCheck(){
  if (deposit <0 ) { error(deposit);};
  if (payment <0 ) { error(payment);};
  if (period <0 && period != Math.trunc(period) ) { error(period);};
  if (currency !== 'rub' || currency !== 'usd')
  { error(currency);};
}

// реализующий свойства и функциональность вклада, который хотел бы открыть клиент. 
class Application {
  constructor(deposit, payment, period, currency){
    this.deposit = deposit;
    this.payment = payment;
    this.period =  period;
    this.currency = currency;
  }
  collectData() {
    this.deposit = +document.querySelector('#deposit').value;
    this.payment = +document.querySelector('#payment').value;
    this.period = +document.querySelector('#period').value;
    this.currency = document.querySelector('#currency').value.toString().toLowerCase();
    if (this.errorCheck();) {
      console.log('no errors');
      console.log(this.deposit, this.payment, this.period, this.currency);
    }
  }

  errorCheck(){
    if (this.deposit <0 ) { this.error(this.deposit);};
    if (this.payment <0 ) { this.error(this.payment);};
    if (this.period <0 && this.period != Math.trunc(this.period) ) { error(this.period);};
    if (this.currency !== 'rub' || this.currency !== 'usd') { error(currency);};
  }
  error(variable) {
    console.log(`${variable} is not suitable for further processing`);
    alert(`${variable}, is not suitable`);
    return false;
  }
  
}

const user1 = new Application (deposit, payment, period, currency);
console.log(user1);

//  реализующий свойства и функциональность банковского предложения по вкладу
class BankProduct { constructor() { }}

//  инициализирующийся массивом продуктов BankProduct и вычисляющий наиболее
//  выгодный вариант.
class Calculator { constructor(){} };

//  реализующий обработку нажатия на кнопку, получение введенных данных
//  и отображение результатов.
class Deposit { 
  constructor(deposit, payment, period, currency) {

  } };

const app = new Application;

const button = document.querySelector('button');
button.addEventListener('click', app.collectData);

// REQUIRED OUTPUT:
// Еврофинанс Моснарбанк	Классический	6.95	107176
// Narrow down by currency: (better done with filter())
// Filter out by minimum sum (best is with filter())

const rub = array.filter(function(item){ return item.currency === 'RUB'; });
console.log('Rub accounts:');
console.log(rub);

const minOK = rub.filter(function(item) { return item.sumMin; } );
const newOK = rub.filter((item) => item.sumMin );
console.log('Checking minimum');
console.log(minOK);
console.log(newOK);

// Option 2:
// Не перегружая страницу установите начальные параметры:
// Начальная сумма 1
// Сумма ежемесячного пополнения 10000
// Срок вклада 12
// Валюта вклада USD
// 
// После нажатия на кнопку видим результат:
// Нет подходящих вариантов

//  реализующий обработку нажатия на кнопку, получение введенных данных и отображение результатов.
class Application { // _______get user input, button event, show result in HTML
  constructor(deposit, payment, period, currency, array) { //______class constructor
    this.deposit = deposit;
    this.payment = payment;
    this.period =  period;
    this.currency = currency;
    this.array = array;
    this.createObject = () => {
      return {
        deposit: this.deposit,
        payment: this.payment,
        period: this.period,
        currency: this.currency
      }
    };
  }
  collectData() { // _______collect user inputs 
    this.deposit = +document.querySelector('#deposit').value;  
    this.payment = +document.querySelector('#payment').value;
    this.period = +document.querySelector('#period').value;
    this.currency = document.querySelector('#currency').value.toString().toLowerCase();
    // Error checking input values
    if ( this.deposit <0 ) { alert( this.deposit + ' is wrong value' ) };
    if ( this.payment <0 ) { alert( this.payment + ' is wrong value' ) }; 
    if ( this.period <0 && this.period != Math.trunc( this.period )  ) { alert( this.period + ' is wrong value' )};
    if ( !(this.currency === 'rub' ) &&  !(this.currency === 'usd' ) ) { alert( this.currency + ' is wrong value' )};

// PROBLEMA: Не вызывается метод для содания объекта с параметрами (ранее
// забранными из инпутов). Просто говорит, что такой функции нету (хотя
// пробовал и через функцию и пробовал через стрелочную итд.) 
//  идея в том чтобы создать объект и передать его в другой класс
    this.createObject();
//    console.log(this.deposit, this.payment, this.period, this.currency);
//    const usrDepo = new Deposit(this.deposit, this.payment, this.period, this.currency);
//    console.log(usrDepo);
//    const prod = new BankProduct(array, deposit);
//    console.log(prod.filterAll());
  }
  showResult(bankName, deposit, rate, result){
    const mainElement = document.querySelector('.result table');
    mainElement.innerHTML += `<tr>
      <td>${bankName}</td>
      <td>${deposit}</td>
      <td>${rate}</td>
      <td>${result}</td>
      </tr>`;
  }
}

//  реализующий свойства и функциональность банковского предложения по вкладу
class BankProduct { // find suitable bank product from the given data
  constructor(array, inquiry) {
    this.array = array;
    this.inquiry = inquiry;
  }
  filterByCurrency(array)   { return array.filter(x => x.currency == this.inquiry.currency); }
  filterByCanDeposit(array) { return array.filter(x => x.canDeposit == true); }
  filterByPeriod(array)     { return array.filter(x => x.termMax >= this.inquiry.period && x.termMin <= this.inquiry.period); }
  filterBySum(array)        { return array.filter(x => x.sumMax >= this.inquiry.deposit && x.sumMin <= this.inquiry.deposit); }
  filterAll(array) {
    let result = this.filterByCanDeposit(this.array);
    result = this.filterByPeriod(result);
    result = this.filterByCurrency(result);
    result = this.filterBySum(result);
    return result;
    // return this.filterBySum(filterByCurrency(filterByPeriod(filterByCanDeposit(this.array))));
  }
}

//  инициализирующийся массивом BankProduct и вычисляющий выгодный вариант.
class Calculator { 
  constructor(deposit, months, rate, payment){
    this.deposit = deposit;
    this.months = months;
    this.rate = rate;
    this.payment = payment;
  }

  calculateFutureValue() {
    let result = this.deposit;
    for (let increment = 1; increment < this.months; increment++) {
      result += this.deposit * this.rate;
      result += this.payment;
    }
    return result;
  }
};

// свойства и функциональность вклада, который хотел бы открыть клиент. 
class Deposit { 
  constructor(object) {
    this.deposit = object.deposit;
    this.payment = object.payment;
    this.period = object.period;
    this.currency = object.currency;
  } 
};

// Initialize the app
const app = new Application;
const button = document.querySelector('button');
button.addEventListener('click', app.collectData);

// TEST:
const usrDepo = new Deposit(app.createObject());
console.log(usrDepo);
const prod = new BankProduct(array, deposit);
console.log(prod.filterAll());

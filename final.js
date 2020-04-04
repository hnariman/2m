//  реализующий обработку нажатия на кнопку, получение введенных данных и отображение результатов.
class Application { // _______get user input, button event, show result in HTML
  constructor(deposit, payment, period, currency) { //______class constructor
    this.deposit = deposit;
    this.payment = payment;
    this.period =  period;
    this.currency = currency;
  }
  collectData() { // _______collect user inputs 
    this.deposit = +document.querySelector('#deposit').value;  
    this.payment = +document.querySelector('#payment').value;
    this.period = +document.querySelector('#period').value;
    this.currency = document.querySelector('#currency').value; // .toString().toLowerCase();
    if ( this.deposit <0 ) { alert( this.deposit + ' is wrong value' )}; // replace with error()
    if ( this.payment <0 ) { alert( this.payment + ' is wrong value' )}; // replace with error()
    if ( this.period <0 && this.period != Math.trunc( this.period ) ) { alert( this.period + ' is wrong value' )};
    if ( this.currency !== 'rub' || this.currency !== 'usd') { alert( this.currency + ' is wrong value' )};
      console.log(this.deposit, this.payment, this.period, this.currency);
    }
//  error(variable) { // _______error message if user input is incorrect
//    console.log(`${variable} is not suitable for further processing`);
//    alert(`${variable}, is not suitable`);
//    return false;
//  }

}

//  реализующий свойства и функциональность банковского предложения по вкладу
class BankProduct { // bank product functionality and parameters
  constructor(object) {
    this.bankName = object.bankName;
    this.investName = object.investName;
    this.currency = object.currency;
    this.incomeType = object.incomeType;
    this.sumMin = object.sumMin;
    this.sumMax = object.sumMax;
    this.termMin = object.termMin;
    this.termMax = object.termMax;
    this.canDeposit = object.canDeposit;
  }
  checking() {
   console.log(this.bankName);
  }
}

//  инициализирующийся массивом BankProduct и вычисляющий выгодный вариант.
class Calculator { constructor(){} };

// свойства и функциональность вклада, который хотел бы открыть клиент. 
class Deposit { 
  constructor(deposit, payment, period, currency) {

  } };
const app = new Application;
const button = document.querySelector('button');
button.addEventListener('click', app.collectData);

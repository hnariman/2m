// обработку нажатия на кнопку, получение введенных данных и отображение результатов.
class Application {
  constructor() {
    this.deposit = deposit;
    this.payment = payment;
    this.period = period;
    this.currency = currency; 
  }
  getData = () => {
    this.deposit = +document.querySelector('#deposit').value;
    this.payment = +document.querySelector('#payment').value;
    this.period = +document.querySelector('#period').value;
    this.currency = document.querySelector('#currency').value;
    this.currency = this.currency.toLowerCase();
    // Input error check
    if ( this.deposit <0 ) { alert( this.deposit + ' is wrong value' ) };
    if ( this.payment <0 ) { alert( this.payment + ' is wrong value' ) }; 
    if ( this.period <0 && this.period != Math.trunc( this.period )  ) { alert( this.period + ' is wrong value' )};
    if ( !(this.currency === 'rub' ) &&  !(this.currency === 'usd' ) ) { alert( this.currency + ' is wrong value' )};
    console.log('Application Class VALUE CHECK:'); // to be removed
    console.log(this);                // to be removed
    // console.log(array);                // to be removed
    const deposit = new Deposit(this);
    console.log(deposit);                // to be removed

    const bankProduct = new BankProduct(array, deposit);
    console.log(bankProduct);                // to be removed
    bankProduct.filter();
    this.render();

  }
  render = () => {
    const table = document.querySelector('.result');
    console.log(table);
    // let data = `<tr> <td>${bank}</td> <td>${type}</td> <td>${finalDeposit}</td> <td></td> </tr>`;
    let data = ' <tr> <td>some</td> <td>more</td> <td>new</td> <td>information</td> </tr> '                // to be removed
    table.innerHTML += data;
  }
}

// свойства и функциональность вклада, который хотел бы открыть клиент. 
class Deposit{
  constructor(obj){
    this.deposit = obj.deposit;
    this.payment = obj.payment;
    this.period = obj.period;
    this.currency = obj.currency;
  }
}

// свойства и функциональность банковского предложения по вкладу
class BankProduct{
  constructor(array, inquiry) {
    this.array = array;
    this.inquiry = inquiry;
  }
  filter = () => {
    let result = this.array.filter(x => x.currency == this.inquiry.currency);
    result = this.array.filter(x => x.canDeposit == true);
    result = this.array.filter(x => x => x.termMax >= this.inquiry.period && x.termMin <= this.inquiry.period);
    result = this.array.filter(x => x.sumMax >= this.inquiry.deposit && x.sumMin <= this.inquiry.deposit); 
    this.array = result;
    console.log(this.array);                // to be removed
    result.map(x => console.log(x));
  }
}

// инициализирующийся массивом BankProduct и вычисляющий наиболее выгодный вариант.
class Calculator{
  constructor(obj) {
    this.deposit = obj.deposit;
    this.payment = obj.payment;
    this.period = obj.period;
    this.rate = obj.rate;
  }
  calculateFutureValue() {
    let result = this.deposit;
    for (let increment = 1; increment < this.months; increment++) {
      result += this.deposit * this.rate;
      result += this.payment;
    }
    return result;
  }
}
const application = new Application;

document.querySelector('button').addEventListener('click', application.getData);




// function calculateFutureValue(deposit, days, rate, payment) {
//     const month = days / 30;
//     const monthlyRate = rate / 12 / 100;
//     let final = deposit;
// 
//     for (let increment = 1; increment < month; increment++) {
//         final += deposit * monthlyRate;
//         final += payment;
//     }
//     output(final, result);
//     return final;
}

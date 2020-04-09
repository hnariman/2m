// обработку нажатия на кнопку, получение введенных данных и отображение результатов.
class Application {
  constructor() {
    this.deposit = deposit;
    this.payment = payment;
    this.period = period;
    this.currency = currency; 
  }
  getData = () => {
    //receive input values
    this.deposit = +document.querySelector('#deposit').value;
    this.payment = +document.querySelector('#payment').value;
    this.period = +document.querySelector('#period').value;
    this.currency = document.querySelector('#currency').value;
    this.currency = this.currency.toUpperCase();
    // Input values error check
    if ( this.deposit < 0 ) { alert( this.deposit + ' is wrong value' ) };
    if ( this.payment < 0 ) { alert( this.payment + ' is wrong value' ) }; 
    if ( this.period < 0 && this.period != Math.trunc( this.period )  ) { alert( this.period + ' is wrong value' )};
    if ( !(this.currency === 'RUB' ) &&  !(this.currency === 'USD' ) ) { alert( this.currency + ' is wrong value' )};

    const deposit = new Deposit(this);
    const bankProduct = new BankProduct(array, deposit);
    bankProduct.filter();
    const calc = new Calculator(bankProduct);
    calc.calculateFV();
    this.render(calc);
  }
  render = (calc) => {
    const table = document.querySelector('table');
    table.classList.add('hidden');
    table.classList.remove('hidden');
    calc.array.forEach( x => {
      let data = `<tr> <td>${x.bankName}</td>
      <td>${x.investName}</td> 
      <td>${x.incomeType}</td> 
      <td>${x.finalValue} ${x.currency}</td> </tr>`;
      table.innerHTML += data;
    })
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
  constructor(array, deposit) {
    this.array = array;
    this.deposit = deposit;
  }
  filter = () => {
    // filter out products not suitable for the user
    this.array = this.array.filter( x => x.currency   === this.deposit.currency);
    this.array = this.array.filter( x => x.canDeposit === true);
    this.array = this.array.filter( x => x.termMin <= this.deposit.period || x.termMin == null);
    this.array = this.array.filter( x => x.termMax >= this.deposit.period || x.termMax == null);
    this.array = this.array.filter( x => x.sumMax >= this.deposit.deposit || x.sumMax == null);
    this.array = this.array.filter( x => x.sumMin <= this.deposit.deposit || x.sumMin == null);
  }
}
// инициализирующийся массивом BankProduct и вычисляющий наиболее выгодный вариант.
class Calculator{
  constructor(obj) {
    this.array = obj.array;
    this.deposit = obj.deposit.deposit;
    this.payment = obj.deposit.payment;
    this.period = obj.deposit.period;
    this.currency = obj.deposit.currency;
  }
  calculateFV = () => {
    let result = this.deposit;
    this.array.map(x => {
      for (let increment = 1; increment < this.period; increment++) {
        result += this.deposit * x.incomeType/12/100;
        result += this.payment;
        result = Math.trunc(result);
        x.finalValue = +result;
      }
      return x; 
    });
    this.array = this.array.sort( (a, b) => a.finalValue < b.finalValue );
    this.array = this.array.filter(x => x.finalValue == this.array[0].finalValue);
    return this.array;
  }
}
const application = new Application;
document.querySelector('button').addEventListener('click', application.getData);

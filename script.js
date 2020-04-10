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

    table.innerHTML = '';
    let data = '';
    const tableHeader = ` <tr> <th>Название банка </th> <th>Вклад </th> <th>Процент</th>
            <th>Итоговая сумма по истечении срока </th> </tr> `;
    calc.array.length === 0 ? alert('Нет подходящих вариантов') :
    calc.array.forEach( x => {
      data += `<tr> <td>${x.bankName}</td> <td>${x.investName}</td> 
      <td>${x.incomeType}</td> <td>${x.finalValue} ${x.currency}</td> </tr>`;
      table.innerHTML = tableHeader;
      table.innerHTML += data;
    })
    table.classList.remove('hidden');
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
    // filter out products suitable for the user
    this.array = this.array.filter( x => x.currency === this.deposit.currency);
    if (this.deposit.payment == 0) {
      this.array = this.array.filter( x => x.canDeposit === false )
    } else {
      this.array = this.array.filter( x => x.canDeposit === true )
    }
//     this.payment === 0 ?
//       this.array.filter(x => x.canDeposit === false) : this.array = this.array.filter( x => x.canDeposit === true );
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
    this.array = this.array.sort( (a, b) => (a.incomeType < b.incomeType )? 1: -1);
    this.array = this.array.filter(x => x.incomeType == this.array[0].incomeType);
    return this.array;
  }
}
const application = new Application;
document.querySelector('button').addEventListener('click', application.getData);

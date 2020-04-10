// VARIABLES ERROR CHECK
// Начальная сумма (неотрицательное число)
// Сумма ежемесячного пополнения (неотрицательное число)
// Срок вклада (положительное целое число месяцев)
// Валюта вклада (строка ‘RUB’/’USD’)

let deposit = 100000;
let payment = 0;
let period = 12;
let currency = "USD";


// REQUIRED OUTPUT:
// Еврофинанс Моснарбанк	Классический	6.95	107176

// Narrow down by currency: (better done with filter())
function isCurrency(currency, given) {
    let currencyList = [];
    for (const x in given) {
        if (given[x].currency === currency) {
            currencyList.push(given[x]);
        }
    }
    return currencyList;
}

console.log('RUB optios:');
console.log(isCurrency('RUB',array));

// Filter out by minimum sum (best is with filter())

function suitsMinimum(amount, input){
    let list = [];
    for (const x in input){
        if (amount < input[x].sumMin && amount > input[x].sumMax) {
            list.push(input[x]);
        }
    }
    return list;
}
console.log('100 000 options');
console.log(suitsMinimum(100000,array));


console.log('RUB and minimum 100000 options:');
console.log(suitsMinimum(100000,isCurrency('RUB', array)));

// const result = array.filter()
//console.log(array.filter(isUSD));

//console.log(array.filter(array.currency == 'USD'));

const rub = array.filter(function(item){ return item.currency === 'RUB'; });
console.log('Rub accounts:');
console.log(rub);


// const arrowRub = array.filter((x === 'RUB') => {return x;});
// console.log(arrowRub);

//const comprehension = [for (x of array) x];
//console.log(comprehension);


// Option 2:
// Не перегружая страницу установите начальные параметры:
// Начальная сумма 1
// Сумма ежемесячного пополнения 10000
// Срок вклада 12
// Валюта вклада USD
// 
// После нажатия на кнопку видим результат:
// Нет подходящих вариантов

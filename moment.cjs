const moment = require('moment');

const afterTomorrow = moment().add(2, 'days');

console.log('Сейчас -', moment().format('DD.MM.YYYY'));
console.log('Послезавтра -', afterTomorrow.format('DD.MM.YYYY'));
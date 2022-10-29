'use strict'

// NORMAL
// 1
const height = prompt(`Для того, щоб визначити об'єм вашого циліндра, введіть, будь ласка, його висоту у см`);
const radius = prompt(`Тепер введіть радіус у см`);
const cylinderVolume = Math.round(3.1415 * Math.pow(radius, 2) * height);
alert(`Об'єм вашого циліндру — ${cylinderVolume} см³.`);

// 2
const userName = prompt(`Напишіть, будь ласка, своє ім'я`);
alert(`Привіт, ${userName}!`);

// 3
const sideLength = prompt(`Введіть, будь ласка, довжину сторони квадрата у см`); 
alert(`Периметр вашого квадрата — ${sideLength * 4} см.`);

// 4
const distance = prompt(`Введіть, будь ласка, відстань у км між пунктами вашого призначення`);
const time = prompt(`За скільки часу вам потрібно подолати цю відстань у годинах?`);
alert(`Щоб досягти мети, вам слід рухатись зі швидкістю ${Math.round(distance / time)} км/год`);

// HARD
// 1
const userNumber = prompt(`Введіть тризначне число`);
alert(`Отримайте його "перевертень" — ${userNumber.split("").reverse().join("")}`);

// split - розбиває рядок на символи;
// reverse - перевертає массив;
// join - об'єднує масив у рядок.


// 2
const celsiusTemperature = prompt(`Cavin, type please a temperature in Celsius`);
alert(`The temperature in Fahrenheit is ${Math.round((celsiusTemperature * 9) / 5 + 32)}`);

// 3

const redHex = prompt(`Введіть насиченість червоного кольору у Hex форматі`);
const greenHex = prompt(`Введіть насиченість зеленого кольору у Hex форматі`);
const blueHex = prompt(`Введіть насиченість синього кольору у Hex форматі`);

// const redRgb = "0x" + redHex[1] + redHex[2];
// const greenRgb = "0x" + greenHex[1] + greenHex[2];
// const bluRgb = "0x" + blueHex[1] + blueHex[2];

// alert(`Ваш колір у форматі RGB = ${+redRgb}, ${+greenRgb}, ${+bluRgb}.`);  
  
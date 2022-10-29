'use strict'

// NORMAL
// 1
const height = prompt(`Для того, щоб визначити об'єм вашого циліндра, введіть, будь ласка, його висоту у см`);
const radius = prompt(`Тепер введіть радіус у см`);
const cylinderVolume = Math.round(3.1415 * Math.pow(radius, 2) * height);
alert(`Об'єм вашого циліндру — ${cylinderVolume} см³.`);

// 2
const userName = prompt(`Напишіть, будь ласка, своє ім'я`);
alert(`Привіт, ${userName}`);

// 3
const sideLength = prompt(`Введіть, будь ласка, довжину сторони квадрата у м`); 
alert(`Периметр вашого квадрата — ${sideLength * 4} м.`);

// 4
const distance = prompt(`Введіть, будь ласка, відстань у км між пунктами вашого призначення`);
const time = prompt(`За скільки часу вам потрібно подолати цю відстань?`);
alert(`Щоб досягти мети, вам слід рухатись зі швидкістю ${distance / time}`);

// HARD
// 1


// 2


// 3


// 4

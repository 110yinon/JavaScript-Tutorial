// Dates & Times
const now = new Date();

console.log(now); // Fri Sep 11 2020 12:57:13 GMT+0300 (שעון ישראל (קיץ))
console.log(typeof now);// object

// year, month, day, time
console.log('getFullYear:', now.getFullYear());// 2020
console.log('getMonth:', now.getMonth());// 8
console.log('getDay:', now.getDay());// 5
console.log('getHours:', now.getHours());// 12
console.log('getMinutes:', now.getMinutes());// 57
console.log('getSeconds:', now.getSeconds());// 13

// timestamps
console.log(now.getTime());// ms number since 1/1/1970

// date strings
console.log(now.toDateString());// 'Fri Sep 11 2020'
console.log(now.toTimeString());// '13:05:40 GMT+0300 (שעון ישראל (קיץ))'
console.log(now.toLocaleString());// '11.9.2020, 13:06:54'


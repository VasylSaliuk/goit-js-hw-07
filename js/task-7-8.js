import users from './array.js';

// Write code under this line
const calculateTotalBalance = array => array.reduce((acc, {balance}) => acc + balance, 0);

console.log(calculateTotalBalance(users)); 
// 20916


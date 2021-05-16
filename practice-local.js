// 

var users = [];

users.push('Mary', 'John', 'Zack', 'Tony');


var storingUsers = JSON.stringify(users);

console.log(localStorage.setItem('storingUsers', storingUsers));

console.log(JSON.parse(localStorage.getItem('storingUsers')));
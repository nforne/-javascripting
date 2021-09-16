let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/*const filtered = numbers.filter(function (element) {
return (element % 2 === 0);
});
console.log(filtered);*/

let filtered = numbers.filter(element => {
return element % 2 === 0;
});
console.log(filtered);


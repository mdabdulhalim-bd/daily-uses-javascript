
var products = ['Mobile', 'Laptop', 'Desktop', 'MakBook', 'Mouse', 'Keyboard'];

var numbers = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];


// let newProducts = [];
// for(let i = 0; i < products.length; i++){
//     newProducts.push(products[i]);
// }


// let newProducts = products.map(function(product){return product})
// console.log(newProducts)


// Return new array of products
let squNumber = numbers.map(squareNumber);
// console.log(squNumber);

function squareNumber(item){
    return item * item;
}

// Es6

let doubleNumber = numbers.map(item => item * item);
console.log(doubleNumber);
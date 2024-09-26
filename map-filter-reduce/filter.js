let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let newArr = numbers.filter(function(item, index, fullArr){
    console.log("item :" + item + " index :" + index + " fullArr :" + fullArr);
})



// ES6
let newItems = numbers.filter(item => item % 2 == 0);
console.log(newItems);
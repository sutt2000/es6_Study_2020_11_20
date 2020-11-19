var data = [1,2,undefined,NaN,null,""];

Array.prototype.getIndex = function() {}

// 각각 순회하면서 
data.forEach(function (value){
   console.log("value is", value);
})

console.log('----------- ');

// 문제점이있다  Array.prototype.getIndex = function() {} 이값이 추가된다.
for(let value in data) {
    console.log(data[value]);
} 
console.log(' -------------');

// in을 보완해서 나옴
for(let value of data) {
    console.log(value);
} 
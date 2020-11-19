var 후보군 = Array(45);
var 필 = 후보군.fill();

// [undefined, undefined, undefined];
// [1,2,3];
var 맵 = 필.map(function(요소, 인덱스){    
    return 인덱스;
});

console.log(맵);

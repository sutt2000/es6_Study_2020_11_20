const array = [1,2,3,4,5,6,7,8];

// 배열을 변환시키고 싶을떄 사용한다.
const squared = array.map( n => n * n);
console.log(squared);

const sdfs = 1;

const items = [
    {
        id: 1,
        text: 'hello'
    },
    {
        id: 2,
        text: 'bye'
    }
];

const texts = items.map(item => item.text);

console.log(texts);


const superheroes = ['아이언맨','캡틴 아메리카','토르','닥터 스트레인지'];
const index = superheroes.indexOf('닥터 스트레인지');
console.log(index);


// 만약에 안에들어있는게 객체이거나 특정 조건을 확인할떄는 indexOf사용할 수 없다 -1이 나오면 없다이다
const todos = [
    {
        id:1,
        text: '자바스크립트',
        done: true 
    },
    {
        id:2,
        text: '함수 배우기',
        done: true ,
    },
    {
        id:3,
        text: '객체와 배열 배우기',
        done: true ,
    }
]

// const index2 = todos.indexOf(1);
// findIndex는 객체이거나 특정 조건을 확인할떄 에 넣는 인수는 는 함수이다 조건으로 찾는 함수이다  
const index2 = todos.findIndex(todo => todo.id === 1 )
console.log(index2);

// find는 값 자체를 반환한다!!! 
const index3 = todos.find(todo => todo.id === 1 )
console.log(index3);








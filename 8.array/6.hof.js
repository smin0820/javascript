const fruits = ['🍌', '🍓', '🍇', '🍓'];

// 배열을 돌면서 원하는것을 할 때
fruits.forEach((value) => {
    console.log(value);
});

// 조건에 맞는(콜백함수) 아이템을 찾을 때 
// find: 제일 먼저 조건에 맞는 아이템을 반환
const item1 = { name: '🍕', price: 2 };
const item2 = { name: '🍜', price: 3 };
const item3 = { name: '🍣', price: 1 };
const products = [item1, item2, item3, item2];

let result = products.find((value) => value.name === '🍜');
console.log(result);

// findIndex: 제일 먼저 조건에 맞는 아이템의 인덱스를 반환
result = products.findIndex((value) => value.name === '🍜');
console.log(result);                      // { name: '🍜', price: 3 }

// 배열의 아이템들이 부분적으로 조건(콜백함수)에 맞는지 확인
// 배열중에 하나라도 조건에 맞으면 true 출력
result = products.some((value) => value.name === '🍜');
console.log(result);                      // true

// 배열의 아이템이 모두 조건에 맞는지?
result = products.every((value) => value.name === '🍜');
console.log(result);                      // false

// 내가 원하는 조건만 뽑아내서 새로운 배열로 만듬
result = products.filter((value) => value.name === '🍜');
console.log(result);                      // [ { name: '🍜', price: 3 }, { name: '🍜', price: 3 } ]

console.clear();

// Map 배열의 아이템을 각각 다른 아이템으로 매핑할 수 있는, 변환해서 새로운 배열 생성!
const nums = [1, 2, 3, 4, 5];
result = nums.map((item) => item * 2);
console.log(result);            // [ 2, 4, 6, 8, 10 ]

result = nums.map((item) => {
    if (item % 2 === 0) {
        return item * 2;
    } else {
        return item;
    }
});
console.log(result);            // [ 1, 4, 3, 8, 5 ]

// flatMap
result = nums.map((item) => [1, 2]);
console.log(result);

result = nums.flatMap((item) => [1, 2]);
console.log(result);

result = ['dream', 'coding'].flatMap((text) => text.split(''));
console.log(result);

// sort 배열의 아이템들을 정렬
// 문자열 형태의 오름차순으로 요소를 정렬하고, 기존의 배열을 변경
const texts = ['hi', 'abc'];
texts.sort();
console.log(texts);

const numbers = [0, 5, 4, 2, 1, 10];
// 0보다 작으면 - 오름차순
// 0보다 크면 - 내림차순
numbers.sort((a, b) => a - b);
console.log(numbers);

// reduce 배열의 요소들을 접어서 값을 하나로!
result = [1, 2, 3, 4, 5].reduce((sum, value) => (sum += value), 0);
console.log(result);

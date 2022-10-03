// Iterable 하다는건! 순회가 가능하다는 것
// [Symbol.iterator](): Iterator;
// 심볼정의를 가진 객체나, 특정 함수가 Iterator를 리턴한다는 것은
// 순회 가능한 객체 라는걸 알수 있음
// 순회가 가능하면 무엇을 할 수 있나? for..of, spread
const array = [1, 2, 3];
for (const item of array) {
    console.log(item);
}

const obj = { 0: 1, 1: 2 };
for (const item in obj) {  // key를 출력 
    console.log(item);
}

const iterator = array.values();
// console.log(iterator.next());  // { value: 1, done: false } 값: 1, 끝인가요? : false
// console.log(iterator.next());  // { value: 2, done: false }
// console.log(iterator.next().value);  // 3
// console.log(iterator.next().value);  // undefined

while (true) {
    const item = iterator.next();
    if (item.done) break;
    console.log(item.value);
}
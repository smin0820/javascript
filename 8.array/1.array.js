// 배열 생성 방법
// 1 배열 클래스 생성자
let array = new Array(2);
console.log(array);
// 2
array = new Array(1, 2, 3);
console.log(array);
// 3 static 함수
array = Array.of(1, 2, 3, 4, 5);
console.log(array);
// 4 배열 리터럴
const anotherArray = [1, 2, 3]
console.log(anotherArray);
// 5 복붙이라고 생각하면됨
array = Array.from(anotherArray);
console.log(array);

array = Array.from('text');
console.log(array);

// 일반적으로 배열은 동일한 메모리 크기를 가지며, 연속적으로 이어져 있음
// 하지만 자바스크립트에서의 배열은 연속적으로 이어져 있지 않음
// object와 유사함
// 자바스크립트의 배열은 타언어 배열의 동작을 흉내낸 특수한 객체다.
// 이것을 보완하기 위해 타입이 정해져 있는 타입 배열이 있음 (Typed Collections)

array = Array.from({
    0: '안',
    1: '녕',
    2: '하',
    3: '세',
    4: '요',
    length: 5
});
console.log(array);

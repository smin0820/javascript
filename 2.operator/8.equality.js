// 동등 비교 관계 연산자 Equality Operators
//  == 값이 같음
// != 값이 다름
// === 값과 타입이 둘다 같음
// !== 값과 타입이 다름
console.log(2 == 2);
console.log(2 != 2);
console.log(2 != 3);
console.log(2 == '2');  // true
console.log(2 === '2');  // false

const obj1 = {
    name: 'js'
};

const obj2 = {
    nmae: 'js'
};

console.log(obj1 == obj2); // false
// false인 이유는 메모리주소가 다르기 때문!
console.log(obj1 === obj2); // false

console.log(obj1.name == obj2.nmae);   // true
console.log(obj1.name === obj2.nmae);  // true

let obj3 = obj2;   // 메모리주소와 값이 같이 때문!
console.log(obj3 == obj2);     // true
console.log(obj3 === obj2);    // true

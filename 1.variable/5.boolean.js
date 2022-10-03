// 불리언 타입 예제
let isFree = true;
let isActivated = false;
let isEntrolled = true;
console.log(isActivated);

console.clear();
// Falshy 거짓인 값
console.log(!!0);
console.log(!!-0);
console.log(!!'');      // 비어있는 문자열
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

// Truthy 참인 값
console.log(!!1);
console.log(!!-1);
console.log(!!'text');
console.log(!!{});        // object
console.log(!!Infinity);
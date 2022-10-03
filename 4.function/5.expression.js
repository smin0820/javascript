// 함수 선언문 function name() { }
// 함수 표현식 const  name = function() { }
let add = function (a, b) {
    return a + b;
};
console.log(add(1, 2));

// 화살표 함수 const name = () => {}
add = (a, b) => {
    return a + b;
};
console.log(add(1, 3));

// 생성자 함수 cosnt object = new Function(); // 뒤에서 설명

// IIFE (Immedicately-Invoked Function Expressions) 즉각표현함수 표현식
(function run() {
    console.log('표현');
})();
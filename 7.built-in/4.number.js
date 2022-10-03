const num1 = 123;
const num2 = new Number(123);
console.log(num1);
console.log(num2);

console.log(Number.MAX_VALUE);

// 지수표기법 (매우 크거나 작은 숫자를 표기할 때 사용, 10의 n 승으로 표기)
const num3 = 102;
console.log(num3.toExponential());  //1.02e+2
// e+2 = 10의 2승

// 반올림하여 문자열로 변환
const num4 = 1234.12;
console.log(num4.toFixed());  // 문자열 1234


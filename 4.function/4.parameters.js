// 매개변수의 기본값은 undefined
// 매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장됨
// 매개변수 기본값 Default Parameters a = 1, b = 1
function add(a, b) {
    console.log(a);
    console.log(b);
    console.log(arguments);
    return a + b;
};

add(1, 2);

// Rest 매개변수 Rest Parameters
function sum(a, b, ...number) {
    console.log(a);
    console.log(b);
    console.log(number);
};
sum(1, 2, 3, 4, 5, 6, 7);
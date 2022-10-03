// 함수내부에서 외부로부터 주어진 Parameter의 값을 변경하는 것은 X
// 상태변경이 필요한 경우에는, 새로운 상태(오브젝트, 값) 만들어서 반환해야 함.
// 원시값 - 값에 의한 복사
// 객체값 - 참조에 의한 복사 (메모리주소)
function display(num) {
    num = 5;
    console.log(num);
}
const value = 4;
display(value);             // 5
console.log(value);         // 4

// 최악의 예제
function displayObj(obj) {
    ellie.name = 'Bob'; // 외부로 부터 주어진 parameter를 내부에서 변경 X
    console.log(obj);
}
const ellie = { name: 'Ellie' };
displayObj(ellie);
console.log(ellie);

// 함수 내부에서 무언가를 수정해야 한다면
// 1. 함수 이름 변경    2. 반환할 떄 새로운 object 만들기!

function changeName(obj) {
    return { ...obj, name: 'Bob' };
}
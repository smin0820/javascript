function add(a, b) {
    return a + b;
}
// sum에게 add함수 메모리 주소를 할당 
const sum = add;  // sum, add 같은 주소값 저장됨

console.log(sum(1, 2));
console.log(add(1, 2));
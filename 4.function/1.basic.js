// 사용예제 1
function add(num1, num2) {
    console.log('function');
    return num1 + num2;
}

const result = add(1, 3);
console.log(result);

// 사용예제 2
function fullName(fisrtName, lastName) {
    return `${fisrtName} ${lastName}`

}

let lastName = '홍';
let fisrtName = '길동';
console.log(fullName(fisrtName, lastName));

let lastName2 = '장';
let fisrtName2 = '지수';
console.log(fullName(fisrtName2, lastName2));

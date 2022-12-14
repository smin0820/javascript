const fruits = ['π', 'π', 'π', 'π'];

// λ°°μ΄μ λλ©΄μ μνλκ²μ ν  λ
fruits.forEach((value) => {
    console.log(value);
});

// μ‘°κ±΄μ λ§λ(μ½λ°±ν¨μ) μμ΄νμ μ°Ύμ λ 
// find: μ μΌ λ¨Όμ  μ‘°κ±΄μ λ§λ μμ΄νμ λ°ν
const item1 = { name: 'π', price: 2 };
const item2 = { name: 'π', price: 3 };
const item3 = { name: 'π£', price: 1 };
const products = [item1, item2, item3, item2];

let result = products.find((value) => value.name === 'π');
console.log(result);

// findIndex: μ μΌ λ¨Όμ  μ‘°κ±΄μ λ§λ μμ΄νμ μΈλ±μ€λ₯Ό λ°ν
result = products.findIndex((value) => value.name === 'π');
console.log(result);                      // { name: 'π', price: 3 }

// λ°°μ΄μ μμ΄νλ€μ΄ λΆλΆμ μΌλ‘ μ‘°κ±΄(μ½λ°±ν¨μ)μ λ§λμ§ νμΈ
// λ°°μ΄μ€μ νλλΌλ μ‘°κ±΄μ λ§μΌλ©΄ true μΆλ ₯
result = products.some((value) => value.name === 'π');
console.log(result);                      // true

// λ°°μ΄μ μμ΄νμ΄ λͺ¨λ μ‘°κ±΄μ λ§λμ§?
result = products.every((value) => value.name === 'π');
console.log(result);                      // false

// λ΄κ° μνλ μ‘°κ±΄λ§ λ½μλ΄μ μλ‘μ΄ λ°°μ΄λ‘ λ§λ¬
result = products.filter((value) => value.name === 'π');
console.log(result);                      // [ { name: 'π', price: 3 }, { name: 'π', price: 3 } ]

console.clear();

// Map λ°°μ΄μ μμ΄νμ κ°κ° λ€λ₯Έ μμ΄νμΌλ‘ λ§€νν  μ μλ, λ³νν΄μ μλ‘μ΄ λ°°μ΄ μμ±!
const nums = [1, 2, 3, 4, 5];
result = nums.map((item) => item * 2);
console.log(result);            // [ 2, 4, 6, 8, 10 ]

result = nums.map((item) => {
    if (item % 2 === 0) {
        return item * 2;
    } else {
        return item;
    }
});
console.log(result);            // [ 1, 4, 3, 8, 5 ]

// flatMap
result = nums.map((item) => [1, 2]);
console.log(result);

result = nums.flatMap((item) => [1, 2]);
console.log(result);

result = ['dream', 'coding'].flatMap((text) => text.split(''));
console.log(result);

// sort λ°°μ΄μ μμ΄νλ€μ μ λ ¬
// λ¬Έμμ΄ ννμ μ€λ¦μ°¨μμΌλ‘ μμλ₯Ό μ λ ¬νκ³ , κΈ°μ‘΄μ λ°°μ΄μ λ³κ²½
const texts = ['hi', 'abc'];
texts.sort();
console.log(texts);

const numbers = [0, 5, 4, 2, 1, 10];
// 0λ³΄λ€ μμΌλ©΄ - μ€λ¦μ°¨μ
// 0λ³΄λ€ ν¬λ©΄ - λ΄λ¦Όμ°¨μ
numbers.sort((a, b) => a - b);
console.log(numbers);

// reduce λ°°μ΄μ μμλ€μ μ μ΄μ κ°μ νλλ‘!
result = [1, 2, 3, 4, 5].reduce((sum, value) => (sum += value), 0);
console.log(result);

// const multiple = {
//     [Symbol.iterator]() {
//         const max = 10;
//         let num = 0;
//         return {
//             next() {
//                 return { value: num++ * 2, done: num > max }
//             }
//         }
//     }
// };

function* multipleGenerator() {
    try {
        for (let i = 0; i < 10; i++) {
            console.log(i);
            yield i ** 2;
        }
    } catch (error) {
        console.log(error);
    }
}

const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value, next.done);

// multiple.return(); // 나이제 끝낼거야 undefined true
multiple.throw('error!');
next = multiple.next();
console.log(next.value, next.done);
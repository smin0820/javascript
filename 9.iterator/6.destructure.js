// 구조 분해 할당 Destructuring Assignment
// 데이터 뭉치(그룹화)를 쉽게 만들수 있다

const fruit = ['🍌', '🍊', '🥝', '🍓'];
const [first, second, ...others] = fruit;
console.log(first);
console.log(second);
console.log(...others);

const point = [1, 2, 8];
const [x, y, z = 0] = point;
console.log(x);
console.log(y);
console.log(z);

function createEmoji() {
    return ['apple', '🍎'];
}
const [name, emoji] = createEmoji();
console.log(name, emoji);

const min = { name: 'min', age: 25, job: 'student' };
function display({ name, age, job }) {
    console.log(name);
    console.log(age);
    console.log(job);
}

display(min);


// Quiz
const prop = {
    name: 'Button',
    styles: {
        size: 20,
        color: 'black',
    },
};

function changeColor({ name, styles, styles: { size, color } }) {
    console.log(color);
    console.log(styles);
}
changeColor(prop);
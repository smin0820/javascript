// 주어진 숫자 만큼 0부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행해야 함
// 5, 순회하는 숫자를 다 출력하고 싶음
// 5, 순회하는 숫자의 두배값을 다 출력하고 싶음
// function iterative(max, action)
const log = (num) => console.log(num);
const double = (num) => console.log(num * 2);

function iterate(max, action) {
    for (let i = 0; i < max; i++) {
        action(i);
    }
}

iterate(3, (num) => console.log(num));
iterate(3, (num) => console.log(num * 2));

setTimeout(() => {
    console.log('3초 뒤에 실행하세요!');
}, 3000);
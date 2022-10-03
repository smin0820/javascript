// 객체를 손쉽게 만들 수 있는 템플릿
// 1. 생성자 함수 (오래된 방법)
// 2. 클래스 ✨

// 클래스 class
class Fruit {
    constructor(name, emoji) {
        this.name = name;
        this.emoji = emoji;
    }
    display = () => {
        console.log(`${this.name}: ${this.emoji}`);
    };
}

// apple은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit('apple', '🍎');
const orange = new Fruit('orange', '🍊');

console.log(apple);
console.log(orange);
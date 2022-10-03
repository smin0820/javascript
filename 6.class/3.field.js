// (한번 입력한 인스턴스 내용을 그 후 변경 불가)
// 접근 제어자 - 캡슐화
// private(#), public(기본), protected
class Fruit {
    #name;
    #emoji;
    #type = '과일';
    constructor(name, emoji) {
        this.#name = name;
        this.#emoji = emoji;
    }
    display = () => {
        console.log(`${this.#name}: ${this.#emoji}`);
    };
}
const apple = new Fruit('apple', '🍎');
// apple.#name = '오렌지'; // #field 외부에서 접근불가!
console.log(apple);
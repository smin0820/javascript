class Animal {
    constructor(color) {
        this.color = color;
    }
    eat() {
        console.log('먹자!');
    }
    sleep() {
        console.log('잔다!');
    }
}

class Tiger extends Animal { }
const tiger = new Tiger('노랑색');
console.log(tiger);

class Dog extends Animal {
    constructor(color, ownerName) {
        super(color);
        this.ownerName = ownerName;
    }
    play() {
        console.log('놀자~!');
    }
    // 오버라이딩 overriding
    eat() {
        super.eat();
        console.log('강아지가 먹는다!');
    }
}
const dog = new Dog('검은색', '민이');
console.log(dog);
dog.play();
dog.eat();
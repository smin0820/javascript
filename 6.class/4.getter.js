// 접근자 프로퍼티 (Accessor Property)
class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // 접근
    get fullName() {
        return `${this.lastName} ${this.firstName}`;
    }
    set fullName(value) {
        console.log('set', value);
    }
};

const student = new Student('수지', '배');
student.firstName = '안나';
console.log(student.firstName);
console.log(student.fullName);
student.fullName = '길동 홍';
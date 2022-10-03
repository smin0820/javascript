//문자열타입
let string = '안녕하세요';
string = `안녕!`;
console.log(string);

//특수 문자 출력하는법
string = '"안녕!"';
console.log(string);

string = '안녕!\n해위~~~\t\t 내 이름은\\';
console.log(string);

//템플릿 리터럴 (Template Literal) ``
let id = '민아';
let greetings = "'안녕!, " + id + " \n오늘은 뭐해?'";
console.log(greetings);

greetings = `'안녕!, ${id}
오늘은 뭐해?'`;
console.log(greetings);
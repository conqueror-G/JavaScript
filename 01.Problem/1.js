// 1. 배열의 삭제

// 다음 배열에서 400, 500을 삭제한 나머지를 반환해주세요.

const input = [100, 200, 300, 400, 500];

const output = input.splice(0, 3);

console.log(input); // [400, 500]
console.log(output); // [100, 200, 300]

// splice method를 사용하면 원본 배열을 수정하는 결과가 생기지만
// slice method를 사용하면 원본 배열을 수정하지 않는다.

// 다만, ES6 문법 중 Spread operator를 사용하여 깊은 복사를 하면,
// splice와 slice는 같은 방법으로 사용했을 때, 같은 output을 낸다.

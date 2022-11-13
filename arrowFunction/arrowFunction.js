// 함수의 용도 2가지
/**
 * @description
 * 코드를 기능으로 묶고 싶을 때, 사용
 */
function 콘솔기능 () {
  console.log("console 기능")
  console.log("로그 찍는 기능")
}

/**
 * @description
 * 입력 출력 결과를 만들 때, 사용
 */
function 계산기 (a, b) {
  return a + b
}

/**
 * @description
 * Arrow Function으로 쓰는 장점 3가지
 * 1. 직관적이다.
 * 2. 인자가 1개 일 때, 소괄호 생략이 가능하다
 * 3. 표현식이 한 줄이면, 중괄호 생략이 가능하다
 */
const 함수 = a => a + 1

// 다만 Arrow Function안에서 this 값에 주의가 필요하다.
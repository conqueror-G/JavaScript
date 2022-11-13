/**
 * @description
 * this의 뜻
 * 첫 번째, window
 */
console.log(this) // window 객체

function 함수() {
  console.log(this) // window 객체
}

/**
 * @description
 * this의 뜻 
 * 두 번째, 오브젝트 내 일반 함수 안에서 쓰면?
 * 정답 : 메서드가 동작하고 있는 오브젝트
 * 사실은 첫 번째 뜻과도 같음 
 */
const 오브젝트 = {
  data: 'kim',
  함수 : function() {
    console.log(this)
  }
}

/**
 * @description
 * 심화 1
 * 중첩된 오브젝트 내의 메서드 안에서의 this 값은? 
 * 정답: 메서드가 동작하고 있는 오브젝트 => data 오브젝트
 */
const 심화1오브젝트 = {
  data: {
    함수 : function() {
      console.log(this)
    }
  }
}

console.log(
  {
  함수 : function() {
    console.log(this)
    }
  }
)

/**
 * @description
 * 심화 2
 * 화살표 함수 안에서의 this는?
 * 정답 : 오브젝트 밖에 있는 this 
 */

const 심화2오브젝트 = {
  data: {
    함수: () => console.log(this)
  }
}

/**
 * @description
 * this의 뜻 
 * 세 번째, 인스턴스 안에서 쓰면, 새로 생성되는 오브젝트를 뜻한다. 
 */
function 인스턴스() {
  this.이름 = 'kim'
}

const 인스턴스_오브젝트 = new 오브()

/**
 * @description
 * this의 뜻 
 * 네 번째, 이벤트 리스너
 */
document.getElementById('버튼').addEventListener('click', function() {
  console.log(this) // e.currentTarget
})

/**
 * @description
 * 심화 
 * 화살표 함수 안에서 this
 * 상위에 있던 this 값을 가져온다.
 * 옛날엔 bind()로 가져오거나 했던 문법이 대체됬음
 */
const 화살표함수오브젝트 = {
  data: [1, 2, 3],
  함수: function() {
    console.log(this)
    화살표함수오브젝트.data.forEach(() => console.log(this))
  }
}
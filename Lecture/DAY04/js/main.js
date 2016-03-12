// main.js

// Javascript Closure
// 클로저란?
// 함수가 실행된 후에 함수를 반환하는 경우
// 반환된 함수(클로저)가 이미 실행되어 더 이상 메모리에
// 상주하지않아야 할 실행된 함수의 영역(Scope)을
// 탐색할 수 있는 것을 말한다.

// 함수 리터럴을 변수 outerFn에 참조
// 즉, outerFn 변수는 함수의 포인터가 된다.
var outerFn = function() {
    // 함수를 반환
    // var innerFn = function() {};
    // 공개처리 Public
    // 보안처리 Private
    var scope = 'outerFn의 공간 지역 변수(비공개) scope';
    var innerFn = function() {
        return '나는 innerFn으로 이미 실행되어 소멸되어야 했을 ' + scope + '에 접근할 수 있다.';
    };
    // 함수 반환
    return innerFn;
};

var i_fn = outerFn(); // 함수 실행

// console.log( i_fn() ); // '나는.... 있다.'


// ------- 실습 예제

// 초기화 변수 값이 0인데
// 사용자가 5를 더 하든..
// 사용자가 10을 더 하든...
// 사용자가 -20을 더 하든 ...
// 기존 기억이 유지된 상태에서 연산이 처리되는 기능이 필요하다.

// #2. 초기 변수 설정 (전역으로 이동)
// 원하는 프로그래밍 처리는 되나, 전역을 오염시키는
// 안티패턴을 실행한 결과이므로 권장되지 않는다.
// var count = 0;

// function addNum(number) {
//     // #1. 초기 변수 설정
//     // 함수 실행 시, 계속 초기화 되어 원하는 프로그래밍이 처리되지 않는다.
//     // var count = 0;
//     // 검증: 전달인자 데이터 유형이 숫자인지...
//     if ( typeof number !== 'number' ) {
//         throw {
//             'name': 'Error',
//             'message': '숫자가 아닙니다.'
//         };
//     }
//     return count += number;
// }

// #3. 문제 해결을 위한 클로저 함수 활용
var initCount = function(initValue) {
    // initCount 함수 영역의 지역 변수
    var count = initValue || 0; // 초기화 값을 설정하는 구문
    // initCount 함수 영역에 선언된 지역 함수를 반환 (클로저 함수)
    return function(number) {
        if ( typeof number !== 'number' ) {
            throw {
                'name': 'Error',
                'message': '숫자가 아닙니다.'
            };
        }
        return count += number;
    };
}

// addNum() 함수를 수행하기 전에 초기 값을 설정하는
// initCount() 함수를 실행
var addNum = initCount(-20);

console.log( addNum(3) );
console.log( addNum(6) );
console.log( addNum(-12) );
console.log( addNum(1) );

// console.log( count );
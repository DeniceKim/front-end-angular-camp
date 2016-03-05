/**
 * --------------------------------
 * DOM Helper Library
 * ----------------------------- */
// 문서객체를 손쉽게 선택할 수 있도록 도와주는 함수
function query(selector, context) {

    // 만약 사용자가 context 설정 값을 전달하지 않은 경우라면?
    // if ( typeof context === 'undefined' ) {
    if ( !context ) {
        context = document;
    }

    // 만약 전달받은 context가 문자 데이터 유형이라면?
    if (typeof context === 'string') {
        context = query(context);
    }

    return context.querySelectorAll(selector);
}

// 리스트(집합)를 반복 순환하여 처리하는 헬퍼 함수
function each(data, callback) {
    // 검증. data 전달 받은 값이 배열 또는 유사 배열인지를 확인
    if ( !data.length || typeof data === 'string' ) {
        console.error('배열 또는 유사배열 데이터 유형만 처리가 가능합니다.');
        return; // 함수 종료
    }

    if ( data.push ) {
       // 조건 1. data 유형이 배열이라면
       data.forEach(callback);
    } else {
        // 조건 2. data 유형이 유사배열이라면
        // 배열 프로토타입 객체의 forEach 메소드 빌려쓰기
        [].forEach.call(data, callback);
    }
}
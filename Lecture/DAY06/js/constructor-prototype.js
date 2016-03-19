/*! constructor-prototype.js © yamoo9.net, 2016 */

/**
 * 클래스 기반 언어 (엄격한 정적 자료형 언어)
 * "객체 생성"을 목적으로 클래스 -> 인스턴스
 *
 * 함수형,
 * 객체 생성 === 매우 쉽다.
 * 클래스 방식 모방(생성자, 프로토타입), 상속, 객체 생성/합성
 * JSON, JSONP
 * MVC, MVVM
 *
 * UI Components
 * - Navigation
 * - Tab Menu
 * - Button
 * - Slide Menu
 * - Pagenation
 * - Breadcomb
 */

// 네이티브 생성자 (굳이 필요하지 않다면... 리터럴 사용)
// 필요한 경우, 정규 표현식 같은 경우에 필터링할 표현식을
// 당장 어떤 것인지 알 수 없을 때 (변수로 받을 때)
// 이런 경우는 정규 표현식의 생성자를 사용해야 한다.

/**
 * --------------------------------
 * 자바스크립트의 객체 생성 방법
 * 1. 객체 리터럴 표현식을 사용하여 생성
 * 2. 생성자를 사용해서 객체를 생성하는 방법
 * ----------------------------- */

// 객체 리터럴 표현식을 사용하여 생성
var yamoo9 = {}; // 네임스페이스 객체(전역객체)

// 네임스페이스의 하위 객체 생성
yamoo9.utils = {};
yamoo9.utils.array = {};



// 생성자를 사용해서 객체를 생성하는 방법
// 생성자 함수(Constructor Function)
// 함수는 일급 객체, 즉 객체이므로 속성에 접근/추가/제거 하기가 용이
// 생성된 인스턴스 객체가 개별적으로 소유하는 멤버를 할당할 때
// 내부에 멤버를 선언하게 된다.
function Navigation() {
    // this = 생성자가 객체를 생성했을 때, 생성된 객체를 참조
    // this
}

// 생성자 프로토타입(원형) 객체
// 재사용되는 공통된 멤버를 선언할 때 사용한다.
Navigation.prototype; // {}

// 프로토타입 객체에서 생성자를 참조하는 방법
Navigation.prototype.constructor;

// 생성자를 통해 객체를 생성
// gnb, lnb 메모리에 할당된 Navigation 객체 인스턴스...
var gnb = new Navigation(),
    lnb = new Navigation(),
    fnb = new Navigation();

// 생성된 인스턴스 객체는 자신을 생성한 생성자를 참조할 수 있는 속성이 존재
gnb.constructor === Navigation;
lnb.constructor === Navigation;
fnb.constructor === Navigation;

// 프로토타입 원형 객체에 동적으로 기능 추가가 가능하다.
Navigation.prototype.activation = function() {};
Navigation.prototype.deactivation = function() {};
Navigation.prototype.autoPlay = function() {};

// 프로토타입 원형 객체에 연결되어 있는 생성자로부터 생성된 객체 인스턴스는
// 그 능력(기능)을 공유한다. (링크되어 있다)

console.dir( gnb );
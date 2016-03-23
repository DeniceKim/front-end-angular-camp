/**
 * --------------------------------
 * 자바스크립트의 코드 재사용 패턴
 * ----------------------------- */

// 1.
// 클래스 방식 vs 클래스가 아닌 방식

// JAVA
// Class 기반의 OOP
// 객체 지향 프로그래밍의 한 줄기
// Person yamoo9 = new Person();

// Javascript
// 세상에서 가장 잘못 알려지고, 사용되는 언어
// Classless OOP
// 객체 지향 프로그래밍의 다른 줄기
// Prototype OOP
// var yamoo9 = new Person();

// ---------------------------------------

// 2.
// 클래스 방식 상속을 흉내내기
// 코드를 재사용하는데 있어서 가장 많이 거론되는 방식이 "상속(Inheritance)"
// 클래스 기반 언어에서는
// 클래스 → 인스턴스(객체) - "유일한 방법"

// 프로토타입 기반 언어에서는
// 생성자 (클래스: 설계도 유사) → 객체
var pen = new Object();
// 객체 리터럴 사용
var mouse = {};
// 클래스 기반 언어를 모방
// 다른 언어를 사용하던 사람들이 자바스크립트의 특징을 외면한 채
// 자신들이 쓰던 언어와 유사한 방법으로 사용할 수 있도록 왜곡한 방법론.
// 가급적이면 클래스 기반을 모방 방법보다는 자바스크립트 본연의 방법을
// 사용하는 것을 권장.

// 자바스크립트에서 클래스 방식을 흉내내기
// 상속이란?
// 부모 객체 → 자식 객체 (부모의 기능을 물려 받는 것을 말한다)
// 생성자(클래스와 유사)
var Parent = function(name) {
    // 생성자 자신의 멤버
    this.name = name || 'Adam';
};

// 생성자의 프로토타입 객체(재사용 가능한 멤버를 담아두는 공간)
Parent.prototype.say = function() {
    // 프로토타입 멤버
    return this.name;
};

var Child = function(name) {
    // 현재 비워져 있음
};

// Child.prototype; // 빈 객체 상태

// 부모의 능력을 자식에게 상속
// inherit() 함수는 자바스크립트에 내장되어 있지 않다.
// 즉, 네이티브 구현이 되어 있지 않다. (기본적으로는 사용 불가)
$inherit( Parent, Child );

// --------------------------------------------

// 부모 생성자를 통해 인스턴스 객체 생성
// Object.prototype > Parent.prototype > papa
var papa = new Parent();
// {
//      'name': 'Adam',
//      '__proto__': {
//          'say': function(){}
//      }
// }

// console.log( 'papa:', papa );


// 자식 생성자를 통해 인스턴스 객체 생성
// 자식 인스턴스 객체가 상속받은 부모 객체의 능력을 소유하고 있는가?
var kid = new Child();
console.log('kid.name: ', kid.name);
console.log('kid.say(): ', kid.say());

console.dir(kid);
// {
//      __proto__: {
//          name: 'Adam',
//          __proto__: {
//              say: function() {}
//          }
//      }
// }
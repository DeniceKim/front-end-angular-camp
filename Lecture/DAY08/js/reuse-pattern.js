// 객체 생성(코드를 재사용하는 것이 목표)
// 클래스 방식(모방)
// 클래스가 아닌 방식(프로토타입 상속, 객체 속성 복사, 믹스-인, 메소드 빌려쓰기)
// 클래스 방식 상속 패턴 - 5단계 실습

function Parent(member) {
    this.member = member;
}
// 재사용을 목적으로 하는 멤버 -> 프로토타입
Parent.prototype.method = function() {};

// 상속
// 2.
function Child() {
    // 비어있는 생성자 함수
    // 부모 생성자 함수를 빌려쓰기
    // Parent.apply(this, arguments);
}

// 상속
// 1.
function inherit(Parent, Child) {
    // Child.prototype = new Parent();
    // 상속
    // 4.
    // 프로토타입 할당
    Child.prototype = Parent.prototype;
}

// 상속
// 3.
// 자식 생성자의 프로토타입에 부모 생성자를 통해 만들어진 객체를 할당
// +
// 부모 생성자를 빌려쓰는 패턴
inherit(Parent, Child);

var kid = new Child('member');

// 상속
// 5.
function inheritNext(Parent, Child) {
    // 프록시 패턴
    // 임시 생성자 함수를 프록시로 사용하는 패턴
    function F() {}
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.__super__ = Parent.prototype;
    // 자신을 생성한 생성자를 참조하는 변수를 제대로 연결
    Child.prototype.constructor = Child;
}


// $class() 헬퍼 함수
// 클래스를 생성하는 함수를 사용하는 방법
// function Model() {}
// Model.prototype = {};

// function SuperModel() {}
// inheritNext(Model, SuperModel);

// 클래스 방식의 상속 패턴을 사용해서 헬퍼 함수를 생성
function $class(desc, SuperClass) {
    'use strict';
    var Class, F;
    // 1. 생성자 정의
    Class = function() {
        // 2번째 살펴 본 패턴
        // 슈퍼 클래스를 빌려쓰는 패턴
        // 슈퍼 클래스에 접근하는 방법?
        if ( Class.__super__ && Class.__super__.hasOwnProperty('__construct') ) {
            Class.__super__.__construct.apply(this, arguments);
        }
        // 자신의 프로토타입의 __construct 속성이 있는지 확인하여 설정하는 코드
        if ( Class.prototype.hasOwnProperty('__construct') ) {
            Class.prototype.__construct.apply(this, arguments);
        }
    }
    // 2. 부모 생성자(슈퍼 클래스)가 있을 경우 상속 실행
    if ( SuperClass ) {
        // 임시 생성자(프록시) 패턴
        // 호이스트를 고려해서 함수 표현식을 사용
        F = function(){};
        // function F(){}
        F.prototype = SuperClass.prototype;
        Class.prototype = new F();
        Class.prototype.constructor = Class;
        Class.__super__ = SuperClass.prototype;
    }
    // 3. 프로토타입 멤버 추가
    // desc 객체를 반복 순환하여 각 멤버를 할당한다.
    // Class.prototype 객체의 멤버로 할당한다.
    for( var key in desc ) {
        var value = desc[key];
        // desc 객체 자신만의 속성을 Class.prototype의 멤버로 설정(추가)한다.
        if ( desc.hasOwnProperty(key) ) {
            Class.prototype[key] = value;
        }
    }

    // 4. 생성자를 반환
    return Class;
}


// $class( 객체 설명자, 슈퍼클래스(부모생성자) )
// Sugar Syntax
var Model = $class({
    // 생성자 함수
    '__construct': function(name) {
        this.name = name || 'Model Data';
    },
    // 프토토타입 멤버
    'getName': function() {
        return this.name;
    }
});

var SuperModel = $class({
    'setName': function(name) {
        this.name = name;
    },
    'resetName': function() {
        // 부모에 참조된 name 값을 가져와 초기화
    }
}, Model);

var mem = new Model('Memory');
var power_mem = new SuperModel('Power-up Memory');

// console.log(mem);
// console.log(power_mem);

// Iron Man Suite - Class Pattern
// 참고 URL: https://goo.gl/pTqssM
// MK1, MK2

// MK1 모델 설계
// 탑승자(passenger) 기본 값(Tony Stark), 사용자 탑재 가능
// 능력(ability): [ 화염방사기(flame thrower), 미사일(missile, 소형 로켓(mini rocket)) ]
// 메소드: fire(), shot()

// MK1 클래스 정의
var MK1 = $class({
    '__construct': function(passenger) {
        // 아이언맨 슈트에 탑승하는 사람을 정의
        // 만약 탑승자가 설정되어 있지 않다면
        // Tony Stark가 기본적으로 탑승한다.
        this.passenger = passenger || 'Tony Stark';
    },
    'ability': [ 'flame thrower', 'missile' ],
    'fire': function(count) {
        count = count || 1;
        var process = this.passenger + '가 ' + this.ability[0] + '를 '+ count +'번 쐈다!';
        console.log(process);
        // 체이닝(연결) 패턴
        return this;
    },
    'shot': function(count) {
        count = count || 1;
        var process = this.passenger + '가 ' + this.ability[1] + '을 '+ count +'번 발사했다!';
        console.log(process);
        return this;
    }
});

// MK1 클래스 인스턴스 생성
// var ironman_mk1 = new MK1('야무'); // 탑승자 옵션 설정: 'yamoo9'


// MK2 모델 설계 (MK1 상속)
// 탑승자 기본 값(Tony Stark), 사용자 탑재 가능
// 추가된 능력: [ 인공지능(A.I, Jarvis), 비행(flying), 리펄서 건(Repulsor Beam) ]
// 메소드: jarvice(), flying(), beam()

var MK2 = $class({
    '__construct': function(abilities, passenger) {
        // console.log(this.ability.concat( (abilities || []) ));
        this.ability = this.ability.concat( (abilities || []) );
        // passenger && (this.passenger = passenger);
        if (passenger) {
            this.passenger = passenger;
        }
    },
    'jarvice': function(method, arg) {
        console.log('Hello, I\'m Jarvis. What can I Help you?');
        if ( this[method] ) {
            console.log('O.K, I can your Command ' + method + '!');
            this[method](arg);
        } else {
            console.log('Sorry, I can\'t your Command ' + method + '.');
        }
    },
    'flying': function(min) {
        min = min || 10;
        var process = this.passenger + '가 '+ min +'분 만큼 나는데 성공하다!';
        console.log(process);
        return this;
    },
    'beam': function(count) {
        count = count || 1;
        var process = this.passenger + '가 리펄서 건(Repulsor Beam) '+ count +'번 쏘았다!';
        console.log(process);
        return this;
    }
}, MK1);

var ironman_mk2 = new MK2(['Jarvis', 'flying', 'Repulsor Beam'], 'yamoo9');
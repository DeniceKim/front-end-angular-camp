###### Fast Campus ─ Front-End AngularJS CAMP

# DAY20

1. Bootstrap 설치 bower
1. bower.json 메인 파일 수정
1. Form 마크업 추가
1. AngularJS 앱 모듈/컨트롤러 정의
1. $http 모듈 인젝션 및 .post(), .then() 메소드 활용
1. HTML5 유효성 검사(Validation) 활용
1. AngularJS 유효성 검사(Validation) 활용

-

### 1-1. Bootstrap 설치

[Bootstrap](http://getbootstrap.com/) 설치

```sh
$ bower i -S bootstrap
```

-

### 1-2. wirdep 모듈 로드 시, 활용될 경로 수정

`bower_components/bootstrap/bower.json` 수정

```json
"main": [
  "dist/css/bootstrap.min.css",
  "dist/css/bootstrap-theme.min.css",
  "dist/js/bootstrap.js"
]
```

-

### 2. `index.html` 문서에 HTML 마크업 작성

- [Bootstrap: navbar](http://getbootstrap.com/components/#navbar)
- [Bootstrap: form](http://getbootstrap.com/css/#forms)
- [Bootstrap: forms-help-text](http://getbootstrap.com/css/#forms-help-text)
- [Bootstrap: buttons](http://getbootstrap.com/css/#buttons)

```html
<!-- 헤더바 영역 -->
<!--
nav.navbar.navbar-default.navbar-inverse.navbar-fixed-top
  .container
    .navbar-header
      a.navbar-brand
-->

<!-- 메인 콘텐츠 영역 -->
<!--
.container.main-content
  form
    .form-group
      label.control-label
      input.form-control
-->
```

-

### 3. `app.js` 문서에 Angular 모듈/컨트롤러 작성

```js
// Angular 앱 모듈 정의
// https://docs.angularjs.org/api/ng/directive/ngApp
var RegisterApp = angular.module('RegisterApp', []);
```

```js
// 앱 컨트롤러 설정
// https://docs.angularjs.org/api/ng/directive/ngController
RegisterApp.controller('LoginController', function() {});

// a. as 문법
// b. $scope 객체
// https://docs.angularjs.org/guide/scope
```

```js
// 참고 주소
// https://minmax-server.herokuapp.com/register/
RegisterApp.controller('LoginController', ['$scope', function($scope) {
  $scope.formModel = {};
  $scope.onSubmit = function(){};
}]);

// ---------------------------------------------------------------------

// $http 모듈
// https://docs.angularjs.org/api/ng/service/$http
$http
  .post('https://minmax-server.herokuapp.com/register/', $scope.formModel)
  .then(function(response){...}, function(response){...});

// ---------------------------------------------------------------------

// HTML5 Validation
// require
// ngSubmit
// https://docs.angularjs.org/api/ng/directive/ngSubmit

// ---------------------------------------------------------------------

// novalidate
// <form name="registerForm">
// <pre>{{registerForm|json}}</pre>

// ngClass
// https://docs.angularjs.org/api/ng/directive/ngClass
// Bootstrap, Form Help Text
// http://getbootstrap.com/css/#forms-help-text
// data-ng-class="{'has-error': true}"
// registerForm.email.$valid
// registerForm.email.$error
// registerForm.email.$error.required
// registerForm.email.$error.email
// registerForm.$pristine

```

-

---

### 4. 랜덤 사용자 정보 생성 API (Random User Generator)

- [randomuser.me](https://randomuser.me/)
- [randomuser.me/documentation](https://randomuser.me/documentation)
- [randomuser.me/photoshop](https://randomuser.me/photoshop)

-

### 5. Random User Generator 사용법

##### API 데이터 가져오는 방법 ( jQuery | AngularJS )

```js
// jQuery
$.ajax({
  'url': 'http://randomuser.me/api/',
  'dataType': 'json',
  'success': function(data) {
    console.log( data ); // JSON 데이터
  }
});

// AngularJS
angular
  .module('DEMO', [])
  .controller('RugController', ['$scope', '$http', function($scope, $http){
    $http({
      'method': 'GET',
      'url': 'http://randomuser.me/api/'
    })
    .then(function(response){
      $scope.results = response.data; // JSON 데이터
    });
  }]);
```

##### 전송 성공 시, 반환되는 JSON

```js
{
  results: [{
    user: {
      gender: "female",
      name: {
        title: "ms",
        first: "manuela",
        last: "velasco"
      },
      location: {
        street: "1969 calle de alberto aguilera",
        city: "la coruña",
        state: "asturias",
        zip: "56298"
      },
      email: "manuela.velasco50@example.com",
      username: "heavybutterfly920",
      password: "enterprise",
      salt: ">egEn6YsO",
      md5: "2dd1894ea9d19bf5479992da95713a3a",
      sha1: "ba230bc400723f470b68e9609ab7d0e6cf123b59",
      sha256: "f4f52bf8c5ad7fc759d1d4156b25a4c7b3d1e2eec6c92d80e508aa0b7946d4ba",
      registered: "1303647245",
      dob: "415458547",
      phone: "994-131-106",
      cell: "626-695-164",
      DNI: "52434048-I",
      picture: {
        large: "http://api.randomuser.me/portraits/women/39.jpg",
        medium: "http://api.randomuser.me/portraits/med/women/39.jpg",
        thumbnail: "http://api.randomuser.me/portraits/thumb/women/39.jpg",
      },
      version: "0.6"
      nationality: "ES"
    },
    seed: "graywolf"
  }]
}
```

##### 오류 발생 시, 반환되는 JSON

```js
{
  error: "Uh oh, something has gone wrong. Please tweet us @randomapi about the issue. Thank you."
}
```

##### 요청 응용 방법

```js
// 랜덤 사용자 수 설정
'http://api.randomuser.me/?results=20'

// 성별 설정
'http://api.randomuser.me/?gender=female'
```

-

### AngularJS 모듈

- [angular-auto-validate](http://jonsamwell.github.io/angular-auto-validate/)
- [angular-ladda](http://remotty.github.io/angular-ladda/) | [ladda](http://lab.hakim.se/ladda/)

-

### 정규 표현식 참고

- [HTML5 패턴 모음](http://html5pattern.com/Passwords)
- [정규식 - 한글 문자집합/문자 범위 지정하기](https://sites.google.com/site/wankyuchoi/home/computer/tips/1)
- [정규식 한글 체크](http://serpiko.tistory.com/385)


## Javascript Anti-Patterns

### 1. Global Scope를 가급적 오염시키지 말아라.

모듈 패턴으로 문제를 해결하라.
<!-- 참고해서 읽어보길! http://www.nextree.co.kr/p7650/ -->

- [네임스페이스](https://addyosmani.com/blog/essential-js-namespacing/) 패턴
- [즉시실행함수: IIFE(Immediately-Invoked Function Expression](http://benalman.com/news/2010/11/immediately-invoked-function-expression/) 패턴

호이스팅, 스코프 예에서 공부했듯이 가급적(반드시면 더 좋겠지만..)<br>
`var`를 변수 이름 앞에 붙여 사용하라.

`delete`로 지움이 가능한 것은 객체의 속성이며, `var`로 정의된 변수는 지울 수 없다.

-

### 2. 엄격한 비교를 행하라.

`==`, `!=`이 아닌 `===`, `!==`를 사용하라.

```js
// 느슨한 비교 예
""           ==   "0"           // false
0            ==   ""            // true
0            ==   "0"           // true
false        ==   "false"       // false
false        ==   "0"           // true
false        ==   undefined     // false
false        ==   null          // false
null         ==   undefined     // true
" \t\r\n"    ==   0             // true

// 엄격한 비교 예
""           ===   "0"           // false
0            ===   ""            // false
0            ===   "0"           // false
false        ===   "false"       // false
false        ===   "0"           // false
false        ===   undefined     // false
false        ===   null          // false
null         ===   undefined     // false
" \t\r\n"    ===   0             // false
```

```js
// 인라인 스타일을 설정하지 않고 CSS 설정 값을 가져오는 방법
// W3C 표준 방식 window.getComputedStyle
// MS 비표준 방식 $0.currentStyle.fontSize
```

-

### 3. 반복 구문에서 중복되는 것을 캐시하라.

```js
// STEP 1
for( var i = 0, i < document.querySelectorAll('nav a').length; i+=1 ) {
    console.log( document.querySelectorAll('nav a')[i] );
}


// SETP 2
for( var i = 0, links = document.querySelectorAll('nav a'); i<links.length; i+=1 ) {
    console.log( links[i] );
}

// STEP 3
var i = 0,
    links = document.querySelectorAll('nav a');

for( ; i<links.length; i+=1 ) {
    console.log( links[i] );
}
```
// DOM Scripting
// <p> 요소를 동적으로 생성해서
// class 속성 값을 result 설정하고
// 동적으로 js 변수에 할당된 문자열 값을 텍스트 노드로 생성합니다.
// 그리고 <p> 요소에 마지막 자식 콘텐츠로 추가합니다.
// <body>의 요소의 마지막 자식 요소로 추가합니다.

var body = document.querySelector('body');
var param = document.createElement('p');
var param_text = document.createTextNode(fast_campus.js);
param.setAttribute('class', 'result');
param.appendChild(param_text);
body.appendChild(param);


var divi = document.createElement('div');
var divi_text = document.createTextNode(kipfa.js);
divi.setAttribute('class', 'result');
divi.appendChild(divi_text);
body.appendChild(divi);
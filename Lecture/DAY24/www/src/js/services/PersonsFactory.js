/*! PersonsFactory.js © yamoo9.net, 2016 */
'use strict';

angular.module('PersonListApp').service('PersonsService', ['$http', function($http){

  var _service = {
    'selectedPerson': null,
    'persons': []
  };

  // 비동기 데이터 로드
  $http
    .get('/data/persons.json')
    .then(function(response) {
      angular.forEach(response.data.results, function(person){
        _service.persons.push(person);
      });
    });

  // 먼저 반환되었어도 객체가 반환되었기 때문에
  // 객체를 참조하게 되면 객체의 변경된 속성 값도 추후에 참조할 수 있다.
  return _service;

}]);
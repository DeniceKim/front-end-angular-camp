// -----------------------------------------------------
// AngularJS 모듈 정의
// -----------------------------------------------------
angular.module('PersonListApp', []);

// ------------------------------------------------------
// AngularJS 모듈 호출
// ------------------------------------------------------

// 컨트롤러
require('../controllers/PersonListController');
require('../controllers/PersonDetailController');

// 필터
require('../filters/PersonListFilters');
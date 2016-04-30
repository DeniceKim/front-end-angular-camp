'use strict';

// 의존 모듈 로드
var gulp  = require('gulp');
var yargs = require('yargs').argv;
var log   = require('./gulp_tasks/utils/log');
var $     = require('gulp-load-plugins')({'lazy': true});

// --------------------------------------------------
// 기본 업무 등록
// gulp.task('default', []);
gulp.task('default', ()=> {
  // 1. log() 함수의 첫번째 인자가 문자인 경우
  log('gulp 업무 시작');
  // 2. log() 함수의 첫번째 인자가 객체인 경우
  // log({
  //   'first': 'Gulp 업무 시작!!!',
  //   'second': '테스트 중....'
  // }, 'red');
});


'use strict';

// 의존 모듈 로드
var gulp       = require('gulp');
var yargs      = require('yargs').argv;
var log        = require('./gulp_tasks/utils/log');
var $          = require('gulp-load-plugins')({'lazy': true});

// --------------------------------------------------
// 기본 업무 등록
// gulp.task('default', []);
gulp.task('default', ()=> {
  log({
    'first': 'Gulp 업무 시작!!!',
    'second': '테스트 중....'
  }, 'red');
});


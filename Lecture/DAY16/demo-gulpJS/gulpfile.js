'use strict';

// 의존 모듈 로드
var gulp  = require('gulp');
var yargs = require('yargs').argv;
var log   = require('./gulp_tasks/utils/log');
// Browserify 사용을 위한 모듈 로드
var browserify = require('browserify');
var source     = require('vinyl-source-stream');
var buffer     = require('vinyl-buffer');
// Gulp 플러그인 모듈 로더
var $ = require('gulp-load-plugins')({'lazy': true});

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

// --------------------------------------------------
// 번들링(Bundling): Javascript 업무 등록
// --------------------------------------------------
gulp.task('bundle:js', ()=> {
  // 번들러 옵션 설정
  var bundler = browserify({
    // 진입 파일 (번들링 시작 파일)
    'entries': './test/app.js',
    // 소스맵을 번들링된 파일에 포함
    'debug': false,
    // 번들링 속도 향상 (다만 파일 크기가 커짐)
    'insertGlobals': true
  });

  return bundler
    .bundle()
    .pipe(source('app.bundle.js'))
    .pipe(buffer())
    .on('error', $.util.log)
    .pipe(gulp.dest('./.tmp'));
});
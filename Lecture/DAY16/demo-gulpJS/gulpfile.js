'use strict';

// 의존 모듈 로드
var config = require('./gulp.config');
var gulp   = require('gulp');
var yargs  = require('yargs').argv;
var log    = require('./gulp_tasks/utils/log');
// Browserify 사용을 위한 모듈 로드
// Watchify, lodash.assign ($.extend())
var browserify = require('browserify');
var watchify   = require('watchify');
var assign     = require('lodash.assign');
var source     = require('vinyl-source-stream');
var buffer     = require('vinyl-buffer');
// Gulp 플러그인 모듈 로더
var $ = require('gulp-load-plugins')({'lazy': true});

// --------------------------------------------------
// 기본 업무 등록
gulp.task('default', ['bundle:js']);

// --------------------------------------------------
// 번들링(Bundling): Javascript 업무 등록
// --------------------------------------------------
// 옵션 덮어쓰기
var opts = assign({}, watchify.args, config.browserify.options);

// Watchify 래핑된 Browserify 객체
var bundler = watchify(browserify(opts));

// Bundle 업무를 수행하는 함수
var bundleHandler = () => {
  return bundler
    .bundle()
    .pipe(source(config.browserify.output_filename))
    .pipe(buffer())
      // 오류 발생 시, 콘솔에 오류 메시지 출력
      .on('error', $.util.log.bind($.util, 'Browserify 오류'))
      // 조건 --min 옵션 값(true, false)에 따라 압축(Uglify) 처리
      .pipe($.if(yargs.min, $.uglify()))
    // 소스맵 초기화 (이미 소스맵 파일 존재하면 해당 파일을 읽어서 속도를 향상)
    .pipe($.sourcemaps.init({'readMaps': config.browserify.read_sourcemap}))
    // 소스맵 쓰기
    .pipe($.sourcemaps.write(config.browserify.sourcemaps))
    .pipe(gulp.dest(config.browserify.output));
};

// Gulp 업무 등록
gulp.task('bundle:js', bundleHandler);
// 이벤트 처리(감지)
bundler.on('update', bundleHandler);
bundler.on('log', $.util.log);

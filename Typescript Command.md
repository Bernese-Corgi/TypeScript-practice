ES6 문법으로 타입스크립트 파일 컴파일

```bash
$ tsc [file].ts --target es6
```

`--lib` 라이브러리 옵션 : 별도의 문법 버전을 지원하는 폴리필을 사용할 수 있는 옵션

```bash
$ tsc [file].ts --lib es5, es2015.promise,es2015.iterable,dom
```

node 환경에서 자바스크립트 파일 실행

```bash
$ node [file].js
```

```bash
$ node [file].js
```

`--module` 옵션 : 어떤 모듈 시스텝을 사용할 것인지 설정

```bash
# commonjs 모듈시슽템 사용
$ tsc [file].ts --module commonjs
```

`--showConfig` 옵션 : 커맨드 라인에 옵션을 준 것들이 제이슨 형태로 화면에 출력

```bash
$ tsc [file].ts --target es6 --lib es2015,dom --module commonjs --showConfig
```

node 프로젝트로 만들기

```bash
$ npm init -Y
```

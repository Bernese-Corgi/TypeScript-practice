
ES6 문법으로 타입스크립트 파일 컴파일

```bash
$ tsc [file].ts --target es6
```

`--lib` 라이브러리 옵션 : 별도의 문법 버전을 지원하는 폴리필을 사용할 수 있는 옵션

```bash
$ tsc hello.ts --lib es5, es2015.promise,es2015.iterable,dom
```
# TypeScript 설치 및 설정

## TypeScript 설치

VSCode, WebStorm을 사용하는 경우 타입스크립트 지원 기능이 내장되어 있으므로 별도의 설치 없이 타입스크립트 파일을 인식할 수 있다.
다만, 컴파일러는 따로 설치해야한다.

## TypeScript Compiler (tsc)

### 컴파일러 설치

<span style="color: gray">이 문서에서는 npm으로 설치하는 방법을 소개합니다.</span>

- 전역에 설치하기
- 전역에 설치한 경우 `tsc` 명령어를 사용한다.

  ```bash
  # 전역에 typescript 설치
  $ npm intall -g typescript
  # 버전 확인으로 tsc의 설치 확인
  $ tsc --version
  ```

- 일반 지역에 설치하기
- 일반 지역으로 설치하는 경우 `npx tsc` 명령어를 사용한다.
  ```bash
  # 전역에 typescript 설치
  $ npm install -D typescript
  # 버전 확인으로 tsc의 설치 확인
  $ npx tsc --version
  ```

### tsc 옵션 파일 생성

tsconfig.json 파일 : tsc 옵션 설정 파일

- tsconfig.json 파일 생성

  ```bash
  $ tsc --init
  ```

- tsconfig.json을 적용해서 트랜스파일링하는 방법

  ```bash
  $ tsc
  ```

- tsc 명령어 뒤에 파일명을 지정하면 tsconfig.json 설정이 무시된다.

  ```bash
  $ tsc [파일명]
  ```

### tsc 옵션 파일 설정

- `"include"` : 컴파일에 포함할 경로
- `"exclude"` : 컴파일에 제외할 경로

```json
{
  "compilerOptions": {
    // ...
  "include": [
    "src/**/*.ts"
  ],
  "exclude": [
    "node_modules"
  ]
}
```

- `"watch"` : 트랜스파일링 대상 내용이 변경되었을 때 이를 감지하여 자동으로 트랜스파일링 실행

```json
{
  "compilerOptions": {
  // ...
  "watch" : true
}
```

### tsc 트랜스파일링 명령어 옵션

- `--watch` or `-w` : 트랜스파일링 대상 내용이 변경되었을 때 이를 감지하여 자동으로 트랜스파일링 실행
  - 계속 이 옵션을 적용하려면, tsconfig.json 파일의 `"watch"` 옵션을 `true`로 설정
  ```bash
  $ tsc --watch
  ```
- `--target` or `-t` : 자바스크립트 버전 변경

  지원하는 자바스크립트 버전 : ‘ES3’(default), ‘ES5’, ‘ES2015’, ‘ES2016’, ‘ES2017’, ‘ES2018’, ‘ES2019’, ‘ESNEXT’

  ```bash
  $ tsc [파일명] -t [변경할 자바스크립트 버전]
  ```

## 테스트 도구

### Parcel

타입스크립트를 **로컬 환경**에서 빠르게 테스트할 때 사용하기 좋은 번들러

1. parcel bundler 설치

   ```bash
   $ npm init -y
   $ npm install -D typescript parcel-bundler
   ```

2. html 파일에 `.ts` 파일 연결

   ```html
   <body>
     <script src="main.ts"></script>
   </body>
   ```

3. 진입 파일을 `index.html`로 지정하고 Parcel 번들러로 빌드
   ```bash
   $ npx parcel index.html
   # Server running at http://localhost:1234
   # ✨  Built in 1.31s.
   ```

### TS Node

**NodeJS 환경**에서 테스트하기 위한 도구

- 설치
  `@types/node` : Node.js API를 위한 타입 선언 모듈

  ```bash
  $ npm init -y
  $ npm install -D typescript @types/node ts-node
  ```

- 실행 방법

  ```bash
  $ npx ts-node main.ts
  ```

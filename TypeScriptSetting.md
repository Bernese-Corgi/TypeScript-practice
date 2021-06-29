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

### tsconfig.json 파일의 생성

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

### tsc 트랜스파일링 명령어 옵션

- `--watch` or `-w` : 트랜스파일링 대상 내용이 변경되었을 때 이를 감지하여 자동으로 트랜스파일링 실행
  - 계속 이 옵션을 적용하려면, tsconfig.json 파일의 `"watch"` 옵션을 `true`로 설정
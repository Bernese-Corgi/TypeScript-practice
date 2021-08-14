# React With Typescript

- [React With Typescript](#react-with-typescript)
  - [Create React App 프로젝트 with Typescript](#create-react-app-프로젝트-with-typescript)
  - [React.FC](#reactfc)
    - [장점](#장점)
    - [단점](#단점)
  - [optional props 지정 방법](#optional-props-지정-방법)

## Create React App 프로젝트 with Typescript

TypeScript로 새로운 Create React App 프로젝트를 시작

```bash
$ npx create-react-app my-app --template typescript
```

[참고 사이트](https://create-react-app.dev/docs/adding-typescript/)

## React.FC

```tsx
const Greetings: React.FC<GreetingsProps> /* props의 타입을 Generics로 넣어서 사용 */ = ({
  name,
}) => <div>Hello, {name}</div>;
```

### 장점

`React.FC` 를 사용할 때는 `props`의 타입을 `Generics` 로 넣어서 사용한다.
이렇게 React.FC를 사용해서 얻을 수 있는 이점은 두가지가 있습니다.

1. props 에 기본적으로 children 이 들어가있다.
   ![React.FC를 사용하면 props 에 기본적으로 children 이 들어가있다.](https://user-images.githubusercontent.com/72931773/129435833-5f1c2156-d66e-4abc-9d01-372cd66de0b1.png)

2. 컴포넌트의 defaultProps, propTypes, contextTypes 를 설정 할 때 자동완성이 될 수 있다

### 단점

1. defaultProps가 제대로 동작하지 않는다.

   🔻 defaultProps에 기본값으로 지정해도, 제대로 동작하지 않는다.
   ![](https://user-images.githubusercontent.com/72931773/129438285-7e75aa0e-ba6f-42ff-a7d5-6731edf4e246.png)
   ![](https://user-images.githubusercontent.com/72931773/129438647-3741aa7c-9974-4ac9-9536-0c69b2d318bb.png)
   🔻 매개변수에 기본값으로 지정하면 제대로 동작한다.
   ![](https://user-images.githubusercontent.com/72931773/129438289-4419e16a-4b53-49e6-a449-c8fa2e35f5c4.png)

2. `children`이 옵셔널 형태로 들어가있어 `React.FC`를 사용하면 컴포넌트의 props 의 타입이 명백하지 않다.
   명백히 하려면 결국 `Props`타입 안에 `children`을 설정해야한다.

   ```tsx
   type GreetingsProps = {
     name: string;
     children: React.ReactNode;
   };
   ```

이러한 단점 때문에 `React.FC`를 사용하지 않는 것을 권장한다.

`React.FC`와 화살표 함수를 사용하지 않으면 다음과 같은 형태로 정의할 수 있다.

```tsx
function Greetings(
  {
    name,
    mark,
  }: GreetingsProps /* 어떤 props를 넣어야 하는지 만들어둔 type alias로 지정 */
) {
  return (
    <div>
      Hello, {name} {mark}
    </div>
  );
}

Greetings.defaultProps = {
  mark: '!',
};
```

## optional props 지정 방법

props가 선택적으로 전달된다면, `?:` 를 사용하면 된다.

🔻 컴포넌트 props 타입 별칭

```tsx
type CompProps = {
  optional?: string;
};
```

🔻 컴포넌트에 선택적인 props가 전달되면, 전달된 props를 표시한다.

```tsx
function Comp({ optional }: CompProps) {
  return (
    <div>
      {/* optional props가 존재하면 p태그 내에 props를 표시한다. */}
      {optional && <p>{optional}</p>}
    </div>
  );
}
```


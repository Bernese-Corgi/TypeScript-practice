// 매개변수에 넣은 값이 유추된다.
function merge<T1, T2>(a: T1, b: T2) {
  return {
    ...a,
    ...b,
  };
}

const merged = merge({ foo: 1 }, { bar: 2, foobar: 3 });
console.log(merged); // { foo: 1, bar: 2, foobar: 3 }

function wrap<T>(param: T) {
  return {
    param,
  };
}

const wrapped = wrap('aaa');
console.log(wrapped); // { param: 'aaa' }
console.log(wrapped.param, typeof wrapped.param); // aaa string => string으로 param의 값을 유추했다.

// 인터페이스에서 제네릭 사용하기
interface Items<T, V> {
  list: T[];
  value: V;
}

const items: Items<number, string> = {
  list: [1, 2, 3],
  value: 'aaa',
};

// 클래스에서 제네릭 사용하기
class Queue<T> {
  list: T[] = [];

  get length() {
    return this.list.length;
  }

  enqueue(item: T) {
    this.list.push(item);
  }

  dequeue() {
    return this.list.shift();
  }
}

const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

while (queue.length > 0) {
  console.log(queue.dequeue()); // 0 1 2 3 4
}

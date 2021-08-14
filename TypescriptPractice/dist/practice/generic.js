"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// 매개변수에 넣은 값이 유추된다.
function merge(a, b) {
    return __assign(__assign({}, a), b);
}
var merged = merge({ foo: 1 }, { bar: 2, foobar: 3 });
console.log(merged); // { foo: 1, bar: 2, foobar: 3 }
function wrap(param) {
    return {
        param: param,
    };
}
var wrapped = wrap('aaa');
console.log(wrapped); // { param: 'aaa' }
console.log(wrapped.param, typeof wrapped.param); // aaa string => string으로 param의 값을 유추했다.
var items = {
    list: [1, 2, 3],
    value: 'aaa',
};
// 클래스에서 제네릭 사용하기
var Queue = /** @class */ (function () {
    function Queue() {
        this.list = [];
    }
    Object.defineProperty(Queue.prototype, "length", {
        get: function () {
            return this.list.length;
        },
        enumerable: false,
        configurable: true
    });
    Queue.prototype.enqueue = function (item) {
        this.list.push(item);
    };
    Queue.prototype.dequeue = function () {
        return this.list.shift();
    };
    return Queue;
}());
var queue = new Queue();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
while (queue.length > 0) {
    console.log(queue.dequeue());
}
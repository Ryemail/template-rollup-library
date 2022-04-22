function hello() {
    console.log('hello1');
}
const es6Method = (...arg) => {
    console.log('我是箭头函数1', arg);
    return arg;
};
class Parent {
    name;
    constructor() {
        this.name = 'LEFT';
    }
    getProp(prop) {
        return this[prop];
    }
}
var main = {
    hello,
    es6Method,
    Parent,
};

export { main as default };

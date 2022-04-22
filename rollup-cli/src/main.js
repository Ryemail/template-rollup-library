function hello() {
    console.log('hello1');
}

const es6Method = (...arg) => {
    console.log('我是箭头函数1', arg);
    return arg;
};

class Parent {
    constructor() {
        this.name = 'LEFT';
    }

    getProp(prop) {
        return this[prop];
    }
}

export default {
    hello,
    es6Method,
    Parent,
};

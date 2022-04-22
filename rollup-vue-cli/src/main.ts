function hello() {
    console.log('hello1');
}

const es6Method = (...arg: any[]) => {
    console.log('我是箭头函数1', arg);
    return arg;
};

class Parent {
    name: string;
    constructor() {
        this.name = 'LEFT';
    }

    getProp(prop: keyof Parent) {
        return this[prop];
    }
}

export default {
    hello,
    es6Method,
    Parent,
};

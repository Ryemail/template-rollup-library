function test() {
    console.log('test');
}
// interface TestClass {
//     left: number;
// }
class Test {
    left;
    constructor() {
        this.left = 0;
    }
}

export { Test, test as default };

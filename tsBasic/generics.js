// function echo1(arg) {
//     return arg
// }
// const result1 = echo1(123)
//泛型出现解决了什么问题
//例如有一个函数echo1 是将传入的参数返回
//当我们调用echo1，传入数字 123 时，得到的结果的类型是any
//可能有人会想到如果在定义函数时给参数和函数返回结果定义类型可以解决该问题
function echo2(arg) {
    return arg;
}
var result2 = echo2(123);
//但是这样局限性就比较强，只能传入number类型的数据，如果是string类型就会警告
//或者有人说可以给参数和函数返回值定义any类型
function echo3(arg) {
    return arg;
}
var result3 = echo3(123);
//这样最后的结果类型还是any
//甚至还会出现bug
var result4 = echo3(123);
//这里给结果添加string类型，但我们传的是number，依然成立，因为string属于any的一种
//我们需要一种方法使返回值的类型与传入参数的类型是相同的
//这时候就出现了泛型
function echo(arg) {
    return arg;
}
// const str1: string = 'string'
var result5 = echo(true);
function echoWithLength(arg) {
    console.log(arg.length);
    return arg;
}
var str = echoWithLength('str');
var obj = echoWithLength({ length: 10, width: '12' });
var arr = echoWithLength(['1', '2', '3']);
//泛型约束
//可以给类型变量继承一个interface 泛型约束
//interface描述约束条件 传入参数的类型包含length属性
//然后 使用这个接口和extends关键字实现泛型约束
//只要传入的参数有length属性，不管是string 还是 对象 还是 数组
//只要有length属性都可以
//典型的 duck typing, 只要这只鸟走起来像鸭子、游泳起来像鸭子、叫起来也像鸭子，那么这只鸟就可以被称为鸭子
//类和泛型
var genericsClass = /** @class */ (function () {
    function genericsClass() {
        this.data = [];
    }
    genericsClass.prototype.push = function (item) {
        return this.data.push(item);
    };
    genericsClass.prototype.pop = function () {
        return this.data.shift();
    };
    return genericsClass;
}());
var cla1 = new genericsClass();
cla1.push(1.5);
cla1.push('str');
console.log(cla1.pop().toFixed());
// console.log(cla1.pop().toFixed()) //在这里会出现一个报错
//这里的代码转译成js后，直接generics.js 文件时 会报错 toFixed is not a function
//但是ts并没有在编译前捕捉到这个错误
//是因为 toFixed 是 number 的方法，并不适用于 string
//我们预想的是只有number类型的数据才能被添加
//所有要用泛型约束一下这个类，让输入和输出的类型保持一致
//改写
var genericsClass2 = /** @class */ (function () {
    function genericsClass2() {
        this.data = [];
    }
    genericsClass2.prototype.push = function (item) {
        return this.data.push(item);
    };
    genericsClass2.prototype.pop = function () {
        return this.data.pop();
    };
    return genericsClass2;
}());
var cla2 = new genericsClass2();
cla2.push(1);
console.log(cla2.pop().toFixed()); //在这里会出现一个报错
var kp1 = { key: 1, value: 'string' };
var kp2 = { key: 'string', value: 1 };
//泛型还可以约束接口保证属性的类型是自己约定好的
//泛型的出现解决的问题
//1.创建一个拥有特定类型的容器 用于类和接口，在使用时创建我们想要的数据类型的容器
//例如 let arr: Array<number> = [1, 2, 3] 创建一个充满number类型数据的数组
//2.约束参数的类型
//例如在函数中 我们希望传入的参数 不一定是特定类型 比如 一定是数组或string
//我们只希望传入的参数拥有 length 属性
// 这时就可以用泛型帮我们定义参数的类型
//例如
// interface length {
//     length: number
// }
// function add<T extends length>(item: T): T {
//     console.log(item.length)
//     return item
// }
// const sss = add('srrrt')
// const sss1 = add({length: 10})
//传入的参数不是一个具体的类型但都具有length属性 可以是 string | 数组 | obj
//3.泛型还可以帮我们补货传入参数的类型，以确保传入参数和返回值类型的一致

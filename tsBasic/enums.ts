//枚举
enum Direction {
    Up,
    Down,
    Left,
    Right
}
//枚举成员会被赋值从0开始 递增的数字

console.log(Direction.Up) // 0 可以看做对象获取属性值
console.log(Direction[0]) // Up 枚举的反向映射 也可以看做数组
//反向映射实现原理
// var Direction;
// (function (Direction) {
//     Direction[Direction["Up"] = 0] = "Up";
//     Direction[Direction["Down"] = 1] = "Down";
//     Direction[Direction["Left"] = 2] = "Left";
//     Direction[Direction["Right"] = 3] = "Right";
// })(Direction || (Direction = {}));

enum Direction1 {
    Up,
    Down = 10,
    Left,
    Right
}
// 枚举也可以是手动赋值 如果从第一项开始赋值 下面的会依次加一
// 如果第一项它没有初始化方法，那么它的初始值为0
console.log(Direction1.Up) // 0
console.log(Direction1[1]) // undifined

enum Direction2 {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT'
}
//字符串枚举
const value = 'UP'
if(value === Direction2.Up) {
    console.log('true')
}

//常量枚举 提高性能
const enum Direction3 { 
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT'
}
const value1 = 'UP'
if(value === Direction3.Up) {
    console.log('true')
}
//编译后的js不会编译枚举的代码
//var value1 = 'UP';
//if (value === "UP" /* Direction3.Up */) {
    //console.log('true');
//}
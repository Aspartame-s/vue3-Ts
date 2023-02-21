//枚举
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
//枚举成员会被赋值从0开始 递增的数字
console.log(Direction.Up); // 0 可以看做对象获取属性值
console.log(Direction[0]); // Up 枚举的反向映射 也可以看做数组
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 10] = "Down";
    Direction1[Direction1["Left"] = 11] = "Left";
    Direction1[Direction1["Right"] = 12] = "Right";
})(Direction1 || (Direction1 = {}));
// 枚举也可以是手动赋值 如果从第一项开始赋值 下面的会依次加一
// 如果第一项它没有初始化方法，那么它的初始值为0
console.log(Direction1.Up); // 0
console.log(Direction1[1]); // undifined
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "UP";
    Direction2["Down"] = "DOWN";
    Direction2["Left"] = "LEFT";
    Direction2["Right"] = "RIGHT";
})(Direction2 || (Direction2 = {}));
//字符串枚举
var value = 'UP';
if (value === Direction2.Up) {
    console.log('true');
}
var value1 = 'UP';
if (value === "UP" /* Direction3.Up */) {
    console.log('true');
}
//编译后的js不会转译成具体实现的逻辑 会直接编译成变量的值

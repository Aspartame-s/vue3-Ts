var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//类 公有 私有 受保护
var Test = /** @class */ (function () {
    function Test(name) {
        this.age = 11;
        this.name = name;
    }
    return Test;
}());
var ads = new Test('hello');
console.log(ads.name); //此时的age 为 private属性 不可在类外访问 如果为 protected也一样不能在类外访问
// console.log(ads)
//ts中默认类的所有属性都是 public（公有）
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.show = function () {
        console.log("my name is ".concat(this.name));
    };
    return Animal;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name, dep) {
        var _this = _super.call(this, name) || this;
        _this.dep = dep;
        return _this;
    }
    Snake.prototype.show = function () {
        // console.log(`my name is ${this.name} and work in ${this.dep}`) 属性“name”为私有属性，只能在类“Animal”中访问
        _super.prototype.show.call(this);
        //如果在类型中添加私有（private）属性，则不可以在 类 外使用，包括派生类（子类）
        //但可以在申明私有属性的类型内访问
    };
    return Snake;
}(Animal));
var snake = new Snake('jth', 'ali');
snake.show();
var Animal2 = /** @class */ (function () {
    function Animal2(name) {
        this.name = name;
    }
    Animal2.prototype.show = function () {
        console.log("my name is ".concat(this.name));
    };
    return Animal2;
}());
var Snake2 = /** @class */ (function (_super) {
    __extends(Snake2, _super);
    function Snake2(name, dep) {
        var _this = _super.call(this, name) || this;
        _this.dep = dep;
        return _this;
    }
    Snake2.prototype.show = function () {
        console.log("my name is ".concat(this.name, " and work in ").concat(this.dep));
        _super.prototype.show.call(this);
        //如果在类型中添加受保护（private）属性，则不可以在类型外使用
        //但可以在申明私有属性的类型内访问，也可以在派生类中访问
    };
    return Snake2;
}(Animal2));
var snake2 = new Snake2('jth', 'ali');
snake.show();
//只读属性
var User = /** @class */ (function () {
    function User(name) {
        this.num = 8;
        this.name = name;
    }
    return User;
}());
var dada = new User('cfh');
// dada.name = 'cfh2'// 如果属性是readonly，只可以在申明时或构造函数中被初始化
//不可以进行二次赋值
console.log(dada);
//参数属性 声明并初始化一个成员 constructor(public name: string) {}
//传统写法 constructor(theName) {this.name = theName}
var Jth1 = /** @class */ (function () {
    function Jth1(name) {
        this.name = name;
    }
    Jth1.prototype.show = function () {
        console.log("my name is ".concat(this.name));
    };
    return Jth1;
}());
var nameClass = new Jth1('jjtthh');
nameClass.show();
var Jth = /** @class */ (function () {
    function Jth(name) {
        this.name = name;
    }
    Jth.prototype.show = function () {
        console.log("my name is ".concat(this.name));
    };
    return Jth;
}());
var jjj = new Jth('cjh');
jjj.show();

//类 公有 私有 受保护

//ts中默认所有属性都是 public（公有）
class Animal {
    private name: string;
    constructor(name) {
        this.name = name
    }
    show() {
        console.log(`my name is ${this.name}`)
    }
}

class Snake extends Animal {
    dep: string
    constructor(name, dep) {
        super(name)
        this.dep = dep
    }
    show() {
        // console.log(`my name is ${this.name} and work in ${this.dep}`)
        super.show()
        //如果在类型中添加私有（private）属性，则不可以在 类 外使用，包括派生类（子类）
        //但可以在申明私有属性的类型内访问
    }
}

let snake = new Snake('jth', 'ali')
snake.show()

class Animal2 {
    protected name: string;
    constructor(name) {
        this.name = name
    }
    protected show() {
        console.log(`my name is ${this.name}`)
    }
}

class Snake2 extends Animal2 {
    dep: string
    constructor(name, dep) {
        super(name)
        this.dep = dep
    }
    show() {
        console.log(`my name is ${this.name} and work in ${this.dep}`)
        super.show()
        //如果在类型中添加受保护（private）属性，则不可以在类型外使用
        //但可以在申明私有属性的类型内访问，也可以在派生类中访问
    }
}

let snake2 = new Snake2('jth', 'ali')
snake.show()

//只读属性
class User {
    readonly name: string;
    readonly num: number = 8
    constructor(name) {
        this.name = name
    }
}

let dada = new User('cfh')
// dada.name = 'cfh2'// 如果属性是readonly，只可以在申明时或构造函数中被初始化
//不可以进行二次赋值
console.log(dada)


//参数属性 声明并初始化一个成员 constructor(public name: string) {}
//传统写法 constructor(theName) {this.name = theName}
class Jth1 {
    public name: string;
    constructor(name) {
        this.name = name
    }
    show() {
        console.log(`my name is ${this.name}`)
    }
    //在普通的类型中 我们需要申明一个name属性，并给name属性赋值
}
let nameClass = new Jth1('jjtthh')
nameClass.show()

class Jth {
    constructor(public name: string) { }
    show() {
        console.log(`my name is ${this.name}`)
    }
    //但参数属性可以帮我们将声明属性和初始化合并到一起
    //写法 为 public name: string
    //同样的 private 和 protected 一样
}
let jjj = new Jth('cjh')
jjj.show()

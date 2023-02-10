let add = (x: number, y: number, z?: number): number => {
    if (typeof z === 'number') {
        return x + y + z
    } else {
        return x + y

    }
}

let result = add(1, 2)

let add2: (x: number, y: number, z?: number) => number = add
//定义函数的参数数量和类型，如果需要可选参数和interface一样
//可选参数后面不能再定义确定参数

//如果想将add这个函数赋值给一个变量，必须赋值给一个一样的函数类型
// 冒号（:） 后面都是对此变量类型的定义

//例如： add2: (x: number, y: number, z?: number)
//这步结束后对函数的参数做了类型的定义，但函数返回值的类型还没定义
//如果需要对函数返回值进行定义 就不可以写成 : 这种形式，而是ts中的另一个方法 =>
// => 是申明函数类型返回值的方法 不是es6 中的箭头函数

//如何用interface 描述函数类型
//上面我们直接写了函数类型 (x: number, y: number, z?: number) => number
//interface 描述函数类型和直接写有所区别

interface ISum {
    (x: number, y: number, z?: number): number
}
//interface 描述函数类型时 返回值的类型申明不是用 => 而是 : 

let add3: ISum = add
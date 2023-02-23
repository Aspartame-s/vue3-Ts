function echo1(arg) {
    return arg
}
const result1 = echo1(123)

//泛型出现解决了什么问题
//例如有一个函数echo1 是将传入的参数返回
//当我们调用echo1，传入数字 123 时，得到的结果的类型是any
//可能有人会想到如果在定义函数时给参数和函数返回结果定义类型可以解决该问题
function echo2(arg: number): number {
    return arg
}
const result2 = echo2(123)
//但是这样局限性就比较强，只能传入number类型的数据，如果是string类型就会警告

//或者有人说可以给参数和函数返回值定义any类型
function echo3(arg: any): any {
    return arg
}
const result3 = echo3(123)
//这样最后的结果类型还是any
//甚至还会出现bug
const result4: string = echo3(123) 
//这里给结果添加string类型，但我们传的是number，依然成立，因为string属于any的一种

//我们需要一种方法使返回值的类型与传入参数的类型是相同的
//这时候就出现了泛型
function echo<T>(arg: T): T {
    return arg
}
// const str1: string = 'string'
const result5 = echo(true)
//根据文档的定义我说下自己对泛型的理解
//首先这里的 T 其实是一个类型变量，它不明确指出当前的参数或返回值的具体类型
//而是在调用函数时，编译器可以查看传入参数的类型
//然后把 T 设置为传入参数的类型
//这样就可以统一传入参数和返回值的类型
//写法上需要 给 echo 添加类型变量 T，并用 <> 包裹，
//这样 T 就会帮助我们捕获传入参数的类型，然后将参数和函数返回值都添加类型 T
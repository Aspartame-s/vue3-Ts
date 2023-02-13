//当没有对 str 变量申明类型时 ts会进行类型推论
let str = 'str'

//union type 联合类型 可以申明一个变量是多个类型 比如可以是number 或 string
let numberOrString: number | string
//numberOrString.length 当一个变量是联合类型时只能访问类型的共有属性
//例如 number和string 共有的 toString 和 valueOf方法 length 是string的方法所以不行

//类型断言 as 关键字

function getLength(input: number | string): number {
    const str = input as string
    if(str.length) {
        return str.length
    }else {
        const number = input as number
        return number.toString().length
    }
}

//type guard

//类型别名 
//type 关键字

let sum: (x: number, y: number) => number 
const result1 = sum(1, 2)
type Plus = (x: number, y: number) => number 
let sum2: Plus
const result2 = sum2(2, 3)
//可以利用type 关键字 建立一个类型别名

//字面量
const str: 'str' = 'str' // 定义类型是字面量，值就只能和字面量完全相等
const number: 1 = 1
type Direction = 'Up' | 'Down' | 'Left' | 'Right'
let toWhere: Direction = 'Down'

//交叉类型
interface jieko {
    name: string
}

type Iperson = jieko & {age: number}
let jth: Iperson = {name: 'cjh', age: 133}
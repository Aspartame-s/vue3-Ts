//接口 
interface Person {
    readonly id: number;
    name: string;
    age?: number; // 此时age属性可有可无
}

let obj: Person = {
    name: 'jth',
    age: 12,
    id: 1
}

//接口用来限制对象的形状，接口定义的形状是什么样对象就得什么样，
//变量不可以多也不可以少
//如果希望某个变量可有可无可以在接口的属性后面 + '?'
//如果希望某个属性只可读不能被赋值 可使用readonly
//obj.id = 2 这个时候就会报错 id属性只可读
//泛型
function echo<T>(arg: T): T {
    return arg
}
const str1: string = 'string'
const result1 = echo(str1)
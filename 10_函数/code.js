let compare = createComparisonFunction('name')//闭包初始化，按name进行排序，返回的是一个函数
let result = compare({name: 'Nicholas'}, {name: 'Matt'})//调用这个函数，传入两个obj
console.log(result)

function createComparisonFunction(name) {
    return function (obj1, obj2) {
        let val1 = obj1[name]
        let val2 = obj2[name]
        if (val1 < val2) {
            return -1
        } else if (val1 > val2) {
            return 1
        } else {
            return 0
        }
    }
}
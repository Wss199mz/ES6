
/******过滤*******/
//  filter() 不会改变原始数组。
let arr1 = [1,2,3,4,5,6,7]

let newArr1 = arr1.filter(item => {
    return item % 2 == 0
})


let arr2 = ['A', '', 'B', null, undefined, 'C', ' ']

let newArr2 = arr2.filter(item => {
    return item && item.trim()
})

var arr = ['A', 'B', 'C'];
var r = arr.filter(function (element, index, self) {
    console.log(element); // 依次打印'A', 'B', 'C'
    console.log(index); // 依次打印0, 1, 2
    console.log(self); // self就是变量arr
    return true;
})
console.log('----------------------------------')
// 去重
var r, arr3 = ['apple', 'strawberry', 'banana', 'pear', 'apple', 'orange', 'orange', 'strawberry'];

r = arr3.filter(function (element, index, self) {
    return self.indexOf(element) === index;
});
console.log(r)
console.log('----------------------------------')

// 累加相同a的b值
var arr4 = [{a: 11, b: 1}, {a: 12, b:2}, {a: 11, b: 3}]

function f(arr) {
    let obj = {}
    let newArr = []
    arr.forEach(item => {
        if (!(item.a in obj)) {
            obj[item.a] = item.b
        } else {
            obj[item.a] += item.b
        }
    })
    for (let i in obj) {
        let obj2 = {}
        obj2.a = i
        obj2.b = obj[i]
        newArr.push(obj2)
    }
    return newArr
}
console.log(f(arr4)) // 结果：[{a: 11, b4}, {a:12, b3}]

// 累加
var total = [0, 1, 2, 3, 4].reduce(function(a, b) {
    return a + b;
});
console.log(total)

// 数据扁平化
var arr = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
    return a.concat(b);
});

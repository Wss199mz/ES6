setTimeout(() => {
    console.log(1)
}, 0)

new Promise((resolve, reject) => {
    setTimeout(() => {
    console.log(2)
})
    for (let i = 0; i < 99; i++) {
    resolve()
}
console.log(3)
}).then((res) => {
    console.log(4)
})

console.log(5)


var fn1 = function test () {
    this.name = '张三'
    this.work = function () {
        console.log('study')
    }
    this.fn = function () {
        return this.name
    }
}
fn1.prototype.mother = function () {
    console.log('mother')
}

Object.prototype.a = 2
var person1 = new fn1()
console.log(person1.fn())

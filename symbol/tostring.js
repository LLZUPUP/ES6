const arr = [1,2,3];

// console.log(arr instanceof Array)
// console.log(arr.constructor == Array)

// Object 来自 function(){}
const func = function(){};
const obj = {};
// console.log(Object.prototype.toString.call(obj));
// console.log(Object.prototype.toString.call(arr));

const zk = {
    name: '曾凯',
    habit: '交友',
    toString: function() {
        return (`${this.name}是鸠摩智大师喜欢的程序员`)
    }
}
// Symbol(zk);
// var s1 = Symbol.for(zk);
// var s2 = Symbol.for(zk);
// console.log(s1==s2)
// console.log(s1)
// console.log(typeof s1.toString())

const test = {};
var toString = Object.prototype.toString;
console.log(toString.call(test))
console.log(toString.call(arr))




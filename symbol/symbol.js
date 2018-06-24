var obj = new Object();
const sym =Symbol();
Object.defineProperty(obj,sym,{
    configurable:false,
    writable: false,
    enumerable: true,
    value: '张三'
})
obj[sym]='张三丰'
console.log(obj[sym])
// const a = [1];
// a.push(2)
// console.log(a)

// let [a,[b,c],d]=[3,[2,1],5];
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

// let [b="赵乐乐",a]=["我是","llz"]
// console.log(a+b)


// let {foo,bar} = {bar:"赵乐乐",foo:"llz"}
// console.log(foo+bar)
// console.log(bar)

// let foo;
// ({foo} = {foo:"llz"});
// console.log(foo)

// const [a,b,c,d,e,f,g,h,i]='llzssbasdasd';
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)
// console.log(f)
// console.log(g)
// console.log(h)
// console.log(i)


// 扩展运算符
// function llz(...params) {
//     // console.log(params[0])
//     // console.log(params[1])
//     // console.log(params[2])
//     // console.log(params[3])
//     console.log(params)
// }
// llz(1,2,3)


// let arr1 = ["www","jspang","com"];
// // let arr2 = arr1;
// let arr2 = [...arr1]
// console.log(arr2);
// arr2.push("llz");
// console.log(arr1)
// console.log(arr2)

// rest运算符
// function llz(age,sex,...params) {
//     // console.log(params.length)
//     // console.log(params)
//     // console.log(params[0])
//     // console.log(params[1])
//     // console.log(params[2])
//     for(let val of params) {
//         console.log(val)
//     }
// }
// llz(0,1,2,3,4,5,6,7)

// let a = 123.123;
// // console.log(Number.isInteger(a))
// let b = Math.pow(2,53)+2;
// console.log(b)
// console.log(Number.isSafeInteger(b))
// console.log(Number.MIN_SAFE_INTEGER)

// let a = "1,2,4,5"
// let arr2 = Array.from(a)//json转换成数组
// let arr = Array.of(a)
// console.log(arr)

// let arr = ["llz",'赵乐乐',"写回"]
// let list = arr.entries();
// console.log(list.next().value)
// console.log(list.next().value)
// console.log(list.next().value)
// // console.log(arr.fill("谢慧琪",1,2))
// for(let [index,val] of arr.entries()) {
//     console.log(index)
//     console.log(val)
// }

// function add(a,b=3) {
//     if(a==0) {
//         throw new Error('a is not defined')
//     }
//     return a+b;
// }
// console.log(add(0))
// 箭头函数
// let add =(a,b)=>{
//     console.log('阿的速度')
//    return a+b;
// }
// console.log(add(1,2))


// 函数解构
// let a ={
//     a:"赵乐乐",
//     b:"谢慧琪"
// }
// function fun({a,b}) {
//     console.log(a,b)
// }
// fun(a)

// 数组解构
// let arr = ["llz","xhq","jzm"];
// function fun(a,b,c,d) {
//     console.log(a,b,c,d)
// }
// fun(...arr)

// let obj = {
//     a:"llz",
//     b:"xhq"
// }
// console.log("a" in obj)
// console.log("r" in obj)

// let arr = [,,,];
// console.log(arr.length)

// let arr = ["llz","xhq","jzm"];
// arr.forEach((item,index)=>{
//     console.log(index,item)
// })
// arr.filter(x=>{
//     console.log(x)
// })
// arr.some(x=>{
//     console.log(x)
// })
// arr.map(x=>{
//     console.log(x)
// })
// console.log(arr.toString())
// console.log(arr.join("|"))
// console.log(arr)

// let a ={
//     a:'llz'
// }
// let b ={
//     b:'ll'
// }
// let c ={
//     c:'xhq'
// }
// let d = {}
// console.log(Object.assign(d,a,b,c))
// console.log(d)
// console.log(a)
// let e = Object.assign(a,b,c)
// console.log(e)

// let llz = Symbol('赵乐乐');
// console.log(llz)
// console.log(llz.toString())
// console.log(typeof llz.toString())
// console.log(typeof llz)

// let llz = Symbol();
// let obj = {
//     [llz]: "赵乐乐"
// }
// console.log(obj[llz])
// obj[llz]="llz";
// console.log(obj[llz])

// let obj ={
//     name: 'llz',
//     skill: "web"
// }
// let age = Symbol();
// obj[age]=18;
// console.log(obj[age])

// for(let item in obj) {
//     console.log(item)
//     console.log(obj[item])
// }


// Set() 数据结构
// let arr = [1,2,3,4,5,4,3,2,8];
// let arr2 = new Set(arr)
// console.log(arr2)
// arr2.add(111)
// console.log(arr2)
// console.log(arr2.has('asdasd'))
// arr2.delete(2)
// console.log(arr2)
// // for(let item of arr2) {
// //     console.log(item)
// // }
// arr2.forEach((item)=>{
//     console.log(item)
// })
// console.log(arr2.size)  //Set数据结构里的数量，大小


// arr.forEach((item,index)=>{
//     console.log(item)
//     console.log(index)
// })

// Map数据结构


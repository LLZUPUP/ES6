"use strict";

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
function llz(age, sex) {
    for (var _len = arguments.length, params = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        params[_key - 2] = arguments[_key];
    }

    // console.log(params.length)
    // console.log(params)
    // console.log(params[0])
    // console.log(params[1])
    // console.log(params[2])
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = params[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var val = _step.value;

            console.log(val);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}
llz(0, 1, 2, 3, 4, 5, 6, 7);

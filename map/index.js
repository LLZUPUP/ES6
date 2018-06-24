const dogs = new Map();
dogs.set('Snickers',3);
dogs.set('Sunny',2);
dogs.set('Hugo',10);
dogs.set('Hugo',11);

// dogs.forEach((val,key) => console.log(val,key));
for( const [key,val] of dogs) {
    console.log(key,val);
}

let a = 1;
let b = 2;
// let c = a;
// a=b; //2
// b=c; //1
[b,a]=[a,b]
console.log(a,b)

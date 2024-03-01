async function f1() {
    return 1;
}
f1().then(value => { 
    console.log(value)
}); 


// 简写法
let hello = async () => { return "2" };
hello().then(console.log)



async function f3() {
    return Promise.resolve(3);
}

f3().then(value => {
    console.log(value)
}); 


// 输出
let getpromise = async () => { };
let promise = getpromise();
console.log(typeof promise); // 输出: "object"
console.log(promise instanceof Promise); // 输出: true




async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("咚!"), 1000)
    });

    let result = await promise; // 等待执行，直到 promise resolve 执行完

    console.log(result); // "咚!"
}

f();





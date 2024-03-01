
async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("咚!"), 10000)
    });

    let result = await promise; // 等待执行，直到 promise resolve 执行完

    console.log(result); // "咚!"
}

f();

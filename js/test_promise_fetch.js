// 发起fetch请求
const fetchPromise = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");

// 输出fetchPromise对象，它是一个Promise
console.log(fetchPromise);

// 使用then处理Promise成功的情况
fetchPromise.then((response) => {
    console.log(`已收到响应：${response.status}`); // 输出响应状态码
    if (!response.ok) {
        // 如果响应状态码不是2xx，抛出错误
        throw new Error('Network response was not ok');
    }
    return response.json(); // 解析JSON数据
}).then((data) => {
    console.log('数据解析成功：', data); // 输出解析后的数据
}).catch((error) => {
    console.error('请求过程中发生了错误：', error); // 捕获并处理错误
}).finally(() => {
    console.log('请求完成，无论成功或失败'); // 无论结果如何都会执行
});

// 输出请求已发送
console.log("已发送请求……");

// 其他Promise方法
// .then().then() 链式调用
// .then().catch() 处理可能的错误
// .finally() 无论成功或失败都会执行的代码
// .catch() 只处理错误
// .then().finally() 先处理成功，然后执行finally
// .catch().finally() 先处理错误，然后执行finally

// 注意：在实际使用中，你可能需要根据实际情况调整这些方法的使用。
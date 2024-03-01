console.log(this)

function myFunction() {
    console.log(this); // 独立调用时，在浏览器中输出: Window {...}
}
const obj = {
    myMethod() {
        console.log(this); // 作为对象方法调用时输出: { myMethod: [Function: myMethod] }
    }
};
myFunction(); // 独立调用
obj.myMethod(); // 作为对象方法调用


const obj2 = {
    value: 42,
    getValue() {
        console.log(this.value); // 输出: 42
    }
};
obj2.getValue();



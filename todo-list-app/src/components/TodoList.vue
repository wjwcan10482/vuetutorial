<template>
  <!-- 输入框，用于输入新的待办事项，使用v-model进行双向数据绑定 -->
  <input v-model="newTodo" @keyup.enter="addTodo" placeholder="新增代办">
  <!-- 待办事项列表，使用v-for遍历todos数组并渲染每个待办事项 -->
  <ul>
    <li v-for="(todo, index) in todos" :key="index">
      <!-- 显示待办事项的文本 -->
      {{ todo }}
      <!-- 删除按钮，点击时调用removeTodo方法并传递当前待办事项的索引 -->
      <button @click="removeTodo(index)">X</button>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    // 返回组件的初始数据状态
    return {
      newTodo: "", // 输入框的初始值
      todos: ["看书", "写字", "踢球"] // 待办事项的初始列表
    };
  },
  methods: {
    // 添加待办事项的方法
    addTodo() {
      // 如果输入的待办事项为空，显示错误并清空输入框
      if (this.newTodo.trim() === '') {
        console.error('New todo cannot be empty.');
        this.newTodo = "";
        return;
      }

      // 如果待办事项已存在于列表中，显示错误并清空输入框
      if (this.todos.some(todo => todo === this.newTodo.trim())) {
        console.error('Todo already exists.');
        this.newTodo = "";
        return;
      }

      // 将新的待办事项添加到列表中
      this.todos.push(this.newTodo);
      // 清空输入框以便添加下一个待办事项
      this.newTodo = "";
    },
    // 删除待办事项的方法
    removeTodo(index) {
      // 使用splice方法从todos数组中删除指定索引的元素
      this.todos.splice(index, 1);
      // 打印被删除的待办事项，用于调试
      console.log(this.todos[index]);
    }
  }
};
</script>
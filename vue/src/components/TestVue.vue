<template>
    <!-- 文本插值 -->
    <p>Message: {{ message }}</p>

    <!-- 属性绑定 -->
    <img :src="imageSrc" alt="Vue Logo" />

    <!-- 事件处理 -->
    <button @click="greet">Greet</button>

    <!-- 条件渲染 -->
    <p v-if="isLoggedIn">Welcome back!</p>
    <p v-else>Sign in to continue.</p>

    <!-- 列表渲染 -->
    <ul>
      <li v-for="(item, index) in items" :key="index">
        {{ item.text }}
      </li>
    </ul>


    <!-- 插槽 -->
    <!-- 这里是子组件中定义、需要在父组件App.vue中使用 -->
    <slot></slot>
    <slot name="header">Default Header</slot>


    <!-- 计算属性 -->
    <p>Computed Message: {{ computedMessage }}</p>


    <!-- 侦听器 -->
    <p>Message after watcher: {{ messageAfterWatcher }}</p>
    <button @click="login">Login</button>
    <button @click="logout">Logout</button>



    <my-component :imageSrc="imageSrc"></my-component>

    <my-component @greeting-sent="receiveGreeting"></my-component>

</template>

<script>
import { defineComponent, ref, computed, watch } from 'vue'
import MyComponent from './MyComponent.vue';

export default defineComponent({
    components: {
        MyComponent
    },
      methods: {
    receiveGreeting(greeting) {
      console.log(greeting); // 输出: Hello from Child!
    }
  },
    setup() { 
        const message = ref('djakldajldj')
        const imageSrc = ref('https://vuejs.org/images/logo.png');
        const greet = () => {
        alert('Hello from TestVue!');
        };
        const isLoggedIn = ref(false);
        const items = ref([{ text: '123', }, { text: '456' }]);
        const computedMessage = computed(() => `Computed Message: ${message.value}`);
        const messageAfterWatcher = ref('');
            // 侦听器
        watch(isLoggedIn, (newValue, oldValue) => {
        if (newValue) {
            messageAfterWatcher.value = 'You are now logged in!';
        } else {
            messageAfterWatcher.value = 'You are now logged out!';
        }
        });
        // 定义登录和注销方法
        const login = () => {
        isLoggedIn.value = true;
        };
        const logout = () => {
        isLoggedIn.value = false;
        };

        return {
            message,                                                
            imageSrc,
            greet,
            isLoggedIn,
            items,
            computedMessage,
            messageAfterWatcher,
            login,
            logout
        }
    }
    
})
</script>
<template>
  <div>
    <p>{{ message }}</p>
    <p>{{ imageSrc }}</p>
    <button @click="sendGreeting">Send Greeting</button>

  </div>


</template>

<script>
export default {
  name: 'MyComponent',
    methods: {
    sendGreeting() {
      this.$emit('greeting-sent', 'Hello from Child!');
    }
  },
  props: {
    imageSrc: String
  },
  data() {
    return {
      message: 'Hello from MyComponent!'
    };
  }
};
</script>

<style scoped>
  /* 组件的样式 */
</style>
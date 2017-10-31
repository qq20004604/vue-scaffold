/**
* Created by 王冬 on 2017/10/31.
* QQ: 20004604
* weChat: qq20004604
* 父组件向子组件传值
*/

<template>
  <div class="parent">
    <h2>父组件向子组件传值：</h2>
    <h2>以下是父组件</h2>
    父组件的输入框
    <input type="text" v-model="myData">
    <child :toChild="myData"></child>
  </div>
</template>
<style scoped>
  h2 {
    font-size: 30px;
    margin-bottom: 10px;
  }

  .parent {
    margin-top: 20px;
    border: 2px solid darkslategrey;
    padding: 20px;
  }

</style>
<script>
  import child from './child.vue'

  export default {
    data () {
      return {
        myData: ''
      }
    },
    methods: {},
    components: {
      child
    }
  }
</script>

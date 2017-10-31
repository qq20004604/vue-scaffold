/**
* Created by 王冬 on 2017/10/31.
* QQ: 20004604
* weChat: qq20004604
*/

<template>
  <div class="child">
    <h2>以下是子组件1</h2>
    子组件的输入框<input type="text" v-model="data">
    <button @click="setData">点击按钮将值传给子组件2，并触发子组件2的test方法</button>
  </div>
</template>
<style scoped>
  h2 {
    font-size: 30px;
    margin-bottom: 10px;
  }

  b {
    font-weight: bold;
  }

  .child {
    margin-top: 20px;
    border: 2px solid yellowgreen;
    padding: 20px;
  }

</style>
<script>
  import Bus from './bus'
  export default {
    created () {
      this.$on('abc', this.log)
    },
    data () {
      return {
        data: ''
      }
    },
    methods: {
      setData () {
        Bus.$emit('test', this.data)
      }
    }
  }
</script>

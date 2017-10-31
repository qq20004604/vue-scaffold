/**
* Created by 王冬 on 2017/10/31.
* QQ: 20004604
* weChat: qq20004604
*/

<template>
  <div class="child">
    <h2>以下是子组件</h2>
    子组件的输入框<input type="text" v-model="data">
    <button @click="setData">点击按钮将值传给父组件</button>
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

  export default {
    created () {
      this.$on('abc', this.log)
    },
    props: ['toChild'],
    data () {
      return {
        data: 'hello vue'
      }
    },
    methods: {
      setData () {
        this.$emit('change', this.data)
        this.$emit('abc', this.data)
      },
      log (v) {
        console.log(v)
      }
    },
    components: {
      // 'other-component':OtherComponent,
      // HeaderComponent,
    }
  }
</script>

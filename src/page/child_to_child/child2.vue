/**
* Created by 王冬 on 2017/10/31.
* QQ: 20004604
* weChat: qq20004604
*/

<template>
  <div class="child">
    <h2>以下是子组件2</h2>
    子组件的输入框<input type="text" v-model="data">
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
      Bus.$on('test', this.setData)
    },
    props: ['toChild'],
    data () {
      return {
        data: ''
      }
    },
    methods: {
      setData (v) {
        this.data = v
        alert('子组件2响应事件')
      }
    }
  }
</script>

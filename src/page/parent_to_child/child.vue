/**
* Created by 王冬 on 2017/10/31.
* QQ: 20004604
* weChat: qq20004604
*/

<template>
  <div class="child">
    <h2>以下是子组件</h2>
    子组件显示父组件输入框的值：<b>{{toChild}}</b><br>
    computed计算后，将输入的内容变为大写后的值：<b>{{toUpper}}</b>
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
    props: ['toChild'],
    data () {
      return {
        msg: 'hello vue'
      }
    },
    computed: {
      toUpper () {
        return this.toChild.toUpperCase()
      }
    },
    methods: {},
    components: {
      // 'other-component':OtherComponent,
      // HeaderComponent,
    }
  }
</script>

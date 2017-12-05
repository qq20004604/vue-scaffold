/**
* Created by 王冬 on 2017/12/5.
* QQ: 20004604
* weChat: qq20004604
*/

<template>
  <div>
    <h1>登录成功后的页面</h1>
    <button @click="jump">点击返回初始页面</button>
  </div>
</template>
<style scoped lang="less" type="text/less">
  h1 {
    font-size: 100px;
  }

</style>
<script>
  // import HeaderComponent from './components/header.vue'
  // import OtherComponent from './components/other.vue'
  export default {
    data () {
      return {
        msg: 'hello vue'
      }
    },
    methods: {
      jump () {
        this.$router.push('/')
      }
    },
    components: {
      // 'other-component':OtherComponent,
      // HeaderComponent,
    }
  }
</script>

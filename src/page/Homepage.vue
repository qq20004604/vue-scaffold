<template>
  <div class="">
    <h1>首页</h1>
    <button @click="jump">点击跳转到已登录页</button>
    <div>跳转时会验证是否已登录，未登录会跳转到登录页</div>
    <div>当前是否已登录：{{isLogin}}</div>
    <button @click="clear">清除登录状态</button>
  </div>
</template>
<script>
  import {cleanToken} from 'common/js/token'

  export default {
    data () {
      return {}
    },
    name: 'Homepage',
    computed: {
      isLogin () {
        if (this.$store.state.userInfo.token) {
          return true
        } else {
          return false
        }
      }
    },
    methods: {
      jump () {
        this.$router.push('/userInfo')
      },
      clear () {
        cleanToken()
      }
    },
    components: {}
  }

</script>
<style scoped lang="less" type="text/less">
  h1 {
    font-size: 100px;
  }

  button {
    height: 70px;
    font-size: 36px;
  }
</style>

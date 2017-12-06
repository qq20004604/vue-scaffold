/**
* Created by 王冬 on 2017/12/5.
* QQ: 20004604
* weChat: qq20004604
*/

<template>
  <div>
    <h1>登录页</h1>
    <button @click="login">点击登录成功</button>
  </div>
</template>
<style scoped lang="less" type="text/less">
  h1 {
    font-size: 100px;
  }

</style>
<script>
  import {setToken} from 'common/js/token'

  export default {
    data () {
      return {
        msg: 'hello vue'
      }
    },
    methods: {
      login () {
        let url
        if (this.$store.state.userInfo.nextPage) {
          url = this.$store.state.userInfo.nextPage
        } else {
          // todo 这里写默认情况下登录后的页面
          url = ''
        }
        this.$store.commit('updateUserByLogin', {
          token: '1',
          userId: '2'
        })
        setToken({
          token: '1',
          userId: '2'
        })
        this.$store.commit('updateNextPage', ``)
        this.$router.push(url)
      }
    }
  }
</script>

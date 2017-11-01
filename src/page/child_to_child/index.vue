/**
* Created by 王冬 on 2017/10/31.
* QQ: 20004604
* weChat: qq20004604
* 父组件向子组件传值
*/

<template>
  <div class="parent">
    <h2>子组件影响子组件：</h2>
    <h2>以下是父组件</h2>
    什么都不干
    <child1></child1>
    <child2></child2>
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
  import child1 from './child1.vue'
  import child2 from './child2.vue'

  export default {
    data () {
      return {}
    },
    components: {
      child1, child2
    }
  }
</script>

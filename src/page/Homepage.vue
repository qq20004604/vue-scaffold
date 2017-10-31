<template>
  <div class="">
    <div class="tablist">
      <div class="tab" :class="{focus:type==='p2c'}" @click="changeTab('p2c')">父组件向子组件传值</div>
      <div class="tab" :class="{focus:type==='c2b'}" @click="changeTab('c2b')">子组件触发父组件方法，并传值</div>
      <div class="tab" :class="{focus:type==='c2c'}" @click="changeTab('c2c')">子组件触发父组件方法，并传值</div>
    </div>
    <p2c v-if="type==='p2c'"></p2c>
    <c2b v-if="type==='c2b'"></c2b>
    <c2c v-if="type==='c2c'"></c2c>
  </div>
</template>
<script>
  import p2c from './parent_to_child'
  import c2b from './child_to_parent'
  import c2c from './child_to_child'

  export default {
    data () {
      return {
        type: 'p2c'
      }
    },
    name: 'Homepage',
    methods: {
      changeTab (type) {
        this.type = type
      }
    },
    components: {
      p2c, c2b, c2c
    }
  }

</script>
<style>
  .tablist {
    height: 60px;
    padding: 10px;
    border: 1px solid #000;
  }

  .tab {
    height: 40px;
    line-height: 20px;
    padding: 10px;
    border: 1px solid #999;
    display: inline-block;
  }

  .tab.focus {
    background-color: #000;
    color: white;
  }
</style>

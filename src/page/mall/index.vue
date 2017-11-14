/**
* Created by 王冬 on 2017/11/14.
* QQ: 20004604
* weChat: qq20004604
*/

<template>
  <div>
    <button @click="getList">输出结果</button>
    <div>
      输入分类名，然后点击【确认】按钮添加新的分类
      <input type="text" v-model="category">
      <button @click="addCategory">确认</button>
    </div>

    <template v-for="i in categoryList">
      <div class="category">
        <p>类别：{{i.name}}</p>
        <div>属性：
          <p>新增属性名：<input type="text" v-model="i.newPropertyName">
            <button @click="addToPropertyList(i)">点击添加</button>
          </p>
          <div class="property-list">
            <template v-for="pro in i.propertyList">
              <div class="property">{{pro}}</div>
            </template>
            <div class="clearfloat"></div>
          </div>
        </div>
      </div>
    </template>

    <p>以下是展示列表</p>
    <div class="show-list">
      <table>
        <tr>
          <td v-for="i in categoryList">
            {{i.name}}
          </td>
          <td>价格</td>
          <td>数量</td>
        </tr>
        <tr v-for="(val,key) in showList">
          <td v-for="i in categoryList">
            {{val[i.name]}}
          </td>
          <td>
            <input type="text" v-model="val['price']">
          </td>
          <td>
            <input type="text" v-model="val['count']">
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<style scoped>
  .category {
    border: 1px solid #333;
  }

  .property {
    float: left;
    border: 1px solid #333;
    display: inline-block;
  }

  table {
    border-collapse: collapse;
  }

  th, td {
    border: 1px solid #000;
  }

  /*--清除浮动--*/
  .clearfloat {
    width: 0;
    clear: both;
    overflow: hidden;
    visibility: hidden;
  }
</style>
<script>
  export default {
    data () {
      return {
        category: '',
        categoryList: [
          {
            name: '颜色',
            propertyList: ['白色', '绿色']
          },
          {
            name: '尺寸',
            propertyList: ['10', '20']
          },
          {
            name: '类型',
            propertyList: ['衣服', '裤子']
          }
        ]
      }
    },
    computed: {
      showList () {
        let arr = []
        let obj = {}
        this.toGet(arr, obj, 0, this.categoryList.length)
        return arr
      }
    },
    methods: {
      addCategory () {
        let obj = {
          name: this.category,
          propertyList: [],
          newPropertyName: ''
        }
        this.categoryList.push(obj)
        this.category = ''
      },
      addToPropertyList (category) {
        category.propertyList.push(category.newPropertyName)
        category.newPropertyName = ''
      },
      // 递归
      getList () {
        console.log(this.showList)
        return this.showList
      },
      toGet (arr, obj, currentIndex, maxLength) {
        if (currentIndex >= maxLength) {
          return
        }
        this.categoryList[currentIndex].propertyList.forEach(item => {
          obj[this.categoryList[currentIndex].name] = item
          if (currentIndex === maxLength - 1) {
            let result = Object.assign({}, obj)
            result.price = '0'
            result.count = '1'
            arr.push(result)
          } else {
            this.toGet(arr, obj, currentIndex + 1, maxLength)
          }
        })
      }
    }
  }
</script>

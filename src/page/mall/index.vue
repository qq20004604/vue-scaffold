/**
* Created by 王冬 on 2017/11/14.
* QQ: 20004604
* weChat: qq20004604
*/

<template>
  <div>
    <button @click='getList'>输出结果</button>
    <div>
      输入分类名，然后点击【确认】按钮添加新的分类
      <input type='text' v-model='category'>
      <button @click='addCategory'>确认</button>
    </div>

    <template v-for='i in categoryList'>
      <div class='category'>
        <p>类别：{{i.name}}</p>
        <div>属性：
          <p>新增属性名：<input type='text' v-model='i.newPropertyName'>
            <button @click='addToPropertyList(i)'>点击添加</button>
          </p>
          <div class='property-list'>
            <template v-for='pro in i.propertyList'>
              <div class='property'>{{pro}}</div>
            </template>
            <div class='clearfloat'></div>
          </div>
        </div>
      </div>
    </template>

    <p>以下是展示列表</p>
    <div class='show-list'>
      <table>
        <tr>
          <td v-for='i in categoryList'>
            {{i.name}}
          </td>
          <td>价格</td>
          <td>数量</td>
        </tr>
        <tr v-for='(val,key) in showList'>
          <td v-for='i in categoryList'>
            {{val[i.name]}}
          </td>
          <td>
            <input type='text' v-model="val['price']">
          </td>
          <td>
            <input type='text' v-model="val['count']">
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
        // 要添加的新类别的名字
        category: '',
        // 类别列表
        categoryList: [
          {
            // 类别名
            name: '颜色',
            // 类别属性列表
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
      // 输出列表
      showList () {
        let arr = []
        this.toGet(arr, {}, 0, this.categoryList.length)
        return arr
      }
    },
    methods: {
      // 添加一个新的类别
      addCategory () {
        // 创建新类别
        let obj = {
          name: this.category,
          propertyList: [],
          newPropertyName: ''
        }
        // 添加到类别列表中
        this.categoryList.push(obj)
        this.category = ''
      },
      // 向类别添加属性
      addToPropertyList (category) {
        // 在该类别的属性里列表里添加新的属性
        category.propertyList.push(category.newPropertyName)
        category.newPropertyName = ''
      },
      // 递归
      getList () {
        console.log(this.showList)
        return this.showList
      },
      // 将数据组合成列表，利用递归的特性
      toGet (arr, obj, currentIndex, maxLength) {
        if (currentIndex >= maxLength) {
          return
        }
        this.categoryList[currentIndex].propertyList.forEach(item => {
          // 在组合到最后一个之前，不停的往模板对象上添加属性
          obj[this.categoryList[currentIndex].name] = item
          if (currentIndex === maxLength - 1) {
            // 组合到最后一个后，创建一个新的对象，然后放置入列表中
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

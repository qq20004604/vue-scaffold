<h3>1、先列需求</h3>

一切开发都是基于需求做的，所以需求先行，根据需求设计功能。

需求如下：

1. 上货商品有多个属性类别；（例如：颜色、尺寸、型号）
2. 每个类别有多个子属性；（例如：白色、绿色、金色）
3. 每个商品必然具备每个类别的其中一个子属性；
4. 除此之外还有额外属性，如【库存】、【描述】、【价格】等，每个都有；
5. 要求属性类别可以无限添加；
6. 要求每个属性类别下面的子属性可以无限添加；
7. 最后输出所有组合，以及他们每个组合的额外属性；

例如：

1. 颜色（白色，金色），尺寸（41，42）；
2. 那么一共有四种组合：（白色，41），（白色，42），（金色，41），（金色，42）；
3. 然后给每个组合加上价格、数量等属性，最后用JSON格式输出；
4. 例如输出以下结果：

```
[
  {
    '颜色': '白色',
    '尺寸': '10',
    'price': '0',
    'count': '1'
  },
  {
    '颜色': '白色',
    '尺寸': '20',
    'price': '0',
    'count': '1'
  },
  {
    '颜色': '绿色',
    '尺寸': '10',
    'price': '0',
    'count': '1'
  },
  {
    '颜色': '绿色',
    '尺寸': '20',
    'price': '0',
    'count': '1'
  }
]
```

<h3>2、思路</h3>

由于无限可扩展的特性，因此模块分拆为两部分：

1. 负责支持无限添加功能（包括类别和类别的属性）；
2. 根据已添加的类别和属性，组合出列表，并将列表展示或输出；

<h3>3、代码如下</h3>

由于功能类似，因此没有写删除、修改功能，但思路跟添加是一致的。

[带脚手架的示例](https://github.com/qq20004604/vue-scaffold/tree/%E5%95%86%E5%9F%8E%E6%B7%BB%E5%8A%A0%E5%95%86%E5%93%81%EF%BC%88%E5%B1%9E%E6%80%A7%E5%8F%AF%E6%97%A0%E9%99%90%E9%85%8D%E7%BD%AE%EF%BC%89)

加个Star后，fork下来。

然后在控制台，先输入``npm install``安装依赖，再输入``npm run dev``运行查看效果


详细请参考注释：

```
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

```
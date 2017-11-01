# vue的脚手架

安装

> npm install

自带axios、less、vue、vue-router、vuex。

以及例如babel、eslint、webpack、热加载等，足以满足一般开发需要。

详细请阅读package.json

另外，因此是从我已有项目中摘抄出来，因此可能有一些遗漏的，我未删除的内容，如果在使用中发现了，请自行删除。

<h3>父子组件通信DEMO（新分支）</h3>

https://github.com/qq20004604/vue-scaffold/tree/Vue%E7%88%B6%E5%AD%90%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1

分为三类：父 to 子(props)，子 to 父($emit)，以及非父子关系的组件间通信(global event bus)。

只涉及到Vue的知识，没有使用vuex等其他全家桶内容。

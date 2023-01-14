# vuepress_blog

vuepress个人博客

## 项目执行

安装依赖

```shell
npm install 
npm run dev
npm run build
```

## 刷题文档格式

- 文件名称：`数字. 题目名称.md`
- 文档内容：
```
---
title: 题目（数字.题目名称）
---

## 题目描述

## 解题思路（：暴力解法）
//如果只有一种思路，以下可省略
### 解法1（：递归）

### 解法2（：顺序遍历）
```

## 图片引用

- 图片放到 `public/images` 中，构建后会将 images 放到网站根目录下
- 引用方式：`![操作](/images/剑指offer/6.重建二叉树.png)`

## 使用 `vuepress-theme-reco` 主题

[一款简洁而优雅的 博客 & 文档 主题(vuepress-theme-reco)](https://vuepress-theme-reco.recoluan.com/)


>文章题目设置，否则默认引用第一个 `#` 或者 `##` 的内容
```
---
title: 5. 从尾到头打印链表
date: 2019-04-09
---
```

>首页底部显示：备案信息和项目开始时间

```
record: 'ICP 备案文案',
recordLink: 'ICP 备案指向链接',
// cyberSecurityRecord: '公安部备案文案',
// cyberSecurityLink: '公安部备案指向链接',
// 项目开始时间，只填写年份
startYear: '2019',
```
>添加评论功能

[Vssue](https://vssue.js.org/zh/)


---

参考：

- [官方文档](https://vuepress.vuejs.org/zh/)
- [VuePress搭建个人技术文档网站教程](https://segmentfault.com/a/1190000017055963)
- [一款简洁而优雅的 博客 & 文档 主题(vuepress-theme-reco)](https://vuepress-theme-reco.recoluan.com/)
- [搭建Vuepress博客/文档系统：搭建，PDF导出，SEO，自动编译，自动部署，域名，HTTPS，备案等](https://segmentfault.com/a/1190000020971477)
最近花时间重做了一版[https://github.com/lf7817/lottery](https://github.com/lf7817/lottery)

# react-lottery
[![Build Status](https://www.travis-ci.org/lf7817/react-lottery.svg?branch=master)](https://www.travis-ci.org/lf7817/react-lottery)

> 公司年会需要抽奖，于是写了个， 去年也写了基于mobx的，可以查看[v1.0.0](https://github.com/lf7817/react-lottery/tree/v1.0.0)标签, 雪花特效来自[Jesounao](https://blog.csdn.net/Jesounao/article/details/50429934)

## 预览

- 点击左上奖牌切换奖项
- 点击猪鼻子开始/停止抽奖

[点我预览](https://lf7817.github.io/react-lottery/)

## 简介

本项目采用[create-react-app](https://github.com/facebook/create-react-app)typescript模板构建，配合[react-app-rewired](https://github.com/timarney/react-app-rewired)、[customize-cra](https://github.com/arackaf/customize-cra)，在不**eject**的情况下添加了**stylelint**、**打包分析**、**替换默认service worker配置**

## 特性

- 数据持久化：采用**redux-persist**做数据持久化，保证用户在抽奖的过程中刷新浏览器状态、数据不丢失
- PWA：修改了CRA中默认配置，可以查看[#1](https://github.com/lf7817/react-lottery/blob/master/public/service-worker.js)、[#2](https://github.com/lf7817/react-lottery/blob/master/src/utils/serviceWorker.ts#L118)、[#3](https://github.com/lf7817/react-lottery/blob/master/config-overrides.js#L30)、[#4](https://github.com/lf7817/react-lottery/blob/master/src/index.tsx#L36)文件， 当检测到有更新时，页面会弹出提示框，用户点击确定自动更新
- 支持获奖名单导出

## 开发

```bash
# 克隆代码
git clone https://github.com/lf7817/react-lottery.git
# 进入项目目录
cd react-lottery
# 安装库
yarn install
# 启动开发环境
yarn start
# 构建代码
yarn build
```


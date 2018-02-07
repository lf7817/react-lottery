# react-mobx-lottery

本项目基于create-react-app搭建

## 使用方法
```bash
# 克隆代码
git clone https://github.com/lf7817/react-mobx-lottery.git
# 进入项目目录
cd react-mobx-lottery
# 安装库
yarn install
# 启动开发环境
yarn start
# 构建代码
yarn build
```

## 修改奖项
打开路径<code>./public/assets/db/award.json</code>

```json
[
  {
    "id": 0,
    "title": "一等奖",
    "name": "ipad",
    "num": 1,
    "pic": "./assets/images/award/ipad.jpg"
  },
  {
    "id": 1,
    "title": "二等奖",
    "name": "拍立得",
    "num": 3,
    "pic": "./assets/images/award/pld.jpg"
  },
  {
    "id": 2,
    "title": "三等奖",
    "name": "小米手环2",
    "num": 6,
    "pic": "./assets/images/award/sh.jpg"
  }
]

```
按照如上格式修改即可，奖品图片存放在<code>./public/assets/images/award/</code>即可

## 修改抽奖名单
>人员头像采用QQ头像，代码会根据QQ号去获取头像，没有QQ的可不填

打开路径<code>./public/assets/db/people.json</code>
```json
[
  {
    "name": "陈一财"
  },
  {
    "name": "李凡",
    "qq": 535536456
  }
]
```
按照如上格式修改即可。


# yuan-edit

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 技术栈
+ 前端：vue+vue-router+axios
+ 后端：node.js+express+mysql


# 项目运行
```

// 开启前端服务
npm run dev

// 开启后端服务
cd server
node app.js

```

之后浏览器打开localhost:8080 即可访问，如果依赖安装部分出现了问题，可以使用以下命令手动处理：
```
// 安装前端依赖
npm run install 

// 安装后端依赖
cd server 
npm run install

// 初始化数据库
cd server
node database.js
```

!!!注意!!!
----
你的电脑上必须安装了mysql，并且mysql的相关配置如下才能进行正常运行。

```
    host:'localhost',
    user:'root',
    password:'root',
```
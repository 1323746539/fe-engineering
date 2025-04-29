### 此仓库主要是代码 demo 展示，主要内容是前端工程化相关，比如一些打包工具的使用，手动搭建脚手架等


### my-vue3-cli 项目是 vue-cli 创建的项目

```bash
npm install -g @vue/cli
vue create my-vue3-cli
```

- 项目创建时是没有 webpack 相关配置的，在 Vue CLI 项目中，webpack 的配置是通过 `vue.config.js` 文件来管理的，也就是说在根目录需要创建一个 `vue.config.js` 文件

- 主要借助 `const { defineConfig } = require('@vue/cli-service')` 实现
- 问题：可能会出现版本问题，比如 `@vue/cli-service` 版本过低，默认安装的是 "~4.5.15" 版本，实际要 "~5.0.8" 版本，需要手动安装


### my-vue3-vite 项目是 vite 创建的项目

```bash
npm create vite@latest
```
- Vite 本身就是一个更现代的构建工具，类似 webpack 的配置可以在 `vite.config.js` 文件中进行配置
- 使用起来更加简单，创建到运行没有出现版本依赖问题

### my-vue3-hand 项目是手动搭建的项目
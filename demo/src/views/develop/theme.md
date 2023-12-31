## 定制主题

Front Design Vue 从本人一个笔记项目中提炼，采用蓝色主题，可符合一般开发使用，但这套组件库就思想就是为了适应设计任何想法而设计，改它就得了。

### 变量修改

Front Design Vue 使用 less 作为预编译语言。为寻求最合理最少的变量，我已将涉及组题变量全部放在同一个 less 文件中，使用时直接修改该文档即可。作为全局变量，建议您全局引入该 less 文件。

**全局引入**：

文件在 `@front-design/ui/src/components/styles/colors/color.less`

**Vite 引入方法**：

在 vite.config.ts 文件内加入：

```ts
  export default defineConfig({
  ...
  css: {
    // css预处理器
    preprocessorOptions: {
      less: {
        charset: false,
        additionalData: '@import "./src/front-design/assets/style/index.less";',
      },
    },
  },
})
```

### 源码

其中，`front-design/ui/src/components/styles/colors/color.less` 文件存放所有全局变量，在项目使用上，全局变量完全可以直接修改该文档内容。

```ts
// -------- Colors -----------
@pcolor: #2B5AED; // 全局主色
@lcolor: #1890ff; // 链接色
@scolor: #1FB4A2; // 成功色
@wcolor: #F5AC08; // 警告色
@ecolor: #FA5247; // 错误色

// Animation
@animats: 0.3s; // Modal
@animatb: 0.2s;
@animatf: 0.1s; // Tooltip

//font-size
@size-ss: 12px; // 小号

```

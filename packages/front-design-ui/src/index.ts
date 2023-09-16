import type { Component, App } from "vue";

const components: {
  [propName: string]: Component;
} = {};

export {};

// 全局注册
export default {
  install: (app: App) => {
    for (const c in components) {
      app.component(c, components[c]);
    }
    // app.config.globalProperties.$notification = YkNotification;
    // app.config.globalProperties.$message = YkMessage;
    // app.directive("loading", vLoading);
  },
};

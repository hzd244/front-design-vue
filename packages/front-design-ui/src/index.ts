import type { Component, App } from "vue";

import FrontButton from "./components/button";

const components: {
  [propName: string]: Component;
} = {
  FrontButton,
};

export { FrontButton };

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

import type { Component, App } from "vue";

import FrontButton from "./components/button";
import FrontIcon from "./components/icon";
import FrontLink from "./components/link";

const components: {
  [propName: string]: Component;
} = {
  FrontButton,
  FrontIcon,
  FrontLink,
};

export { FrontButton, FrontIcon, FrontLink };

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

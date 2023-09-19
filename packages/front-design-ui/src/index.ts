import type { Component, App } from "vue";

import FrontButton from "./components/button";
import FrontIcon from "./components/icon";
import FrontLink from "./components/link";
import FrontBackTop from "./components/back-top";
import FrontDivider from "./components/divider";

const components: {
  [propName: string]: Component;
} = {
  FrontButton,
  FrontIcon,
  FrontLink,
  FrontBackTop,
  FrontDivider,
};

export { FrontButton, FrontIcon, FrontLink, FrontBackTop, FrontDivider };

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

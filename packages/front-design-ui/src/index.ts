import type { Component, App } from "vue";

import FrontButton from "./components/button";
import FrontIcon from "./components/icon";
import FrontLink from "./components/link";
import FrontBackTop from "./components/back-top";
import FrontDivider from "./components/divider";
import { FrontParagraph, FrontTitle, FrontText } from "./components/typography";

const components: {
  [propName: string]: Component;
} = {
  FrontButton,
  FrontIcon,
  FrontLink,
  FrontBackTop,
  FrontDivider,
  FrontParagraph,
  FrontTitle,
  FrontText,
};

export {
  FrontButton,
  FrontIcon,
  FrontLink,
  FrontBackTop,
  FrontDivider,
  FrontParagraph,
  FrontTitle,
  FrontText,
};

// 全局注册
export default {
  install: (app: App) => {
    for (const c in components) {
      app.component(c, components[c]);
    }
    // app.config.globalProperties.$notification = FrontNotification;
    // app.config.globalProperties.$message = FrontMessage;
    // app.directive("loading", vLoading);
  },
};

<script lang="ts" setup>
const Links = {
  home: "http://www.huohuo90.com",
  github: "https://github.com/ecaps1038/yike-design-dev",
  devStandard: "https://dwawvfgxvzk.feishu.cn/wiki/GraewTYxJidb6dkeV5ycjGG4nHb",
  task: "https://dwawvfgxvzk.feishu.cn/wiki/T8D3w5VqbinQr5kLNoVcrDQKnbg?table=tblT9WqhCE0EWKfP&view=vewXxBNTOK",
  design:
    "https://www.figma.com/file/EMPOindzRJTKt1Gx6Egojq/Yike-design?type=design&node-id=0%3A278&mode=design&t=buLeC3MzFSkXagtR-1",
};

const navLinks = {
  "/develop": "开发",
  "/design": "设计",
  "/module": "组件",
};
const isDev = import.meta.env.DEV;
</script>

<template>
  <div class="top-bar">
    <router-link class="logo" to="/">
      <img src="@/assets/icon/logo.svg" />
      <IconYkdesignFill class="name" />
      <front-tag v-if="isDev" type="primary">DEV</front-tag>
    </router-link>
    <front-space class="nav-links" :size="24" align="center">
      <a
        v-if="isDev"
        class="nav-item responsive-hidden"
        :href="Links.design"
        target="_blank"
      >
        UI 设计稿
      </a>
      <a
        v-if="isDev"
        class="nav-item responsive-hidden"
        :href="Links.task"
        target="_blank"
      >
        任务文档
      </a>
      <a
        class="nav-item responsive-hidden"
        :href="Links.devStandard"
        target="_blank"
      >
        开发规范
      </a>
      <router-link
        v-for="(link, path) in navLinks"
        :key="path"
        :to="path"
        class="nav-item"
      >
        {{ link }}
      </router-link>

      <a class="nav-item responsive-hidden" :href="Links.home" target="_blank">
        主站
      </a>
      <a class="nav-item" :href="Links.github" target="_blank">
        <icon-github-fill />
      </a>
      <a class="nav-item"><front-theme /></a>
    </front-space>
  </div>
</template>

<style lang="less" scoped>
.top-bar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;

  width: 100vw;
  height: var(--top-bar-height);
  border-bottom: 1px solid @line-color-s;
  background-color: @bg-color-l;
  transition: all @animats;
  box-sizing: border-box;

  a {
    display: flex;
    align-items: center;
    color: inherit;
  }

  .router-link-active {
    font-weight: 600;
    color: @pcolor;
  }
}

.logo {
  display: flex;
  justify-content: center;
  cursor: pointer;

  img {
    width: 36px;
    height: 28px;
  }

  .name {
    margin: 2px 10px 0;
    width: auto;
    height: 18px;
    color: @font-color-l !important;
  }

  .front-tag {
    vertical-align: text-top;
  }
}

.nav-item {
  padding: 5px 8px;
  border-radius: 4px;
  text-decoration: none;
  color: @font-color-l;
  cursor: pointer;

  .nav-item:hover {
    font-weight: 500;
  }
}

@media (max-width: 810px) {
  .responsive-hidden {
    display: none !important;
  }

  .logo {
    .name {
      display: none;
    }
  }

  .nav-links {
    gap: 8px !important;
  }
}
</style>

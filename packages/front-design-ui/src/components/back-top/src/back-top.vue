<template>
  <transition :name="animation">
    <div
      v-show="visible"
      @click="clickIt"
      class="front-backtop"
      :style="backTopStyle"
    >
      <slot>
        <div
          class="front-backtop-container"
          :class="{ secondary: theme === 'secondary' }"
        >
          <IconTopOutline size="20" />
        </div>
      </slot>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from "vue";
// import { IconTopOutline } from "../../svg-icon";
import { transformPxToNumber } from "../../../utils";
import { BackTopProps } from "./back-top";

defineOptions({
  name: "FrontBackTop",
});

const props = withDefaults(defineProps<BackTopProps>(), {
  animation: "upward",
  theme: "primary",
  right: "24px",
  bottom: "40px",
  visibleHeight: "200px",
  icon: "front-top",
  behavior: "smooth",
});

const visible = ref<boolean>(false);
const el = ref<HTMLElement | undefined>();
const backToTop = () => {
  (el.value || document.documentElement).scrollTo({
    top: 0,
    behavior: props.behavior,
  });
};
const clickIt = (e: MouseEvent) => {
  backToTop();
  emit("on-click", e);
};

const backTopStyle = computed(() => {
  const right = transformPxToNumber(props.right);
  const bottom = transformPxToNumber(props.bottom);
  return {
    right: `${right}px`,
    bottom: `${bottom}px`,
  };
});

const getTarget = (target: string | HTMLElement | undefined) => {
  if (typeof target === "string") {
    const targetEl = document.querySelector(target) as HTMLElement;
    if (!targetEl)
      throw new Error(
        `front-back-top target props is not exist: ${props.target}`
      );
    return targetEl;
  }
  return target;
};

const emit = defineEmits(["on-click"]);

const handleScroll = () => {
  const visibleHeight = transformPxToNumber(props.visibleHeight);
  const scrollTop = (el.value || document.documentElement).scrollTop;
  if (scrollTop >= visibleHeight) {
    visible.value = true;
  } else {
    visible.value = false;
  }
};

onBeforeUnmount(() => {
  (el.value || document).removeEventListener("scroll", handleScroll);
});

onMounted(async () => {
  await nextTick();
  el.value = getTarget(props.target) as HTMLElement | undefined;
  (el.value || document).addEventListener("scroll", handleScroll);
});
</script>

<style lang="less" scoped></style>

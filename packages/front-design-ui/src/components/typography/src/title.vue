<template>
  <component :is="wrapTitle" :class="titleClass">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { useSlots, computed } from "vue";
import { titleProps } from "./typography";

defineOptions({
  name: "FrontTitle",
});

const props = withDefaults(defineProps<titleProps>(), {
  level: 1,
  type: "default",
});

const slots = useSlots();

const titleClass = computed(() => {
  return {
    [`front-title--${props.type}`]: props.type,
    "front-title": true,
    "front-typography": true,
  };
});

const wrapTitle = computed(() => {
  return slots && slots.length ? "div" : `h${props.level}`;
});
</script>

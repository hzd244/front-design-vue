<script setup lang="ts">
defineOptions({ name: "Snippet" });

defineProps({
  type: {
    type: Number,
    default: 0,
  },
  label: {
    type: String,
    default: "",
  },
  color: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div
    :class="['front-color-card', `front-color-card-${type}`]"
    :style="{ background: color }"
  >
    <template v-if="type === 0">
      <span v-if="label" class="front-color-label">{{ label }}</span>
      <span v-if="color" class="front-color-value">{{ color }}</span>
    </template>

    <template v-else-if="type === 1">
      <span v-if="label" class="front-color-label-1">{{ label }}</span>
    </template>

    <template v-else-if="type === 2">
      <span v-if="label" class="front-color-label-2">{{ label }}</span>
    </template>
  </div>
</template>

<style lang="less" scoped>
.front-color-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: fit-content;
  height: 60px;
  font-size: 16px;
  border-radius: 8px;
  color: #fff;
  outline: none;
  transition: transform 0.2s;
  box-sizing: border-box;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
}

.front-color-card-0 {
  width: 380px;

  .front-color-value {
    font-size: 14px;
  }
}

.front-color-card-1 {
  width: 250px;
  height: 48px;
  border-radius: 0;
}

.front-color-card-2 {
  align-items: flex-start;
  padding: 12px 20px;
  width: 182px;
  height: 88px;

  .front-color-label-2 {
    font-weight: 500;
  }
}
</style>

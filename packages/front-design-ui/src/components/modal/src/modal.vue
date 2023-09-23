<template>
  <Teleport :to="target">
    <div>
      <Transition name="fade" appear>
        <div
          v-show="modelValue"
          :class="[
            bem('mask'),
            bem({
              maskBg: showMask,
            }),
          ]"
        ></div>
      </Transition>
      <Transition name="zoom-in-top" appear>
        <div
          v-show="modelValue"
          :class="bem('modal')"
          @click.self="closeMaskToCloseModal"
        >
          <div
            :class="[
              bem('main'),
              bem({
                shadow: !props.showMask,
                size: size === 'small',
              }),
            ]"
          >
            <div :class="bem('header')">
              <slot name="header">
                <div :class="bem('title')">
                  {{ title }}
                </div>
              </slot>
              <div :class="bem('close')" @click="closeModal">
                <IconCloseOutline />
              </div>
            </div>
            <div :class="bem('content')">
              <slot />
            </div>
            <div v-if="showFooter" :class="bem('footer')">
              <div class="front-modal-footer-option">
                <slot name="footer">
                  <front-space size="m">
                    <front-button type="secondary" @click="closeModal">
                      取消
                    </front-button>
                    <front-button @click="handleSubmit">确定</front-button>
                  </front-space>
                </slot>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { watch, onUnmounted, ref, onMounted } from "vue";
import { createCssScope } from "../../../utils";
import { modalBaseProps } from "./modal";
// import { IconCloseOutline } from '../../svg-icon'
import FrontButton from "../../button";
import "../style";

defineOptions({
  name: "FrontModal",
});

const props = withDefaults(defineProps<modalBaseProps>(), {
  modelValue: false,
  title: "",
  size: "large",
  showFooter: true,
  to: "body",
  scrollable: false,
  closeable: false,
  showMask: true,
  escapable: true,
});
const bem = createCssScope("modal");
const emit = defineEmits(["onCloseModal", "update:modelValue", "onSubmit"]);
const target = ref<HTMLElement>(document.body);
const closeModal = () => {
  emit("update:modelValue", false);
  emit("onCloseModal");
};
onUnmounted(() => {
  document.body.removeEventListener("keydown", escapeClose);
  document.body.style.overflow = "";
});

const initScroll = () => {
  if (props.modelValue) {
    if (props.escapable) {
      document.body.addEventListener("keydown", escapeClose);
    }
    !props.scrollable && (document.body.style.overflow = "hidden");
  } else {
    document.body.style.overflow = "";
  }
  if (props.to) {
    target.value = getElement(props.to || "body");
  }
};

watch(props, () => {
  initScroll();
});

onMounted(() => {
  initScroll();
});

const escapeClose = (ev: KeyboardEvent) => {
  if (ev.key === "Escape") closeModal();
};
const closeMaskToCloseModal = () => {
  props.closeable && emit("update:modelValue", false);
};
const getElement = (selector: string): HTMLElement => {
  return document.querySelector(selector) ?? document.body;
};
const handleSubmit = () => {
  emit("onSubmit");
};
</script>

<style lang="less" scoped></style>

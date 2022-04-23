<template>
  <div class="glassWrapper">
    <div
      class="glass"
      :style="`
  background: rgba(255, 255, 255, ${props.opacity});
  backdrop-filter: blur(${props.blur}px);
  -webkit-backdrop-filter: blur(${props.blur}px);
  `"
    />
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  opacity: {
    type: [Number, String],
    default: 0.3,
  },
  blur: {
    default: 16,
    type: [Number, String],
  },
  black: Boolean,
});
</script>

<style lang="scss">
.glass {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}

.glassWrapper > * {
  z-index: 1;
}
</style>

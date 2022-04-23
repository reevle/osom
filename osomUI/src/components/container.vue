<template>
  <div class="container" :class="{ fluid }">
    <slot />
  </div>
</template>

<script setup>
defineProps({
  fluid: Boolean,
});
</script>

<style lang="scss" scoped>
.container {
  width: 1000px;
  max-width: calc(100% - 64px);
  margin: 0 auto;
  padding: 8px;

  &.fluid {
    width: calc(100% - 16px);
    max-width: unset;
  }
}
</style>

<template>
  <div class="appbar">
    <osom-icon
      height="55"
      width="80"
      v-if="logo"
      :icon="logo"
      v-bind="typeof logo === 'object' ? logo : { icon: logo }"
    />

    <slot />
  </div>
</template>

<script setup>
defineProps({
  logo: [String, Object],
});
</script>

<style lang="scss">
.appbar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100vw;
  height: 48px;
  border-bottom: 1px solid var(--borderColor);
  font-size: 16px;
  display: flex;
  align-items: center;
  padding: 8px 16px;

  a {
    padding: 4px 16px;
    text-decoration: none;
    color: var(--textColor);
    letter-spacing: 1rem;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 16px;
    line-height: normal;
    letter-spacing: 0.0892857143em;
    font-family: Roboto, sans-serif;

    &.active {
      color: var(--primaryColor);
      border-bottom: 3px solid var(--primaryColor);
      padding-bottom: 0px;
      font-weight: 400;
    }
  }

  a:hover {
    color: var(--appBarTextColor);
    background-color: rgba(var(--primaryColorRGB), 0.5);
  }

  .logo {
    font-size: 1rem;
    font-weight: bold;
    height: 64px;
  }
}
</style>

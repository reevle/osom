<script setup>
import { appWindow } from "@tauri-apps/api/window";
</script>

<template>
  <div data-tauri-drag-region class="titlebar">
    <div class="titlebar-button" id="titlebar-minimize">
      <img
        src="https://api.iconify.design/mdi:window-minimize.svg"
        alt="minimize"
        @click="appWindow.minimize"
      />
    </div>
    <div class="titlebar-button" id="titlebar-maximize">
      <img
        src="https://api.iconify.design/mdi:window-maximize.svg"
        alt="maximize"
        @click="appWindow.toggleMaximize"
      />
    </div>
    <div class="titlebar-button" id="titlebar-close">
      <img
        src="https://api.iconify.design/mdi:close.svg"
        alt="close"
        @click="appWindow.close"
      />
    </div>
  </div>
</template>

<style>
.titlebar {
  height: 30px;
  user-select: none;
  display: flex;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.titlebar-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
}
.titlebar-button:hover {
  cursor: pointer;
  background: #5bbec3;
}
</style>

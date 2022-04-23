<script setup>
import "osom-ui/style.css";
import { Theme } from "osom-ui";
import Titlebar from "./components/app/Titlebar.vue";

const { state, toggleTheme } = Theme();
const { theme } = state;
</script>

<template>
  <OsomGlass blur="50" opacity="0.3">
    <OsomApp>
      <OsomSidebar>
        <osom-btn>
          <osom-icon
            :icon="theme !== 'light' ? 'sun' : 'moon'"
            @click="toggleTheme"
          />
        </osom-btn>
      </OsomSidebar>
      <Titlebar />
      <OsomGlass>dsada</OsomGlass>
    </OsomApp>
  </OsomGlass>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

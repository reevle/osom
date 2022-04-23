<template>
  <component
    v-if="!mdi"
    :is="icon"
    :class="{
      active,
      disabled,
      'mr-1': left,
      'ml-1': right,
      clickable: onClick,
    }"
    :style="{ color }"
    :width="width || size || '' + (width || size ? 'px' : '')"
    :height="height || size || '' + (height || size ? 'px' : '')"
    :title="title"
    @click="onClick"
  />
  <svg
    v-else
    :class="{
      active,
      disabled,
      'mr-1': left,
      'ml-1': right,
      clickable: onClick,
    }"
    :style="{ color }"
    :width="width || size || '' + (width || size ? 'px' : '')"
    :height="height || size || '' + (height || size ? 'px' : '')"
    :title="title"
    @click="onClick"
    viewBox="0 0 18 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path :d="mdi" stroke="currentColor" stroke-width="2" />
  </svg>
</template>

<script>
import { defineComponent } from "vue";
import moon from "./icons/moon.vue";
import dotsVertical from "./icons/dots-vertical.vue";
import sun from "./icons/sun.vue";
import logo from "./icons/logo.vue";
import rnlogo from "./icons/rnlogo.vue";
import save from "./icons/save.vue";
import close from "./icons/close.vue";
import rnfilter from "./icons/filter.vue";
import timeFilter from "./icons/timeFilter.vue";
import sortAsc from "./icons/sort-asc.vue";
import sortDesc from "./icons/sort-desc.vue";
import vueIcon from "./icons/vueIcon.vue";
import analitycs from "./icons/analitycs.vue";
import person from "./icons/person.vue";
import rig from "./icons/rig.vue";
import graphIcon from "./icons/graph.vue";
import exlamation from "./icons/exclamaitionPoint.vue";
import rectangle from "./icons/rectangle.vue";
import bigRectangle from "./icons/bigRectangle.vue";
import openedBook from "./icons/openedBook.vue";

import home from "./icons/home.vue";
import account from "./icons/account.vue";
import magnify from "./icons/magnify.vue";
import chat from "./icons/chat.vue";

import xlExport from "./icons/xlImportExport/xlExport.vue";

import search from "./icons/standart/Search.vue";
import accept from "./icons/standart/Accept.vue";
import cancel from "./icons/standart/Cancel.vue";
import calendar from "./icons/standart/Calendar.vue";
import summ from "./icons/standart/summ.vue";
import cols from "./icons/standart/cols.vue";
import rows from "./icons/standart/rows.vue";

import list from "./icons/list.vue";

import chevronDown from "./icons/arrows/chevronDown.vue";
import chevronUp from "./icons/arrows/chevronUp.vue";
import chevronLeft from "./icons/arrows/chevronLeft.vue";
import chevronRight from "./icons/arrows/chevronRight.vue";
import upRightVector from "./icons/arrows/upRightVector.vue";
import download from "./icons/arrows/download.vue";
import upload from "./icons/arrows/upload.vue";

import vk from "./icons/social/vk.vue";
import google from "./icons/social/google.vue";
import heart from "./icons/social/heart.vue";
import heartOutline from "./icons/social/heart-outline.vue";
import bookmarkOutline from "./icons/social/bookmark-outline.vue";
import commentOutline from "./icons/social/comment-outline.vue";
import shareOutline from "./icons/social/share-outline.vue";
import bookmark from "./icons/social/bookmark.vue";

import camera from "./icons/camera.vue";
import imagePlus from "./icons/imagePlus.vue";

import RnLogoGdis from "./icons/rnLogos/RnLogoGdis.vue";

export default defineComponent({
  components: {
    home,
    dotsVertical,
    account,
    magnify,
    chat,
    moon,
    sun,
    save,
    close,
    logo,
    rnlogo,
    rnfilter,
    timeFilter,
    sortAsc,
    sortDesc,
    vueIcon,
    analitycs,
    person,
    rig,
    graphIcon,
    exlamation,
    rectangle,
    bigRectangle,
    openedBook,

    xlExport,

    search,
    accept,
    cancel,
    calendar,
    summ,
    cols,
    rows,

    list,

    chevronDown,
    chevronUp,
    chevronLeft,
    chevronRight,
    upRightVector,
    download,
    upload,

    RnLogoGdis,

    camera,
    imagePlus,
    vk,
    google,
    heart,
    heartOutline,
    bookmark,
    bookmarkOutline,
    commentOutline,
    shareOutline,
  },
  name: "rn-icon",
  props: {
    icon: [String, Object],
    color: String,
    title: String,
    size: {
      type: [Number, String],
      default: 24,
    },
    width: [Number, String],
    height: [Number, String],
    disabled: Boolean,
    active: Boolean,
    left: Boolean,
    right: Boolean,
    onClick: Function,
    mdi: String,
  },
});
</script>

<style lang="scss" scoped>
svg {
  width: auto;
}
</style>

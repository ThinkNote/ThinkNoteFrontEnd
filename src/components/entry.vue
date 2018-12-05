<template>
  <DrawerLayout
    ref="drawer"
    :drawer-width="250"
    v-on:mask-click="closeSlide"
  >
    <div
      class="drawer"
      slot="drawer"
    >
      <SlideMenu />
    </div>
    <div
      class="content"
      slot="content"
    >
      <TitleBar
        v-bind:ToggleDrawer="toggleSlide"
        v-bind:switchItems="['笔记','储物箱','讨论区']"
      >
      </TitleBar>
      <slot name="content-mainpage">
        <router-view />
      </slot>
    </div>
  </DrawerLayout>
</template>
<script>
import TitleBar from "./title/TitleBar";
import SlideMenu from "./SlideMenu/SlideMenu";
import DrawerLayout from "./SlideMenu/drawer-layout/DrawerLayout";

export default {
  name: "Entry",
  components: {
    TitleBar,
    SlideMenu,
    DrawerLayout
  },
  methods: {
    toggleSlide: function() {
      this.$refs.drawer.toggle();
    },
    closeSlide:function(){
        this.$refs.drawer.toggle(false);
    }
  }
};
</script>

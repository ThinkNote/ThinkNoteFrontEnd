<template>
  <div>
    <nav class="title-bar">
      <div class="menu-icon" v-on:click="toggleSlide">
        <span class="icon-line" />
        <span class="icon-line" />
        <span class="icon-line" />
      </div>
      <div
        class="page-switch"
        v-for="(item, idx) in switchItems"
        v-bind:key="idx">
        <span :class="{ 'page-switch-item':true,'page-switch-item-selected':idx === SelectedIdx}" v-on:click="selectTitle(idx)">{{item}}</span>
      </div>
    </nav>
  </div>
</template>
<script>
import RouterMaps from '../constraint/router-maps'
export default {
  name: "TitleBar",
  props: ["switchItems", "ToggleDrawer"],
  data() {
    return {
      SelectedIdx:0
    }
  },
  methods: {
    toggleSlide: function() {
      this.ToggleDrawer(true);
    },
    selectTitle: function(idx){
      this.SelectedIdx = idx;
      this.$router.push({name: RouterMaps.RoutePageNameArray[idx]})
    }
  }
};
</script>

<style lang="less">
.menu-icon {
  position: relative;
  padding: 0.7rem 0.75rem;
  margin-right: 1.1rem;
}
.menu-icon:hover {
  background-color: #fff;
  > span {
    background: #0090ff;
  }
}
.fontSelector {
  margin-left: 10px;
  margin-right: 10px;
}
.ivu-select-dropdown,
.ivu-select-selection {
  //hack styles
  border-radius: 0px !important;
}
.page-switch-item {
  padding: 0.4rem 0.75rem 0.6rem 0.75rem;
  border-radius: 4px 4px 0px 0px;
  &:hover, &.page-switch-item-selected{
    background-color: whitesmoke;
    color: #0090ff;
    cursor: default;
  }
}
.title-bar {
  background-color: #0090ff;
  color: #fff;
  border: 1px;
  min-height: 2.4rem;
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  font-size: 12pt;
  align-items: center;
  font-family: "Helvetica Neue For Number", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
    "Helvetica Neue", Helvetica, Arial, sans-serif;
}
.icon-line {
  display: block;
  width: 1.4rem;
  height: 3px;
  background: #fff;
  border-radius: 1px;
  &:nth-child(2),&:nth-child(3){
    margin-top: 4px;
  }
}
</style>

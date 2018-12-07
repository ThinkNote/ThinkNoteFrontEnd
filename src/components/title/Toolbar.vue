<template>
  <div class="toolbar">
    <slot name="toolbar-left-content" />
    <div class="toolbar-center">
      <slot name="toolbar-center-content" />
    </div>
    <div class="toolbar-right">
      <slot name="toolbar-right-content" />
    </div>
  </div>
</template>
<script>
export default {
  name:"Toolbar"
}
</script>
<style lang="less" scoped>
.toolbar {
  display: flex;
  align-items: center;
  height: 40px;
  background-color: whitesmoke;
  flex-wrap: nowrap;
}
.toolbar-left{
  flex: 0 0 auto;
}
.toolbar-center{
  flex: 1 0 auto;
  margin-left: 25px;
  margin-right: 15px;
}
.toolbar-right {
  flex: 1 0 auto;
  text-align: right;
}
</style>

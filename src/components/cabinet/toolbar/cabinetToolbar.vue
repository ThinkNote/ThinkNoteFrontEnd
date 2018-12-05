<template>
  <div class="toolbar">
    <div class="toolbar-left">
      <Icon
        class="menu-btn"
        type="md-arrow-round-back"
      />
      <Icon
        class="menu-btn"
        type="md-arrow-round-forward"
      />
      <Icon
        class="menu-btn"
        type="md-arrow-round-up"
      />
      <Icon
        class="menu-btn"
        type="md-refresh"
      />
    </div>
    <div class="toolbar-center">
      <Breadcrumb>
        <BreadcrumbItem to="/">课程资源(退学必备)</BreadcrumbItem>
        <BreadcrumbItem to="/">大二上</BreadcrumbItem>
        <BreadcrumbItem>计算机组成与嵌入式系统</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div class="toolbar-right">
      <Input
        suffix="ios-search"
        placeholder="您要找些什么..."
        style="width: auto"
      />
      <Icon
        type="md-download"
        class="menu-btn"
      />
      <Icon
        type="md-list-box"
        class="menu-btn"
      />
    </div>
  </div>
</template>
<script>
import { Select, Option, Icon, Input, Breadcrumb, BreadcrumbItem } from "iview";
export default {
  name:"CabinetToolbar",
  
    components: {
    Select,
    Option,
    Icon,
    Input,
    Breadcrumb,
    BreadcrumbItem
  },
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
// 全局通用menu-icon

.menu-btn {
  font-size: 18pt;
  margin-left: 8px;
  padding: 8px;
}
.menu-btn:hover {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  background-color: rgb(230, 230, 230);
}

</style>

<template>
<Toolbar>
    <div slot="toolbar-left-content">
        <Icon class="menu-btn" type="md-arrow-round-back" />
        <Icon class="menu-btn" type="md-arrow-round-forward" />
        <Icon class="menu-btn" type="md-arrow-round-up" />
        <Icon class="menu-btn" type="md-refresh" />
    </div>
    <div slot="toolbar-center-content">
        <Breadcrumb>
            <BreadcrumbItem to="/">课程资源(退学必备)</BreadcrumbItem>
            <BreadcrumbItem to="/">大二上</BreadcrumbItem>
            <BreadcrumbItem>计算机组成与嵌入式系统</BreadcrumbItem>
        </Breadcrumb>
    </div>
    <div slot="toolbar-right-content">
        <Input
        suffix="ios-search"
        placeholder="您要找些什么..."
        style="width: auto"
      />
        <Icon type="md-download" class="menu-btn" />
        <Icon type="md-list-box" class="menu-btn" />
    </div>
</Toolbar>
</template>
<script>
import {
    Select,
    Option,
    Icon,
    Input,
    Breadcrumb,
    BreadcrumbItem
} from "iview";
import Toolbar from '../../title/Toolbar'
export default {
    name: "CabinetToolbar",
    components: {
        Toolbar,
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

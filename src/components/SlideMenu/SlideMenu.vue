<template>
  <div class="slide-menu">
    <div
      class="user-account"
      slot="userAccount"
    >
    <img class="user-avater" src="./TestAvater.png" />
    <div class="user-info">
        <span class="user-name">Nemesiss.Lin</span>
        <span class="user-signature">好想用ThinkNote来复习</span>  
    </div>
    </div>
    <div
      class="setting-items"
      slot="settingItems"
    >
    <ul class="setting-items-list">
        <li class="setting-item">
            设置1
        </li>
        <li class="setting-item">
            设置2
        </li>
        <li class="setting-item">
            打印
        </li>
        <li class="setting-item">
            强制同步
        </li>
        <li class="setting-item">
            设置
        </li>
        <li class="setting-item">
            关于
        </li>
    </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "SlideMenu"
};
</script>
<style lang="less" scoped>
.setting-item{
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 40px;
    cursor: pointer;
    font-size: 12pt;
}
.setting-item:hover {
    background-color: #fff;
}
.setting-items-list{
    list-style: none;
    padding-left: 0px;
}
.slide-menu{
    width: 250px;
    height: 100vh;
    background-color: whitesmoke ;
    display:flex;
    flex-direction: column;
}
.user-account{
    display: flex;
    align-items: center;
    height: 160px;
    width:250px;
    background-color: #008cff;
    color: white;
}
.user-name{
    display: block;
    position: relative;
    font-size: 18pt;
    font-family: "Helvetica Neue For Number", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
    "Helvetica Neue", Helvetica, Arial, sans-serif;
}
.user-signature{
    display: block;
    position: relative;
    font-size: 9pt;
    font-family: "Helvetica Neue For Number", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
    "Helvetica Neue", Helvetica, Arial, sans-serif;
}
.user-avater{
    margin-left: -5px;
    width: 100px;
    clip-path: circle(34px at center);
    position: relative;
}
</style>

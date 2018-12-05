<template>
<div class='side-bar'>
    <table class="side-bar">
        <td>
            <tr>
                物
            </tr>
            <tr>
                DS
            </tr>
            <tr>
                组
            </tr>
        </td>
        <td>
            <tr>
                Chapter1
            </tr>
            <tr>
                1.1
            </tr>
            <tr>
                1.2
            </tr>
            <tr>
                1.3
            </tr>
            <tr>
                Chapter2
            </tr>
            <tr>
                Chapter3
            </tr>
        </td>
    </table>
</div>

</template>
<script>
export default {
  name: 'spine',
  data () {
    return {
    }
  }
}
</script>
<style lang='css' scope>
.side-bar {
    height: 100%;
    width: 50px;
    background-color: whitesmoke;
}
.tool-icon-container {
    padding-top: 0.1px;
    padding-right: 10px;
    padding-bottom: 0.1px;
    padding-left: 10px;
    border-width: 0.1px,0.1px,0.1px,0.1px;
}
.tool-icon {
    width: 20px;
    height: 20px;
}
.top-bar {
    background-color: rgb(100, 149, 237);
}
</style>
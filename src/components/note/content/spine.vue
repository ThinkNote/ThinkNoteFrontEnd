<template>
<div class='side-bar'>
    <table class="side-bar">
        <td class='bordered_td'>
            <tr>
                <notebook abbr='物' color='green'></notebook>
            </tr>
            <tr>
                <notebook abbr='DS' color='blue'></notebook>
            </tr>
            <tr>
                <notebook abbr='数' color='pink'></notebook>
            </tr>
        </td>
        <td>
            <tr>
                <notepage title='Chapter1'></notepage>
            </tr>
            <tr>
                <notepage title='1.1'></notepage>
            </tr>
            <tr>
                <notepage title='1.2'></notepage>
            </tr>
            <tr>
                <notepage title='1.3'></notepage>
            </tr>
            <tr>
                <notepage title='Chapter2'></notepage>
            </tr>
            <tr>
                <notepage title='Chapter34444444444444444444444444444444444444444'></notepage>
            </tr>
        </td>
    </table>
</div>
</template>
<script>
import notebook from './guidance/notebook.vue'
import notepage from './guidance/notepage.vue'
export default {
  name: 'spine',
  components: {notebook,notepage},
  data () {
    return {
    }
  }
}
</script>
<style>
/*table { border: none; border-collapse: collapse; }
table td { border-left: 1px solid #000; }
table td:first-child { border-left: none; }*/
.bordered_td {
    border-right: 2px solid;
    border-color: white;
}
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
<template>
<div class="top-bar">
    <table>
        <td>
            <input type="button" class="button" id="edit" onclick="">
                <label for="edit">编辑</label>
        </td>
        <td>
            <input type="button" class="button" id="draw" onclick="">
                <label for="draw">绘图</label>
        </td>
        <td>
            <input type="button" class="button" id="foo" onclick="">
                <label for="foo">占位</label>
        </td>
        <td class='tool-icon-container'>
            <img class='tool-icon' src="../../../assets/logo.png">
        </td>
        <td class='tool-icon-container'>
            <img class='tool-icon' src="../../../assets/logo.png">
        </td>
        <td class='tool-icon-container'>
            <img class='tool-icon' src="../../../assets/logo.png">
        </td>
        <td class='tool-icon-container'>
            <img class='tool-icon' src="../../../assets/logo.png">
        </td>
        <td class='tool-icon-container'>
            <img class='tool-icon' src="../../../assets/logo.png">
        </td>
    </table>
</div>

</template>
<script>
export default {
  name: 'NoteToolbar',
  data () {
    return {
    }
  }
}
</script>
<style>
.bar{
    height:100%;
}
.side-bar {
    height: 100%;
    width: 50px;
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
.button{
    width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
}

.button + label{
    font-size: 1.25em;
    font-weight: 700;
    color: white;
    background-color: rgba(100, 149, 237, 0.829);
    display: inline-block;
    cursor: pointer;
}

.button:focus + label,
.button + label:hover {
    background-color: rgb(100, 149, 237);
}    
</style>
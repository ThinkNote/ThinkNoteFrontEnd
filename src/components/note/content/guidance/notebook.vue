<template>
    <div>
        <input type="button" class="notebook" >
        <label for="edit" :style='set_color'>{{ abbr }}</label>
    </div>
</template>
<script>
export default {
    name: 'notebook',
    props: ['abbr','color'],
    computed: {
      set_color () {
        return 'color: ' + this.color + ';border-color: ' + this.color;
      }
    }
}
</script>


<style>
.notebook{
    width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
    z-index: -1;
}

.notebook + label{
    font-size: 1em;
    font-weight: 700;
    background-color: white;
    /*display: inline-block;*/
    flex-direction: column;
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius:50%;
    border-style: solid;
    border-width: 5px;
    height: 2em;
    width: 2em;
}

.notebook:focus + label,
.notebook + label:hover {
    background-color: whitesmoke;
}    
</style>
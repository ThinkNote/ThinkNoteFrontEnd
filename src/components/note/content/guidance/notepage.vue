<template>
    <div>
        <input type="button" class="notepage" >
        <label for="edit">{{ title }}</label>
    </div>
</template>
<script>
export default {
    name: 'notepage',
    props: ['title']
}
</script>


<style>
.notepage{
    width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
    z-index: -1;
}

.notepage + label{
    font-size: 1em;
    font-weight: 300;
    background-color: whitesmoke;
    display: inline-block;
    cursor: pointer;
    border-width: 100%;
    border-style: solid;
    border-color: whitesmoke;
    width: 100%;
}

.notepage:focus + label,
.notepage + label:hover {
    background-color: white;
    border-color: white;
}    
</style>
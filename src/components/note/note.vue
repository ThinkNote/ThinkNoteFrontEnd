<template>
<div class="note">
    <NoteToolbar></NoteToolbar>
    <div class="note-content">
        <spine></spine>
        <div class="note-page-content">
            <canvas id="note-page-canvas" style="border:1px solid black" />
        </div>
    </div>
</div>
</template>

<script>
import spine from './content/spine.vue'
import NoteToolbar from './toolbar/noteToolbar.vue'
import {
    setTimeout
} from 'timers';
export default {
    name: 'note',
    components: {
        spine,
        NoteToolbar
    },
    data() {
        return {

        }
    }
}
</script>

<style>
.note {
    height: 100vh;
    overflow: hidden;
}

.note-content {
    display: flex;
}
</style>

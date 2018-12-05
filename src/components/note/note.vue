<template>
<div class="note">
    <NoteToolbar></NoteToolbar>
    <spine></spine>
</div>
</template>
<script>
import spine from './content/spine.vue'
import NoteToolbar from './toolbar/noteToolbar.vue'
export default {
  name: 'note',
  components: { spine,NoteToolbar },
  data () {
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
</style>
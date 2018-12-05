<template>
  <div class="main-content">
    <CabinetToolbar />
    <div
      class="fileManager"
      style="display:flex"
    >
      <DirectoryTree />
      <FileList />
    </div>
  </div>
</template>
<script>
import CabinetToolbar from './toolbar/cabinetToolbar'
import DirectoryTree from './content/directoryTree'
import FileList from './content/fileList'
export default {
    name:"Cabinet",
    components:{
        DirectoryTree,
        FileList,
        CabinetToolbar
    }
};
</script>

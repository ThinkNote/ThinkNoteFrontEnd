<template>
  <div style="width:100%">
    <Table
      border
      ref="selection"
      :columns="columnsDefination"
      :data="rowsData"
    ></Table>
  </div>
</template>
<script>
import { Table, Button } from "iview";
export default {
  name: "FileList",
  components: {
    Table,
    Button
  },
  data() {
    return {
      columnsDefination: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          title: "文件名",
          key: "fileName",
        },
        {
          title: "状态",
          key: "fileStatus",
          align: "center",
          width: 70,
        },
        {
          title: "修改日期",
          key: "modifyDate",
          width: 200,
        }
      ],
      rowsData: [
        {
          fileName: "1-Chapter5-BasicProcessingUnit.pptx",
          fileStatus: "√",
          modifyDate: "2016-10-03"
        },
        {
          fileName: "5-Chapter8-VM&Secondary.pptx",
          fileStatus: "X",
          modifyDate: "2016-10-03"
        },
        {
          fileName: "3-Chapter8-BasicConcepts&RAM.pptx",
          fileStatus: "X",
          modifyDate: "2016-10-03"
        },
        {
          fileName: "Lesson1-Chapter1-BasicSturcture.pptx",
          fileStatus: "X",
          modifyDate: "2016-10-03"
        }
      ]
    };
  },
  methods: {
    handleSelectAll(status) {
      this.$refs.selection.selectAll(status);
    }
  }
};
</script>
<style lang="less" scoped>
</style>

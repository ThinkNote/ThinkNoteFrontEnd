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
          fileName: "今天又是一个不能睡觉的夜晚.pptx",
          fileStatus: "√",
          modifyDate: "2016-10-03"
        },
        {
          fileName: "不仅要做UI.pptx",
          fileStatus: "X",
          modifyDate: "2016-10-03"
        },
        {
          fileName: "还要写组件.pptx",
          fileStatus: "X",
          modifyDate: "2016-10-03"
        },
        {
          fileName: "甚至还有作业.pptx",
          fileStatus: "X",
          modifyDate: "2016-10-03"
        },
        {
          fileName: "我要死了.pptx",
          fileStatus: "√",
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

<template>
  <div style="width:280px">
    <Tree
    :data="data5"
    :render="renderContent"
  ></Tree>
  </div>
</template>
<script>
import {Tree} from 'iview';
export default {
  name: "DirectoryTree",
  components:{Tree},
  data() {
    return {
      data5: [
        {
          title: "课程资源(退学必备)",
          expand: true,
          render: (h, { root, node, data }) => {
            return h(
              "span",
              {
                style: {
                  display: "inline-block",
                  width: "100%"
                }
              },
              [
                h("span", [
                  h("Icon", {
                    props: {
                      type: "ios-folder-outline"
                    },
                    style: {
                      marginRight: "8px"
                    }
                  }),
                  h("span", data.title)
                ]),
                h("span", {
                  style: {
                    display: "inline-block",
                    float: "right",
                    marginRight: "32px"
                  }
                })
              ]
            );
          },
          children: [
            {
              title: "大二上",
              expand: true,
              children: [
                {
                  title: "离散数学",
                  expand: true
                },
                {
                  title: "计算机组成与嵌入式系统",
                  expand: true
                }
              ]
            },
            {
              title: "大二下",
              expand: true,
              children: [
                {
                  title: "编译原理",
                  expand: true
                },
                {
                  title: "计算机网络",
                  expand: true
                }
              ]
            }
          ]
        }
      ],
      buttonProps: {
        type: "default",
        size: "small"
      }
    };
  },
  methods: {
    renderContent(h, { root, node, data }) {
      return h(
        "span",
        {
          style: {
            display: "inline-block",
            width: "100%"
          }
        },
        [
          h("span", [
            h("Icon", {
              props: {
                type: "ios-folder-outline"
              },
              style: {
                marginRight: "8px"
              }
            }),
            h("span", data.title)
          ]),
          h("span", {
            style: {
              display: "inline-block",
              float: "right",
              marginRight: "32px"
            }
          })
        ]
      );
    },
    append(data) {
      const children = data.children || [];
      children.push({
        title: "appended node",
        expand: true
      });
      this.$set(data, "children", children);
    },
    remove(root, node, data) {
      const parentKey = root.find(el => el === node).parent;
      const parent = root.find(el => el.nodeKey === parentKey).node;
      const index = parent.children.indexOf(data);
      parent.children.splice(index, 1);
    }
  }
};
</script>

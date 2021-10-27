<template>
  <div class="sidebar">
    <el-menu
        active-text-color="#20A0FF"
        text-color="#E5EDF2"
        background-color="#324157"
        default-active="/dashboard"
        class="sidebar-el-menu"
        :collapse="collapse"
        unique-opened
        router
    >
      <template v-for="item in menuItems" :key="item.index">
        <template v-if="item.subs">
          <el-sub-menu :index="item.index" :key="item.index">
            <template #title>
              <i :class="item.icon"></i>
              <span>{{item.title}}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-sub-menu v-if="subItem.subs" :key="subItem.index" :index="subItem.index">
                <template #title>{{subItem.title}}</template>
                <el-menu-item v-for="(threeItem, i) in subItem.subs" :index="threeItem.index" :key="i">
                  {{threeItem.title}}
                </el-menu-item>
              </el-sub-menu>
              <el-menu-item v-else :index="subItem.index" :key="subItem.index">{{subItem.title}}</el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            <span>{{item.title}}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      menuItems: [
        {
          icon: "el-icon-house",
          index: "/dashboard",
          title: "系统首页",
        },
        {
          icon: "el-icon-tickets",
          index: "/table",
          title: "基础表格",
        },
        {
          icon: "el-icon-document-copy",
          index: "/tabs",
          title: "tab选项卡",
        },
        {
          icon: "el-icon-notebook-2",
          index: "3",
          title: "表单相关",
          subs: [
            {
              index: "/form",
              title: "基本表单",
            },
            {
              index: "/upload",
              title: "文件上传",
            },
            {
              index: "4",
              title: "三级菜单",
              subs: [
                {
                  index: "/editor",
                  title: "富文本编辑器",
                },
              ],
            },
          ],
        },
        {
          icon: "el-icon-thumb",
          index: "/icon",
          title: "自定义图标",
        },
        {
          icon: "el-icon-pie-chart",
          index: "/charts",
          title: "schart图表",
        },
        {
          icon: "el-icon-basketball",
          index: "/i18n",
          title: "国际化功能",
        },
        {
          icon: "el-icon-warning-outline",
          index: "7",
          title: "错误处理",
          subs: [
            {
              index: "/permission",
              title: "权限测试",
            },
            {
              index: "/404",
              title: "404页面",
            },
          ],
        }
      ]
    }
  },
  computed: {
    collapse: function () {
      return this.$store.state.collapse;
    }
  }
}
</script>

<style scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
/*
  not选择器，指含有sidebar-el-menu类，不含el-menu--collapse类的标签
  菜单折叠时，标签会自动增加el-menu--collapse标签
*/
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px
}
.sidebar > ul {
  height: 100%;
}

</style>

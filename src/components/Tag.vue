<template>
<div>
  <div class="tags" v-if="tagShow">
    <ul class="tag-box">
      <li class="tag-li" v-for="item in tagsList" :key="item.path">
        <router-link :to="item.path">{{item.name}}</router-link>
        <span class="tag-li-icon"><i class="el-icon-close"></i></span>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: "Tags",
  data() {
    return {
    //  标记tag是否显示
      tagShow: true
    }
  },
  computed: {
    tagsList: function () {
      return this.$store.state.tagsList;
    }
  },
  watch: {
    // 监听路由的变化
    $route(to) {
      let tagObj = {
        path: to.path,
        name: to.meta.title,
        open: true
      };
      let { tagsList } = this.$store.state;
      tagsList.map((item) => {
        if(item.path != to.path) {
          tagsList.push(tagObj)
        }
      })
    }
  },
  mounted() {
    const { tagsList } = this.$store.state;
    // 获取第一次进入页面时 路由的参数
    let firstTagObj = {
      path: this.$route.path,
      name: this.$route.meta.title,
    //  标记页面是否打开
      open: true
    };
    tagsList.push(firstTagObj);
  }
}
</script>

<style scoped>
.tags {
  margin-bottom: 10px;
  padding-left: 10px;
  height: 30px;
  background-color: #fff;
}
.tag-box {
  /*display: flex;*/
  overflow: hidden;
}
.tag-li {
  float: left;
  margin-right: 5px;
  padding: 5px 3px;
  font-size: 12px;
  border: 1px solid #e9eaec;
  background-color: #fff;
  border-radius: 5px;
}
</style>

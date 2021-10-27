<template>
  <div class="home">
    <Header/>
    <Sidebar/>
    <div class="content-box" :class="{'content-collapse': collapse}">
      <Tag/>
      <div class="content">
        <router-view v-slot="{ Component }">
          <transition name="move" mode="out-in">
            <keep-alive>
              <component :is="Component"/>
            </keep-alive>
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script>
// 引入基础组件
import Header from '../components/Header';
import Sidebar from "../components/Sidebar";
import Tag from "../components/Tag"

export default {
  name: 'Home',
  components: {
    Header,
    Sidebar,
    Tag
  },
  computed: {
    collapse: function () {
      return this.$store.state.collapse
    }
  }
}
</script>

<style scoped>
.content-box {
  position: absolute;
  top: 70px;
  left: 250px;
  right: 0;
  bottom: 0;
  background-color: #F0F0F0;
  transition: left 600ms;
  padding-bottom: 20px;
}
.content-collapse {
  left: 60px;
  transition: left 1s;
}
.content {
  padding: 0 10px;
  height: 100%;
  overflow: scroll;
}
</style>

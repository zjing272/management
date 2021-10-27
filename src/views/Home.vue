<template>
  <div class="home">
    <Header/>
    <Sidebar/>
    <div class="content-box">
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
  }
}
</script>

<style scoped>
.content-box {
  padding-left: 250px;
  background-color: #F0F0F0;
}
.content {
  padding: 0 10px 0px 10px;
  height: calc(760px - 36px - 70px);
  overflow: scroll;
}
</style>

<template>
  <div id="myTabbar">
    <mt-tabbar v-model="selected">
      <mt-tab-item id="hot">
        <router-link to="/"> </router-link>
          <img slot="icon" src="../assets/hot.png"> 热门
      </mt-tab-item>
      <mt-tab-item id="订单">
        <router-link to="/playing"></router-link>
          <img slot="icon" src="../assets/playing.png"> 正在播放
      </mt-tab-item>
      <mt-tab-item id="榜单">
        <router-link to="/ranking"> </router-link>
          <img slot="icon" src="../assets/find.png"> 榜单
      </mt-tab-item>
  
      <mt-tab-item id="我的">
        <router-link to="/playing"></router-link> 
          <img slot="icon" src="../assets/more.png"> 我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: false
    }
  }
}
</script>
<style>
#myTabbar {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 99999;
}
#myTabbar  .mint-tab-item{
  position:relative;
}
#myTabbar  .mint-tab-item-label a{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.mint-cell-title {
  flex: 0;
}

.mint-cell-value {
  flex: 1;
}
</style>
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger" @click="toast()">危险按钮</van-button>

    <i class="iconfont icon-leimupinleifenleileibie"></i>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  methods:{
    toast(){
      this.$Toast('提示内容');
      // alert(1)
    }
  }
};
</script>

<style lang="scss">
  .iconfont{
    font-size: 3.2rem !important;
  }
</style>

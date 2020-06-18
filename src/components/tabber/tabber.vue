<template>
  <div class="footer" >
    <van-tabbar v-model="active" route fixed>
      <van-tabbar-item to="/home" icon="home-o">1</van-tabbar-item>
      <van-tabbar-item to="/classify" icon="search">2</van-tabbar-item>
      <van-tabbar-item to="/cart" icon="friends-o">3</van-tabbar-item>
      <van-tabbar-item to="/user" icon="setting-o">4</van-tabbar-item>
    </van-tabbar>
    <router-view />
  </div>
</template>

<script>

export default {
  name: "",
  props: {
    msg: String
  },
  data() {
    return {
      active: 0,
    };
  },
  methods:{
    // onChange(index) {
    //   // console.log(index)
    // },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  $color:"#000000";
  .footer{
    background: $color;
  }

</style>

<template>
   <div id="home">
      <navigation />
      <router-link to="coupon">site</router-link>
      <!-- <div @click="onchange()">123123</div> -->
   </div>
</template>

<script>
import navigation from "@/components/header.vue";

export default {
   components:{
      navigation,
   },
   data() {
      return {
      };
   },
   methods:{
      onchange(){
         // this.$router.push('about')
      }
   }
}

</script>

<style lang='scss' scoped>
   .van-nav-bar .van-icon{
      color: red;
   }
</style>
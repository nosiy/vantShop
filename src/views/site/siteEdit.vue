<template>
   <div id="site">
     <navigation />
     <van-address-edit
        :area-list="areaList"
        show-postal
        show-delete
        show-set-default
        show-search-result
        :search-result="searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"
        @change-detail="onChangeDetail"
      />
   </div>
</template>

<script>
import navigation from "@/components/header.vue";
import areaList from "../../script/area.js";

export default {
  components:{
      navigation,
  },
  data() {
    return {
      areaList,
      searchResult: [],
    };
  },
  methods: {
    onSave() {
      // Toast('save');
    },
    onDelete() {
      // Toast('delete');
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: '黄龙万科中心',
            address: '杭州市西湖区',
          },
        ];
      } else {
        this.searchResult = [];
      }
    },
  },
};

</script>

<style lang='scss'>
  .van-cell{
    text-align: left;
  }
</style>
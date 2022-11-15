<template>
  <div>
    <p>{{ props.msg }}</p>
    <p>{{ list[0] }}</p>
    <p v-for="(item, index) in list" :key="index">{{ item }}</p>
    <p @click="changeListData">改变父组件方法</p>
    <p>{{ childVal }}</p>
    <p>{{childNum}}====</p>
    <p @click="changeNum">改变子组件childNum</p>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, defineExpose } from "vue";
let childVal = ref("我是子组件val");
const props = defineProps({
  msg: String,
  list: {
    type: Array,
    default: () => [],
  },
});

let childNum = ref(20)



// const props = defineProps({
//   msg:String,
//   list:{
//     type:Array,
//     default:()=>[]
//   }
// })

const changeVal = () => {
  childVal.value = "我改变子组件的val";
};

const emits = defineEmits(["changeListData"]);
const changeListData = () => {
  emits("changeListData", "你好我要改变list");
};

const changeNum = ()=>{
  childNum.value = 9999
}


defineExpose({
  changeNum,
  childVal,
  changeVal,
});
</script>

<style scoped lang="scss"></style>

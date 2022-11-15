<template>
  <div class="hello">
      <p> {{store.state.name}} </p>
      <child-com
          ref="child"
          :list="list"
          msg="从父组件传递过来的"
          @changeListData="changeListData"
      />
      <div @click="upClick">{{num1}}</div>
      <div ref="box">通过ref获取DOM</div>
      <div>
          <p>
              name:{{data.name}}
          </p>
          <p>
              age:{{data.age}}
          </p>
          <p>
              pageNo:{{data.pageNo}}
          </p>
        <br>
          <p>{{dataA.age}}</p>
          <p @click="changeDataA">改变dataA</p>
          <p @click="changeData">改变data</p>
          <p> {{add}}  </p>
          <p @click="changeList">改变list</p>
          <p @click="changeChildVal">改变子组件的val</p>
          <p>{{newNum}}</p>
      </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex' // 引入useStore 方法
import childCom from './childCom.vue'
import { watch, ref,onMounted, onUnmounted, reactive,computed,watchEffect } from 'vue';
const store = useStore()  // 该方法用于返回store 实例
let box = ref()
let num1 = ref(10)
let num2 = ref(5)
let list = reactive([
    1,2,3,4
])

let arr = ["aa","bb"]
let reaArr = reactive(arr)

let dataA = reactive({
  age:100
})



let data = reactive({
  name:"",
  age:"10",
  pageSize:10,
  pageNo:1
})

const changeListData = (val)=>{
    console.log(val,'----')
}
let child = ref()
const changeDataA = ()=>{
    child.value.changeNum()
    dataA.age = 500
}


const changeChildVal = ()=>{
  child.value.changeVal()
}

watch(
  data,
  (newVal,oldVal)=>{
      console.log(newVal,oldVal)
  }
)


watch(dataA,(newVal,oldval)=>{
    console.log(newVal,oldval,'===')
})

watchEffect(()=>{
    console.log(data,dataA,'===')
})

const newNum = computed(()=>{
    console.log('==11')
    return num1.value *2
})

const changeList = ()=>{
    data.age = 100
    list[0] = num1.value++
}

const add = computed(()=>{
    return num1.value * num2.value
})

const changeData = ()=>{
    data.name = 'hello'
}


onMounted(()=>{
  console.log("我被创建了")
  console.log( box.value )
})

const upClick = ()=>{
    num1.value++
}

onUnmounted(()=>{
  console.log("我被销毁啦")
})


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

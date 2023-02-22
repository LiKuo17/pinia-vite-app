<template>

<div>
  pinia:{{ Test.current }} -- {{ Test.name }}
  pinia:{{ current }} -- {{ name }}
  change:
  <button @click="changeValue">change</button>
</div>

</template>

<script setup lang='ts'>
import { ref,reactive } from 'vue'
import {useTestStore} from './store'
import {storeToRefs} from 'pinia'
const Test = useTestStore()

// pinia 解构不具有响应式，用storeToRefs
const { current,name} = storeToRefs(Test)
const changeValue = () => {
  // Test.current = 1000
  // Test.$patch({
  //   name: 'wawa'
  // })
  // Test.$patch((state) => {
  //   state.name = 'wawa1'
  // })
  // Test.$state = {
  //   current:222,
  //   name:'111'
  // }
  // Test.setCurrent()
  current.value ++

  console.log(current,name);
  
}
</script>
<style scoped lang='less'>

</style>
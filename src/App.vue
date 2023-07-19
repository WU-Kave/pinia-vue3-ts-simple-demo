
<template>
  <!-- state -->
  <h1>Father</h1>
  <p>姓名：{{ name }}</p>
  <p>年龄：{{ age }}</p>
  <p>性别：{{ sex }}</p>
  <!-- gettter -->
  <button @click="changeName">更改姓名</button>
  <button @click="patchStore">批量修改数据</button>
  <p>新年龄：{{ store.getAddAge(35) }}</p>
  <p>调用其它getter：{{ store.getNameAndAge }}</p>
  <button @click="saveName">调用aciton</button>
  <Child></Child>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from './store/user';
import Child from './child.vue';
import { storeToRefs } from 'pinia';
const store = useUserStore()
// const name = ref<string>(store.name)
// const age = ref<number>(store.age)
// const sex = ref<string>(store.sex)
  // const {name, age, sex} = store // 一次导出
const {name, age, sex} = storeToRefs(store) // 将数据修改转换为响应式

// 更改姓名
const changeName = function() {
  store.name = 'zhangsan'
}

// 批量修改数据
const patchStore = function() {
  store.$patch({
    name: "zhangsan",
    age: 100,
    sex: '女'
  })
}

// 调用 action
const saveName = function() {
  store.saveName('😊😊')
}
</script>


<style scoped>
</style>

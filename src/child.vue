<template>
    <h1>child</h1>
    <p>姓名：{{ name }}</p>
    <p>年龄：{{ age }}</p>
    <p>性别：{{ sex }}</p>
    <button @click="changeName">更改姓名</button>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useUserStore } from "./store/user";
const store = useUserStore()
const {name, age, sex} = storeToRefs(store)
const changeName = function() {
    store.name = 'fuck'
}

</script>

<style scoped>

</style>
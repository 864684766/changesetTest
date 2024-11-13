<script setup lang="ts">
import { ref, onUnmounted, onMounted } from "vue";

onMounted(() => {
  console.log(11111111111);
  // onUnmounted(() => {
  //   console.log(55555555555555555);
  // });
});

onUnmounted(() => {
  debugger;
  console.log(55555555555555555);
});
</script>

<template>
  <div
    class="w-[760px] h-[296px] rounded-[20px_20px_20px_20px] border-2 border-solid border-white bg-custom-gradient p-6"
  >
    hahahahha
  </div>

  <div
    class="w-[760px] h-[290px] rounded-[20px_20px_20px_20px] border-2 border-solid border-white md:bg-custom-gradient p-6"
  >
    123123213213
    <!-- ... -->
  </div>

  <div class="border-custom border-custom-green p-4">
    这是一个自定义边框的 div
  </div>
  <div
    class="w-[150px] h-[180px] shadow-[0px_0px_18px_0px_rgba(0,0,0,0.15)] rounded-[10px_10px_10px_10px] bg-[#fff] ml-5 mt-6 mb-5 p-10"
  >
    犀利
  </div>
  <hr />
  <div class="flex items-center justify-between p-4 bg-green-600 bg-opacity-40">
    <div class="flex-1">内容 1</div>
    <div class="flex-1">内容 2</div>
  </div>

  <button
    class="bg-blue-500 bg-opacity-50 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 hover:bg-opacity-20"
  >
    点击我
  </button>

  <div class="my-test">
    我要测试变量
    <p class="my-children-test">我是子变量</p>
  </div>
  <p class="my-children-test">我是同级变量</p>
  <div class="grid grid-cols-[repeat(_3,_1fr)]">这是一个三列的 grid 布局</div>
  <div class="flex">
    <div class="flex-[1_1_0%]">这是一个 flex 属性为 1 1 0% 的 div</div>
  </div>

  <div
    class="border border-gray-300 rounded shadow-[0px_0px_18px_0px_rgba(0,0,0,0.15)] p-4 sticky bottom-0 bg-[antiquewhite]"
  >
    这是一个带有边框、圆角和阴影的 div
  </div>
</template>

<style scoped>
.my-test {
  background-color: var(---main-bg-color);
  --c-w-100: 400px;
  --c-h-100: 400px;
  width: 600px;
  height: 600px;
}

.my-children-test {
  width: var(--c-w-100);
  height: var(--c-h-100);
  display: block;
  background-color: #69af0c;
}
</style>

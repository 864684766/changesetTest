<template>
  <div>
    <button @click="parseHandle">转换为XML</button>
    <button @click="showHello" class="text-2xl font-bold">显示hello</button>
  </div>
  <HelloWorld v-if="state.panel" />
  <grand-p />

  <newsComp :class-code="state.classCode" @close="closeHandle" ref="newsRef" />

  <button @click="clickHandle">我要点击new的方法</button>
</template>
<script setup lang="ts">
import { XMLBuilder } from "fast-xml-parser";
import { onMounted, reactive, ref } from "vue";
import { msg1, msg2 } from "virtual:my-test-module";
import grandP from "./grandP.vue";
import newsComp from "@/components/newsComp";
import HelloWorld from "@/components/HelloWorld.vue";

const state = reactive({
  info: [
    {
      "?xml": [
        {
          "#text": "",
        },
      ],
      ":@": {
        "@_version": "1.0",
      },
    },
    {
      name: "张三",
      age: 18,
    },
  ],
  panel: true,
  classCode: "1231231231",
});

const newsRef:any = ref("");

onMounted(() => {
  const TXT1 = import.meta.env.TXT1;
  console.log(import.meta.env, msg1(), msg2);
});

const closeHandle = (data: any) => {
  console.log("我的状态:" + data.status);
};

const clickHandle = () => {
  newsRef.value.sayHello();
};

const showHello = () => {
  state.panel = !state.panel;
};

const parseHandle = () => {
  const options = {
    ignoreAttributes: false,
    preserveOrder: true,
    allowBooleanAttributes: true,
    suppressBooleanAttributes: true,
  };
  const builder = new XMLBuilder(options);
  const xmlContent = builder.build(state.info);
  console.log(xmlContent);
};
</script>
<style scoped lang="scss"></style>

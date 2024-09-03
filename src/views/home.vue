<template>
  <div>
    <button @click="parseHandle">转换为XML</button>
  </div>
</template>
<script setup lang="ts">
import { XMLBuilder } from "fast-xml-parser";
import { reactive } from "vue";

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
});
const parseHandle = () => {
  const options = {
    ignoreAttributes: false,
    preserveOrder: true,
    allowBooleanAttributes: true,
    suppressBooleanAttributes: true,
  };
  const builder = new XMLBuilder(options);
  const xmlContent = builder.build(state.info);
  debugger;
  console.log(xmlContent);
};
</script>
<style scoped lang="scss"></style>

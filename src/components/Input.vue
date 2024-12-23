<template>
  <div>
    <Monicon name="mdi:home" />
    <input :placeholder="placeholder" />
  </div>
</template>

<script setup lang="ts">
import { Monicon } from "@monicon/vue";

const props = defineProps({
  placeholder: String,
});
</script>

<style scoped></style>

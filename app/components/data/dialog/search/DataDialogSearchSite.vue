<script setup lang="ts" generic="PATH extends keyof GetCollectionPathResponseMap">
import type {GetCollectionPathResponseMap} from "~~/types";

const props = defineProps<{
  path: PATH
}>()
</script>

<template>
  <data-dialog-search :path title="Site">
    <template #default>
      <p>Search Site</p>
    </template>
  </data-dialog-search>
</template>

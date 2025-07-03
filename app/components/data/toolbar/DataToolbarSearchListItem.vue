<script setup lang="ts" generic="PATH extends keyof GetCollectionPathResponseMap">

import type {GetCollectionPathResponseMap} from "~~/types";
import useCollectionSearchStore from "~/stores/collection-search";

const props = defineProps<{
  path: PATH
}>()

const {isDialogOpen} = storeToRefs(useCollectionSearchStore(props.path))
</script>

<template>
  <v-list-item
    data-testid="data-toolbar-menu-search-list-item"
    title="search"
    @click="isDialogOpen = true"
  >
    <template #prepend>
      <v-icon color="primary" icon="fas fa-magnifying-glass"/>
    </template>
  </v-list-item>
</template>

<style scoped>

</style>

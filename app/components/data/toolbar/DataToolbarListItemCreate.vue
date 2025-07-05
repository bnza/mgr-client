<script setup lang="ts" generic="PATH extends PostPath">

import type {PostPath} from "~~/types";
import useCollectionMutationCreateStore from "~/stores/collection-mutation-create";

const props = defineProps<{
  path: PATH
}>()

const {isDialogOpen} = storeToRefs(useCollectionMutationCreateStore(props.path))
</script>

<template>
  <v-list-item
    data-testid="data-toolbar-menu-create-list-item"
    title="add new"
    @click="isDialogOpen = true"
  >
    <template #prepend>
      <v-icon color="error" icon="fas fa-plus"/>
    </template>
  </v-list-item>
</template>


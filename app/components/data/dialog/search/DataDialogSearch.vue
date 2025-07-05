<script setup lang="ts" generic="PATH extends keyof GetCollectionPathResponseMap">

import type {GetCollectionPathResponseMap} from "~~/types";
import useCollectionSearchStore from "~/stores/collection-search";

const props = defineProps<{
  path: PATH
  title: string
}>()

defineSlots<{
  default(): any
  actions(): any
}>()

const {isDialogOpen: visible} = storeToRefs(useCollectionSearchStore(props.path))
</script>

<template>
  <data-dialog
    data-testid="data-dialog-search"
    :visible
    :title="`Search (${title})`"
  >
    <template #default>
      <slot/>
    </template>
    <template #actions>
      <v-btn
        data-testid="data-dialog-close-button"
        @click="visible=false"
      >close
      </v-btn>
    </template>
  </data-dialog>
</template>

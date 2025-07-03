<script setup lang="ts">
import useItemQueryStore from "~/stores/item-query";
import type {GetItemPathResponseMap} from "~~/types";

const GET_ITEM_PATH = "/api/sites/{id}" as const satisfies keyof GetItemPathResponseMap

const {acl, data, status} = storeToRefs(useItemQueryStore(GET_ITEM_PATH))
const code = computed(() => {
  let code
  if (status.value === 'success' && data.value) {
    code = data.value.code
  }
  return code
})
</script>

<template>
  <lazy-data-item-page
    path="/api/sites/{id}"
    title="Site"
    :identifier="code"
  >
    <template v-if="acl" #toolbar-append>
      <data-toolbar-item-action-menu :acl/>
    </template>
    <template #default="{item}">
      <lazy-data-item-form-read-site :item/>
    </template>
  </lazy-data-item-page>
</template>


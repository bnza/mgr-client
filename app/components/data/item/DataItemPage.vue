<script setup lang="ts" generic="PATH extends keyof GetItemPathResponseMap">
import useItemQueryStore from "~/stores/item-query";
import type {GetItemPathResponseMap} from "~~/types";

const props = defineProps<{
  path: PATH,
  title: string
  identifier?: string
}>()

defineSlots<{
  append(): any
  default(props: { item: GetItemPathResponseMap[PATH] }): any
  'toolbar-append'(): any
}>()

const {routeId} = useAppRoute()

const itemQueryStore = useItemQueryStore(props.path)

const {id, data: item, status, error} = storeToRefs(itemQueryStore)

id.value = routeId

</script>

<template>
  <data-card
    :title
    :identifier
    :loading="status === 'pending'"
  >
    <template #toolbar-append>
      <slot name="toolbar-append"/>
    </template>
    <template #default>
      <loading-component v-if="status === 'pending'"/>
      <resource-not-found v-else-if="error !== null" :error="error" :path="props.path"/>
      <slot v-else-if="item" v-bind="{item}"/>
    </template>
    <template #append>
      <slot name="append"/>
    </template>
  </data-card>
</template>


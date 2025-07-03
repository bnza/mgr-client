<script setup lang="ts">
import type {DataStateStatus} from "@pinia/colada";

const props = withDefaults(
  defineProps<{
    title: string
    identifier?: string
    loading?: boolean
  }>(),
  {
    loading: false
  })

defineSlots<{
  default(): any
  'toolbar-append'(): any
}>()
</script>

<template>
  <v-card
    data-testid="data-card"
    :loading
    :rounded="false"
    class="w-100 h-100"
  >
    <template #default>
      <data-card-toolbar v-bind="$props">
        <template #toolbar-append>
          <slot name="toolbar-append"/>
        </template>
      </data-card-toolbar>
      <slot>
        <loading-component/>
      </slot>
    </template>
  </v-card>
</template>

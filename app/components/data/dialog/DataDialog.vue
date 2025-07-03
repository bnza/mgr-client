<script setup lang="ts">
const props = defineProps<{
  visible: boolean
  title: string
}>()
defineSlots<{
  default(): any
  actions(): any
}>()
</script>

<template>
  <v-dialog
    :model-value="visible"
    data-testid="data-dialog"
    fullscreen
  >
    <data-card
      v-if="visible"
      :title
      :show-back-button="false"
    >
      <template #default>
        <slot/>
      </template>
      <template #actions>
        <slot name="actions"/>
      </template>
    </data-card>
  </v-dialog>
</template>

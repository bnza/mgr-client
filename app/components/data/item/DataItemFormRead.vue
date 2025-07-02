<script setup lang="ts">
const props = withDefaults(defineProps<{
    mode?: 'delete' | 'read'
  }>(),
  {
    mode: 'read'
  })
</script>

<template>
  <v-form
    class="mx-4"
    readonly
    data-testid="data-item-form"
    @submit.prevent
  >
    <v-container class="pa-0" fluid>
      <lazy-data-item-delete-alert v-if="mode === 'delete'"/>
      <slot v-else/>
    </v-container>
  </v-form>
</template>


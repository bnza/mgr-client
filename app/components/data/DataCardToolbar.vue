<script setup lang="ts">
const props = defineProps<{
  title: string
  identifier?: string
}>()

defineSlots<{
  'toolbar-prepend'(): any  // No slot props passed to this slot
  'title-append'(): any     // No slot props passed to this slot
  'toolbar-append'(): any   // No slot props passed to this slot
}>()
</script>

<template>
  <v-toolbar
    data-testid="data-card-toolbar"
    density="compact"
  >
    <template #prepend>
      <lazy-navigation-back/>
      <slot name="toolbar-prepend"/>
    </template>
    <template #title
    ><span data-testid="data-card-toolbar-main-title">{{ title }}</span>
      <slot name="title-append"/>
      <span
        v-if="identifier"
        class="font-weight-bold text-secondary pl-6"
        data-testid="data-card-toolbar-identifier"
      >{{ identifier }}
      </span>
    </template>
    <template #append>
      <slot name="toolbar-append"/>
    </template>
  </v-toolbar>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  identifier?: string
  title: string
  showBackButton?: boolean
}>(), {
  showBackButton: true
})

defineSlots<{
  'toolbar-prepend'(): any
  'title-append'(): any
  'toolbar-append'(): any
}>()
</script>

<template>
  <v-toolbar
    data-testid="data-card-toolbar"
    density="compact"
  >
    <template #prepend>
      <lazy-navigation-back v-if="showBackButton"/>
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

<script setup lang="ts">
defineProps<{
  value: string
  title: string
}>()
</script>

<template>
  <v-expansion-panel :value>
    <v-expansion-panel-title class="text-grey-lighten-1 text-overline">{{
      title
    }}</v-expansion-panel-title>
    <v-expansion-panel-text>
      <slot />
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

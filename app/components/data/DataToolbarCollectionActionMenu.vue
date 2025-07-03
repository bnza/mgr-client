<script setup lang="ts">
import type {CollectionAcl} from "~~/types";

defineProps<{
  acl: CollectionAcl
}>()
</script>

<template>
  <v-btn icon>
    <v-icon>fas fa-ellipsis-vertical</v-icon>
    <v-menu activator="parent">
      <v-list>
        <v-list-item
          title="search"
        >
          <template #prepend>
            <v-icon color="primary" icon="fas fa-magnifying-glass"/>
          </template>
        </v-list-item>
        <v-list-item
          title="download"
          :disabled="!acl.canExport"
        >
          <template #prepend>
            <v-icon color="primary" icon="fas fa-download"/>
          </template>
        </v-list-item>
        <v-list-item
          title="add"
          :disabled="!acl.canCreate"
        >
          <template #prepend>
            <v-icon color="error" icon="fas fa-plus"/>
          </template>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-btn>
</template>


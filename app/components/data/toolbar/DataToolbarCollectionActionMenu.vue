<script setup lang="ts" generic="PATH extends keyof GetCollectionPathResponseMap">
import type {CollectionAcl, GetCollectionPathResponseMap} from "~~/types";

defineProps<{
  acl: CollectionAcl
  path: PATH
}>()
</script>

<template>
  <v-btn
    data-testid="data-toolbar-collection-action-menu-button"
    icon
  >
    <v-icon>fas fa-ellipsis-vertical</v-icon>
    <v-menu
      activator="parent"
      data-testid="data-toolbar-collection-action-menu"
    >
      <v-list>
        <data-toolbar-search-list-item :path/>
        <v-list-item
          v-if="acl.canExport"
          title="download"
        >
          <template #prepend>
            <v-icon color="primary" icon="fas fa-download"/>
          </template>
        </v-list-item>
        <v-list-item
          v-if="acl.canCreate"
          title="add"
        >
          <template #prepend>
            <v-icon color="error" icon="fas fa-plus"/>
          </template>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-btn>
</template>


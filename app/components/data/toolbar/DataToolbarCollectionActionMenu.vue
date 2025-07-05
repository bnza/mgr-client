<script setup lang="ts" generic="PATH extends keyof GetCollectionPathResponseMap">
import type {CollectionAcl, GetCollectionPathResponseMap} from "~~/types";
import DataToolbarListItemCreate from "~/components/data/toolbar/DataToolbarListItemCreate.vue";

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
        <data-toolbar-list-item-search :path/>
        <data-toolbar-list-item-create v-if="acl.canCreate" :path/>
        <v-list-item
          v-if="acl.canExport"
          title="download"
        >
          <template #prepend>
            <v-icon color="primary" icon="fas fa-download"/>
          </template>
        </v-list-item>

      </v-list>
    </v-menu>
  </v-btn>
</template>


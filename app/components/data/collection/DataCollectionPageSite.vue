<script setup lang="ts">
import type {GetCollectionPathResponseMap} from "~~/types";

const resourceKey = "site"

const GET_COLLECTION_PATH = "/api/sites" as const satisfies keyof GetCollectionPathResponseMap

const {siteCollectionAcl} = useAppAuth()
</script>

<template>
  <data-card title="Sites">
    <template #toolbar-append>
      <data-toolbar-collection-action-menu
          :acl="siteCollectionAcl"
          :path="GET_COLLECTION_PATH"
      />
    </template>
    <data-collection-table :operation="GET_COLLECTION_PATH">
      <template #[`item.id`]="{ item  }">
        <navigation-resource-item
            :id="item.id"
            :acl="item._acl"
            :app-path="getApiResourceConfig(resourceKey).appPath"
        />
      </template>
    </data-collection-table>
    <template #append>
      <data-dialog-search-site :path="GET_COLLECTION_PATH"/>
    </template>
  </data-card>
</template>

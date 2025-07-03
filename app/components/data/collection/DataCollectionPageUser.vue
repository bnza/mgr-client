<script setup lang="ts">
import type {GetCollectionPathResponseMap} from "~~/types";

const resourceKey = "user"

const GET_COLLECTION_PATH = "/api/users" as const satisfies keyof GetCollectionPathResponseMap
</script>

<template>
  <data-card title="Users">
    <data-collection-table :operation="GET_COLLECTION_PATH">
      <template #[`item.id`]="{ item }">
        <navigation-resource-item
          :id="item.id"
          :acl="item._acl"
          :app-path="getApiResourceConfig(resourceKey).appPath"
        />
      </template>
    </data-collection-table>
  </data-card>
</template>

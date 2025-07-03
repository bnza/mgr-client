<script setup lang="ts">
import type {GetCollectionPathResponseMap} from "~~/types";
import useCollectionQueryStore from "~/stores/collection-query";

const resourceKey = "site"

const GET_COLLECTION_PATH = "/api/sites" as const satisfies keyof GetCollectionPathResponseMap

const {siteCollectionAcl} = useAppAuth()
</script>

<template>
  <data-card title="Sites">
    <template #toolbar-append>
      <data-toolbar-collection-action-menu :acl="siteCollectionAcl"/>
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
  </data-card>
</template>

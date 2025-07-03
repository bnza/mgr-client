<script setup lang="ts">
import type {BaseAcl} from "~~/types";

defineProps<{
  acl: BaseAcl
}>()
</script>

<template>
  <v-btn icon>
    <v-icon>fas fa-ellipsis-vertical</v-icon>
    <v-menu activator="parent">
      <v-list>
        <v-list-item
          prepend-icon="far fa-pen-to-square"
          title="edit"
        >
          <template #prepend>
            <v-icon color="success" icon="far fa-pen-to-square"/>
          </template>
        </v-list-item>
        <v-list-item
          title="delete"
        >
          <template #prepend>
            <v-icon color="error" icon="fas fa-minus"/>
          </template>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-btn>
</template>


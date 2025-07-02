<script setup lang="ts">
import type {GetItemResponse} from "~~/types";

const props = defineProps<{
  item: GetItemResponse<"/api/sites/{id}">
}>()
const panel = ref(['identification', 'description'])
</script>

<template>
  <data-item-form-read>
    <v-expansion-panels v-model="panel" variant="accordion" multiple flat>
      <data-expansion-panel value="identification" title="identification">
        <v-row>
          <v-col cols="12" xs="6" sm="2" class="px-2">
            <v-text-field
              :model-value="item.code"
              label="code"
            />
          </v-col>
          <v-col cols="12" xs="6" sm="2" class="px-2">
            <v-text-field
              :model-value="item.name"
              label="name"
            />
          </v-col>
        </v-row>
      </data-expansion-panel>
      <data-expansion-panel value="description" title="description">
        <v-row>
          <v-col cols="12" xs="12" class="px-2">
            <v-textarea v-model="item.description" label="description"/>
          </v-col>
        </v-row>
      </data-expansion-panel>
    </v-expansion-panels>
  </data-item-form-read>
</template>

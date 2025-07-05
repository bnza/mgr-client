<script setup lang="ts" generic="PATH extends PostPath">
import type {PostPath} from "~~/types";
import {stripUndefined} from "~/utils";
import {required} from '@regle/rules'
import {useRegle} from "@regle/core";

const path = '/api/sites' as PATH

const resourceConfig = getApiResourceConfig('site')

const model = reactive({
  code: undefined as string | undefined,
  name: undefined as string | undefined,
  description: undefined as string | undefined
})

const rules = {
  code: {
    required
  },
  name: {
    required
  }
}

const {r$} = useRegle(model, rules)

const item = computed(() => stripUndefined(r$.$value))

const validation = computed(() => ({
  $errors: r$.$errors,
  $invalid: r$.$invalid,
  $pending: r$.$pending,
  $validate: r$.$validate
}))

</script>

<template>
  <data-dialog-create
    :path
    :redirection-base-path="resourceConfig.appPath"
    title="Site"
    :item
    :validation
  >
    <template #default>
      <v-text-field
        v-model="r$.$value.code"
        label="code"
        :error-messages="r$.$errors.code"
      />
      <v-text-field
        v-model="r$.$value.name"
        label="name"
        :error-messages="r$.$errors.name"
      />
      <v-textarea
        v-model="r$.$value.description"
        label="description"
      />
    </template>
  </data-dialog-create>
</template>

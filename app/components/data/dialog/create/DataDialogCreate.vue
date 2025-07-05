<script setup lang="ts" generic="PATH extends PostPath ">

import type {PostPath, PostPathRequestMap,} from "~~/types";
import useCollectionMutationCreateStore from "~/stores/collection-mutation-create";

export type RegleValidation = {
  $errors: Record<string, string[]>
  $invalid: boolean
  $pending: boolean
  $validate: () => Promise<any>
}

const props = defineProps<{
  path: PATH
  redirectionBasePath: string
  title: string
  item: Record<string, unknown>
  validation: RegleValidation
}>()

const createStore = useCollectionMutationCreateStore(props.path)
const {isDialogOpen: visible, data} = storeToRefs(createStore)

const {addError} = useMessagesStore()
const router = useRouter()
const route = useRoute()
const {push} = useHistoryStackStore()
const submit = async () => {
  await props.validation.$validate()

  const isValidItem = (value: any): value is PostPathRequestMap[PATH] => !props.validation.$invalid

  if (!(isValidItem(props.item))) {
    return
  }
  try {
    await createStore.submit(props.item)
    const redirectionPath = `${props.redirectionBasePath}/${data.value!.id!}`
    await router.push(redirectionPath)
    push(route.fullPath)
    visible.value = false
  } catch (e: unknown) {
    addError(e)
  }
}

</script>

<template>
  <data-dialog
    data-testid="data-dialog-create"
    :visible
    :title="`New (${title})`"
  >
    <template #default>
      <v-form data-testid="data-dialog-form">
        <v-sheet class="ma-4">
          <slot @submit.prevent="submit"/>
        </v-sheet>
      </v-form>
    </template>
    <template #actions>
      <v-col class="d-flex justify-center">
        <v-btn
          color="anchor"
          data-testid="data-dialog-form-close-button"
          @click="visible=false"
        >close
        </v-btn>
      </v-col>
      <v-col class="d-flex justify-center">
        <v-btn
          data-testid="data-dialog-form-submit-button"
          @click="submit"
        >submit
        </v-btn>
      </v-col>
    </template>
  </data-dialog>
</template>

<script setup lang="ts">
import {AclVoters} from "~/utils/consts/auth";

definePageMeta({
  voters: [
    AclVoters.HasRoleAdmin
  ]
})
</script>

<template>
  <lazy-data-collection-table-user/>
</template>

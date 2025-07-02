<script setup lang="ts">

</script>

<template>
  <lazy-data-item-page path="/api/sites/{id}" title="Site">
    <template #default="{item}">
      <data-item-form-read-site :item/>
    </template>
  </lazy-data-item-page>
</template>


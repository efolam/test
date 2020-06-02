<template>
  <layout>
    <div class="page__header">
      <div class="page__title">Все задачи</div>

      <app-button
        @click="$modal.show('add-task')"
      >Создать задачу</app-button>
    </div>

    <tasks></tasks>
  </layout>
</template>

<script>
import Layout from '@layouts/Default'

export default {
  components: {
    Layout
  }
}
</script>

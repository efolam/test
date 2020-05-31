<template>
  <div class="tasks">
    <card-task
      v-for="task in tasks"
      :key="task.id"
      :data="task"
    ></card-task>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('tasks', {
      tasks: state => state.items
    })
  }
}
</script>

<style lang="postcss">
.tasks {
  display: grid;
  grid-row-gap: 40px;
}
</style>

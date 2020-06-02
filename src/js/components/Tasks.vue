<template>
  <div class="tasks">
    <div class="tasks__filters">
      <div class="tasks__filters-title">Фильтры</div>

      <div class="tasks__filters-items">
        <div class="tasks__filters-item">
          <div class="tasks__filters-label">По названию</div>

          <app-input
            class="tasks__filters-name"
            :value="filters.name"
            @input="filters.name = $event"
          ></app-input>
        </div>
      </div>
    </div>
    
    <div class="tasks__items">
      <card-task
        v-for="task in filteredTasks"
        :key="task.id"
        :data="task"
      ></card-task>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      filters: {
        name: ''
      }
    }
  },

  computed: {
    ...mapState('tasks', {
      tasks: state => state.items
    }),
    filteredTasks() {
      return this.tasks.filter(task => {
        if (this.filters.name == '') {
          return true
        }

        const regExp = new RegExp(this.filters.name, 'i')

        if (regExp.test(task.title)) {
          return true
        }
      })
    }
  }
}
</script>

<style lang="postcss">
.tasks {
  &__filters {
    margin-bottom: 40px;

    &-title {
      font-size: 20px;
      margin-bottom: 20px;
    }

    &-name {
      width: 200px;
    }
  }

  &__items {
    display: grid;
    grid-row-gap: 40px;
  }
}
</style>

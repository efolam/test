<template>
  <div class="tasks">
    <div class="tasks__filters">
      <div class="tasks__filters-title">Фильтры</div>

      <div class="tasks__filters-items">
        <div class="tasks__filters-item">
          <div class="tasks__filters-label">По названию</div>

          <app-input
            :value="filters.name"
            @input="filters.name = $event"
          ></app-input>
        </div>

        <div class="tasks__filters-item">
          <div class="tasks__filters-label">По статусу</div>

          <app-select
            :value="filters.status"
            @select="filters.status = $event"
            :options="[
              {
                value: 'all',
                label: 'Все'
              },
              {
                value: true,
                label: 'Выполненные'
              },
              {
                value: false,
                label: 'Не выполненные'
              }
            ]"
          ></app-select>
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
        name: '',
        status: 'all'
      }
    }
  },

  computed: {
    ...mapState('tasks', {
      tasks: state => state.items
    }),
    filteredTasks() {
      let filtered = this.tasks

      if (this.filters.name != '') {
        filtered = filtered.filter(task => {
          const regExp = new RegExp(this.filters.name, 'i')

          if (regExp.test(task.title)) {
            return true
          }
        })
      }

      if (this.filters.status != 'all') {
        filtered = filtered.filter(task => {
          if (this.filters.status == task.status) {
            return true
          }
        })
      }

      return filtered
    }
  }
}
</script>

<style lang="postcss">
.tasks {
  &__filters {
    margin-bottom: 40px;

    &-items {
      display: grid;
      grid-template-columns: repeat(2, 200px);
      grid-column-gap: 40px;
    }

    &-title {
      font-size: 20px;
      margin-bottom: 20px;
    }
  }

  &__items {
    display: grid;
    grid-row-gap: 40px;
  }
}
</style>

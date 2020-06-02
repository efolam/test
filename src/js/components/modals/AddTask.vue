<template>
  <modal
    class="modal add-task"
    name="add-task"
    width="100%"
    height="100%"
    @before-open="beforeOpen"
    ref="modal"
  >
    <div class="modal__container" @click="$modal.hide('add-task')">
      <div class="modal__inner" @click.stop="modalInner()">
        <span class="modal__close" @click="$modal.hide('add-task')"></span>

        <div class="modal__title add-task__title">Создать задачу</div>

        <div class="field">
          <div class="field__label">Статус:</div>

          <app-checkbox
            :value="task.status"
            @click="task.status = !task.status"
          >
            {{ task.status ? 'Выполнена' : 'Не выполнена'}}
          </app-checkbox>
        </div>

        <div class="field">
          <div class="field__label">Название:</div>

          <app-input
            :value="task.title"
            @input="task.title = $event"
            placeholder="Название задачи"
          ></app-input>
        </div>

        <div class="field">
          <div class="field__label">Описание:</div>

          <app-textarea
            :value="task.description"
            @input="task.description = $event"
          ></app-textarea>
        </div>

        <app-button
          @click="$modal.hide('add-task')"
        >Отмена</app-button>

        <app-button
          @click="clickAddTask"
        >Сохранить</app-button>
      </div>
    </div>
  </modal>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      params: {},
      task: {
        title: '',
        status: false,
        group: 'Group 1',
        description: ''
      }
    }
  },

  methods: {
    ...mapMutations('tasks', [
      'addTask'
    ]),
    clickAddTask() {
      this.addTask(this.task)
      this.$modal.hide('add-task')
    },
    beforeOpen(event) {
      this.params = event.params || {}
    },
    modalInner() {
      return
    }
  }
}
</script>


<template>
  <modal
    class="modal edit-task"
    name="edit-task"
    width="100%"
    height="100%"
    @before-open="beforeOpen"
    ref="modal"
  >
    <div class="modal__container" @click="$modal.hide('edit-task')">
      <div class="modal__inner" @click.stop="modalInner()">
        <span class="modal__close" @click="$modal.hide('edit-task')"></span>

        <div class="modal__title edit-task__title">{{ params.taskTitle }}</div>

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
          @click="$modal.hide('edit-task')"
        >Отмена</app-button>

        <app-button
          @click="clickUpdateTask"
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
      task: {}
    }
  },

  methods: {
    ...mapMutations('tasks', [
      'updateTask'
    ]),
    clickUpdateTask() {
      this.updateTask(this.task)
      this.$modal.hide('edit-task')
    },
    beforeOpen(event) {
      this.params = event.params || {}
      this.task = { ...event.params.task } || {}
    },
    modalInner() {
      return
    }
  }
}
</script>

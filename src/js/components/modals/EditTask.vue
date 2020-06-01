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

        <br>

        <app-checkbox
          :value="task.status"
          @click="task.status = !task.status"
        >
          {{ task.status ? 'Выполнена' : 'Не выполнена'}}
        </app-checkbox>

        <br>

        <app-input
          :value="task.title"
          @input="updateTitle"
          placeholder="Название задачи"
        ></app-input>

        <br>

        <app-textarea
          :value="task.description"
          @input="updateDescription"
        ></app-textarea>

        <br>

        <app-button
          @click="$modal.hide('edit-task')"
        >Отмена</app-button>

        <br>

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
    updateTitle(event) {
      this.task.title = event
    },
    updateDescription(event) {
      this.task.description = event
    },
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

<style lang="postcss">
@import '../../../css/common/variables.css';

.edit-task {

}
</style>

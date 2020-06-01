<template>
  <modal
    class="modal confirm-delete-task"
    name="confirm-delete-task"
    width="100%"
    height="100%"
    @before-open="beforeOpen"
    ref="modal"
  >
    <div class="modal__container" @click="$modal.hide('confirm-delete-task')">
      <div class="modal__inner" @click.stop="modalInner()">
        <span class="modal__close" @click="$modal.hide('confirm-delete-task')"></span>

        <div class="modal__title confirm-delete-task__title">Предупреждение!</div>

        <p class="confirm-delete-task__message">
          Подтвердите удаление задачи:<br>
          "{{ params.taskName }}"
        </p>

        <app-button
          @click="$modal.hide('confirm-delete-task')"
        >Отмена</app-button>

        <br>

        <app-button
          danger
          @click="removeTaskClick()"
        >Удалить</app-button>
      </div>
    </div>
  </modal>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      params: {}
    }
  },

  methods: {
    ...mapMutations('tasks', [
      'removeTask'
    ]),
    removeTaskClick() {
      this.removeTask(this.params.taskId)
      this.$modal.hide('confirm-delete-task')
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

<style lang="postcss">
@import '../../../css/common/variables.css';

.confirm-delete-task {
  &__title {
    color: $warningColor;
  }

  &__message {
    margin: 30px 0;
    text-align: center;
    line-height: 22px;
  }
}
</style>

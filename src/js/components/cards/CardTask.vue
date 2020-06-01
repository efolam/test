<template>
  <article class="card-task" :class="{ 'card-task--done': data.status }">
    <header class="card-task__header">
      <div class="card-task__title">{{ data.title }}</div>
    </header>

    <section class="card-task__content">
      <app-checkbox
        :value="data.status"
        @click="updateTask({ id: data.id, status: !data.status })"
      >
        {{ data.status ? 'Выполнена' : 'Не выполнена'}}
      </app-checkbox>

      <div class="card-task__group">{{ data.group }}</div>

      <div class="card-task__description">
        <div
          ref="description"
          class="card-task__description-text"
          :class="{ 'card-task__description-text--less': lessDescription }"
          v-html="data.description"
        ></div>

        <div
          v-if="largeDescription"
          class="card-task__description-control" 
          @click="lessDescription = !lessDescription"
          v-text="lessDescription ? 'Развернуть описание' : 'Свернуть описание'"
        ></div>
      </div>
    </section>

    <footer class="card-task__controls">
      <app-button
        @click="$modal.show('edit-task', {
          taskTitle: data.title,
          task: data
        })"
      >Редактировать</app-button>

      <app-button
        danger
        @click="$modal.show('confirm-delete-task', {
          taskId: data.id,
          taskName: data.title
        })"
      >Удалить</app-button>
    </footer>
  </article>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: {
    data: Object
  },

  data() {
    return {
      largeDescription: false,
      lessDescription: false
    }
  },

  mounted() {
    if (this.$refs.description.offsetHeight > 74) {
      this.largeDescription = true
      this.lessDescription = true
    }
  },

  watch: {
    data() {
      this.lessDescription = false

      setTimeout(() => {
        if (this.$refs.description.offsetHeight > 74) {
          this.largeDescription = true
          this.lessDescription = true
        } else {
          this.largeDescription = false
        }
      }, 50);
    }
  },

  methods: {
    ...mapMutations('tasks', [
      'updateTask'
    ])
  }
}
</script>

<style lang="postcss">
@import '../../../css/common/variables.css';

.card-task {
  border: 1px solid $accentColor;
  transition: border-color .3s ease-out;

  &__header {
    padding: 20px;
    background-color: $accentColor;
    color: $lightColor;
    font-family: $secondFont;
    line-height: 22px;
    transition: background-color .3s ease-out;
  }

  &__content {
    padding: 20px 20px 0px 20px;
    display: grid;
    grid-row-gap: 10px;
  }

  &__description {
    &-text {
      overflow: hidden;

      &--less {
        position: relative;
        max-height: 74px;

        &:after {
          content: '';
          width: 100%;
          height: 30px;
          display: block;
          position: absolute;
          bottom: 0;
          background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, .9));
        }
      }
    }

    &-control {
      margin-top: 15px;
      font-size: 14px;
      text-decoration: underline;
      color: $accentColor;
      cursor: pointer;

      &:hover {
        color: $hoverAccentColor;
      }
    }
  }

  &__controls {
    padding: 20px;
    display: flex;
    justify-content: space-between;
  }

  &--done {
    border-color: $successColor;

    .card-task {
      &__header {
        background-color: $successColor;
      }
    }
  }
}
</style>

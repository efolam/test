<template>
  <article class="card-task">
    <header class="card-task__header">
      <div class="card-task__title">{{ data.title }}</div>
    </header>

    <section class="card-task__content">
      <div class="card-task__status">
        <div class="card-task__status-label">{{ data.status ? 'Выполнена' : 'Не выполнена'}}</div>
        <div class="card-task__status-toggler"></div>
      </div>

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
      <app-button>Редактировать</app-button>
      <app-button danger>Удалить</app-button>
    </footer>
  </article>
</template>

<script>
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
    console.log(this.$refs.description.offsetHeight)

    if (this.$refs.description.offsetHeight > 74) {
      this.largeDescription = true
      this.lessDescription = true
    }
  }
}
</script>

<style lang="postcss">
@import '../../../css/common/variables.css';

.card-task {
  border: 1px solid $accentColor;

  &__header {
    padding: 20px;
    background-color: $accentColor;
    color: $lightColor;
    font-family: $secondFont;
    line-height: 22px;
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
}
</style>

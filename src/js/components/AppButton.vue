<template>
  <button
    class="button"
    :class="{ 'button--danger': danger }"
    @click="$emit('click')"
  ><slot></slot></button>
</template>

<script>
export default {
  props: {
    danger: {
      type: Boolean,
      default: false
    },
  }
}
</script>

<style lang="postcss">
@import '../../css/common/variables.css';

.button {
  padding: 10px 20px;
  display: block;
  border: none;
  background-color: $accentColor;
  font-size: 14px;
  color: $lightColor;
  cursor: pointer;

  &:hover {
    background-color: $hoverAccentColor;
    transition: background .3s ease-out;
  }

  &--danger {
    background-color: $dangerColor;

    &:hover {
      background-color: $hoverDangerColor;
    }
  }
}
</style>

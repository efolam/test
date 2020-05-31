<template>
  <label class="checkbox">
    <input
      :value="value"
      @input="$emit('click', $event)"
      class="checkbox__field" 
      :class="{ 'checkbox__field--checked' : value }"
      type="checkbox" 
      v-bind="$attrs"
    >
    <slot></slot>
  </label>
</template>

<script>
export default {
  inheritAttrs: false,

  props: {
    value: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="postcss">
@import '../../css/common/variables.css';

.checkbox {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none;

  &__field {
    margin-right: 10px;
    width: 20px;
    height: 20px;
    border: 2px solid $mainColor;
    background-color: $lightColor;
    background-repeat: no-repeat;
    background-position: center;
    transition: background-color .3s ease-out;
    cursor: pointer;
    -webkit-appearance: none;

    &:focus {
      outline: none;
    }

    &--checked {
      background-image: url("data:image/svg+xml,%3Csvg width='16' height='12' viewBox='0 0 16 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M13.8526 0.948799C14.032 0.760764 14.2383 0.666748 14.4715 0.666748C14.7048 0.666748 14.9111 0.760764 15.0905 0.948799C15.2519 1.11803 15.3327 1.32957 15.3327 1.58341C15.3327 1.83726 15.2519 2.0488 15.0905 2.21803L6.50577 11.2719C6.48783 11.2907 6.46989 11.3095 6.45195 11.3283C6.43401 11.3471 6.41607 11.3659 6.39813 11.3847C6.23666 11.5727 6.03482 11.6667 5.79262 11.6667C5.55042 11.6667 5.34859 11.5727 5.18712 11.3847L0.908217 6.92829C0.746749 6.75906 0.666016 6.54752 0.666016 6.29367C0.666016 6.03982 0.746749 5.82829 0.908217 5.65906C1.08763 5.47102 1.29395 5.377 1.52718 5.377C1.76041 5.377 1.96673 5.47102 2.14614 5.65906L5.77917 9.46675L13.8526 0.948799Z' fill='white'/%3E%3C/svg%3E%0A");
      background-color: $accentColor;
      border: 1px solid $accentColor;
      opacity: 1;
    }
  }
}
</style>

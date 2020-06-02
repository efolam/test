<template>
  <input
    class="input" 
    type="text"
    :value="value"
    @input="$emit('input', $event.target.value)"
  >
</template>

<script>
export default {
  props: ['value']
}
</script>

<style lang="postcss">
@import '../../css/common/variables.css';

.input {
  width: 100%;
  height: 40px;
  padding: 0 12px;
  line-height: 24px;
  outline: none;
  border: 1px solid $mainColor;
  background-color: $lightColor;
  transition: all .3s;

  &::-webkit-input-placeholder,
  &::-moz-placeholder,
  &:-moz-placeholder,
  &:-ms-input-placeholder,
  &::placeholder {
    color: rgba($mainColor, .6);
  }

  &:focus{
    border-color: $accentColor;
  }
}
</style>
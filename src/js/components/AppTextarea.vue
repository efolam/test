<template>
  <textarea
    class="textarea"
    type="text"
    :value="value"
    @input="$emit('input', $event.target.value)"
  ></textarea>
</template>

<script>
export default {
  props: ['value']
}
</script>

<style lang="postcss">
@import '../../css/common/variables.css';

.textarea {
  width: 100%;
  height: 130px;
  padding: 12px;
  line-height: 24px;
  outline: none;
  border: 1px solid $mainColor;
  background-color: $lightColor;

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

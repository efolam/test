<template>
  <div class="select">
    <select
      class="select__field"
      v-bind="$attrs"
      v-model="selected"
      @change="select"
    >
      <option v-for="(option, index) in options"
        :key="index"
        :value="option"
        v-text="option.label"
      ></option>
    </select>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,

  props: {
    value: [String, Boolean],
    options: Array
  },

  data() {
    return {
      selected: this.value
    }
  },

  methods: {
    select(event) {
      this.$emit('select', this.selected.value)
    }
  }
}
</script>

<style lang="postcss">
@import '../../css/common/variables.css';

.select {
  &__field {
    width: 100%;
    height: 40px;
    padding: 0px 32px 0px 16px;
    border: 1px solid $mainColor;
    outline: none;
    appearance: none;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xMC41OTM4IDAuNTc4MTI1TDEyIDEuOTg0MzhMNiA3Ljk4NDM4TDAgMS45ODQzOEwxLjQwNjI1IDAuNTc4MTI1TDYgNS4xNzE4OEwxMC41OTM4IDAuNTc4MTI1WiIgZmlsbD0iIzIyMjIyMiIvPgo8L3N2Zz4K");
    background-repeat: no-repeat;
    background-position: calc(100% - 16px) 50%;
    background-color: #fff;
    cursor: pointer;
    transition: all .3s;

    &:hover {
      background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xMC41OTM4IDAuNTc4MTI1TDEyIDEuOTg0MzhMNiA3Ljk4NDM4TDAgMS45ODQzOEwxLjQwNjI1IDAuNTc4MTI1TDYgNS4xNzE4OEwxMC41OTM4IDAuNTc4MTI1WiIgZmlsbD0iIzI3ODBFMyIvPgo8L3N2Zz4K");
      border-color: $accentColor;
    }
  }
}
</style>

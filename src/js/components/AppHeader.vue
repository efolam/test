<template>
  <header class="header">
    <div class="header__container">
      <router-link to="/" class="header__logo">ToDo's</router-link>
      <slot></slot>
    </div>
  </header>
</template>

<style lang="postcss">
@import '../../css/common/variables.css';

.header {
  height: 50px;
  background-color: $mainColor;
  display: flex;
  align-items: center;

  &__container {
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    align-items: center;
  }

  &__logo {
    margin-right: 60px;
    position: relative;
    z-index: 100;
    text-decoration: none;
    font-size: 24px;
    font-family: $secondFont;
    color: $lightColor;
  }
}
</style>

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
  width: 100vw;
  height: 50px;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 1000;
  background-color: $mainColor;

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

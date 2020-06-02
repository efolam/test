<template>
  <div class="navigation" :class="{'navigation--show': show}">
    <div class="navigation__toggle" @click="show = !show">
      <span></span>
    </div>

    <div class="navigation__overlay">
      <nav class="navigation__container">
        <router-link to="/" class="navigation__link" exact>Главная</router-link>

        <router-link
          v-for="link in links"
          :key="link.url"
          :to="link.url"
          class="navigation__link"
        >{{ link.label }}</router-link>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    links: Array
  },

  data() {
    return {
      show: false
    }
  }
}
</script>

<style lang="postcss">
@import '../../css/common/variables.css';

.navigation {
  display: flex;
  align-items: center;
  color: $lightColor;

  &__overlay {
    @media (--phone) {
      display: none;
      width: 100vw;
      height: 100vh;
      position: absolute;
      left: 0;
      top: 0;
      background-color: rgba($mainColor, .80);
    }
  }

  &__container {
    @media (--phone) {
      width: 280px;
      margin: 0 auto;
      padding-top: 100px;
      display: flex;
      flex-direction: column;
    }
  }

  &__toggle {
    width: 30px;
    height: 30px;
    display: none;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 10px;
    right: 20px;
    z-index: 100;
    cursor: pointer;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Opera and Firefox */

    @media (--phone) {
      display: flex;
    }

    span {
      width: 100%;
      height: 4px;
      position: relative;
      background-color: $lightColor;
      transition: background-color .5s ease;

      &:before,
      &:after {
        content: '';
        width: 100%;
        height: 100%;
        display: block;
        position: absolute;
        background-color: $lightColor;
        transition: all .3s ease-out;
      }
      
      &:before {
        top: -10px;
      }

      &:after {
        bottom: -10px;
      }
    }
  }

  &__link {
    margin-right: 20px;
    text-decoration: none;
    color: $lightColor;

    @media (--phone) {
      margin-right: 0;
      margin-bottom: 20px;
    }

    &:hover {
      color: $accentColor;
    }

    &.router-link-active {
      text-decoration: underline;
    }

    &:last-child {
      margin-right: 0;
    }
  }
}

.navigation.navigation--show {
  .navigation {
    &__toggle {
      span {
        background-color: transparent;
        transition: background-color 0s;

        &:before,
        &:after {
          top: 0;
          background-color: #fff;
        }

        &:before {
          transform: rotate(45deg);
        }

        &:after {
          transform: rotate(-45deg);
        }
      }
    }

    &__overlay {
      @media (--phone) {
        display: block;
      }
    }
  }
}
</style>

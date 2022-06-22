<template>
  <div class="layout">
    <div class="menu-wrap">
      <Menu />
    </div>
    <main>
      <transition name="fade-transform" mode="out-in">
        <router-view :key="key" />
      </transition>
    </main>
  </div>
</template>

<script>
import Menu from "./menu.vue";
export default {
  name: 'Layout',
  components: {
    Menu
  },
  computed: {
    key() {
      return this.$route.path
    },
  }
}
</script>

<style lang="scss" scoped>
.layout {
  width: 100%;
  min-height: 100vh;
  position: relative;
  background-color: #fff;

  > .menu-wrap {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 300px;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.95);
    box-shadow: 1px 0 15px #ddd;
    transform: translateX(-300px);
    transition: all 0.5s ease-in-out;

    $icon-size: 24px;

    &::after {
      content: "➡️";
      display: inline-block;
      font-size: $icon-size;
      width: $icon-size;
      height: $icon-size;
      position: absolute;
      right: -$icon-size;
      top: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    &:hover {
      transform: translateX(0px);

      &::after {
        content: "⬅️";
      }
    }
  }

  > main {
    padding: 40px;
  }
}
</style>
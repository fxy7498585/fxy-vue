<template>
  <div id="app" class="app-wrap">
    <div id="nav" class="app-wrap-menu">
      <Menu></Menu>
    </div>
    <div class="app-wrap-content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Menu from '../../components/menu/menu';
export default {
  components: {
    Menu,
  }
}
</script>


<style lang="scss">
@mixin app-wrap() {
  .app-wrap {
    display: flex;
    flex-direction: row;
    &-menu {

    }

    &-content {
      flex: 1
    }
  }
}

@include app-wrap();
</style>

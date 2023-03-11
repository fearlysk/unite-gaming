<template>
  <div class="wrapper">
    <HeaderComponent />
    <router-view/>
</div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import HeaderComponent from './components/Header/HeaderComponent.vue';

  export default defineComponent({
  name: 'App',
  components: {
    HeaderComponent,
  },
});
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0
  }
  .wrapper {
    background: #1E1E1E;
    height: 100vh;
  }
</style>

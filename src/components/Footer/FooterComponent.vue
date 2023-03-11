<template>
    <div class="wrapper">
        <LogoComponent />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LogoComponent from '../UI/Logo/LogoComponent.vue';

export default defineComponent({
  name: 'FooterComponent',
  components: {
    LogoComponent,
  },
});

</script>

<style scoped lang="scss">

</style>

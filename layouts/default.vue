<script lang="ts" setup>
import { defineComponent } from "vue";
import Footer from "~/components/shared/footer/footer.vue";
import Header from "~/components/shared/header/header.vue";
import Navigation from "~/components/shared/navigation/navigation.vue";


defineComponent({
  components: {
    Header,
    Navigation,
    Footer,
  },
});

</script>

<template lang="pug">
.wrapper
  .wrapper-innner
    Header
    Navigation
    router-view
    Footer.
</template>

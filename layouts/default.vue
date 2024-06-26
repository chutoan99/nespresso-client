<script lang="ts" setup>
import { defineComponent } from "vue";
import Footer from "@/shared/footer/footer.vue";
import Header from "@/shared/header/header.vue";
import Navigation from "@/shared/navigation/navigation.vue";


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
    Footer
</template>

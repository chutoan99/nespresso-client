<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/containers/header.vue";
import NavigationComponent from "@/containers/nav.vue";
import Footer from "@/containers/footer.vue";

export default defineComponent({
  name: "DefaultLayout",
  components: {
    Header,
    NavigationComponent,
    Footer,
  },
});
</script>

<template lang="pug">
.wrapper
  .wrapper-innner
    Header
    NavigationComponent
    router-view
    Footer.
</template>

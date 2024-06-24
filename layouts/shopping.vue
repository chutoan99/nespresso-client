<script lang="ts">
import { defineComponent } from "vue";

import Footer from "~/containers/footer.vue";
import HeaderCustom from "~/containers/header-custom.vue";
export default defineComponent({
  name: "ShoppingLayout",
  components: {
    Footer,
    HeaderCustom,
  },
});
</script>

<template lang="pug">
.wrapper
  .wrapper-innner
    HeaderCustom
    router-view
    Footer.
</template>

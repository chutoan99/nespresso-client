<script lang="ts" setup>
import { defineComponent } from "vue";
import Footer from "~/components/shared/footer/footer.vue";
import HeaderCustom from "~/components/shared/header/header-custom.vue";

defineComponent({
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

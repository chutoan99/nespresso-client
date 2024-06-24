<script lang="ts" setup>
import { defineComponent } from "vue";
import HeaderCustom from "~/components/shared/header/header-custom.vue";

defineComponent({
  components: {
    HeaderCustom,
  },
});
</script>

<template lang="pug">
.wrapper
  .wrapper-innner
    HeaderCustom
    router-view
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderSimple from "~/containers/header-simple.vue";

export default defineComponent({
  name: "EmailLayout",
  components: {
    HeaderSimple,
  },
});
</script>

<template lang="pug">
.wrapper
  main#email_verification
    .wrapper-sm
      HeaderSimple
        router-view
</template>

<script lang="ts" setup>
import { defineComponent } from "vue";
import HeaderSimple from "~/components/shared/header/header-simple.vue";

defineComponent({
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

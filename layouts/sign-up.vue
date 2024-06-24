<script lang="ts">
import { defineComponent } from "vue";
import HeaderCustom from "../containers/header-custom.vue";
export default defineComponent({
  name: "SignUpLayout",
  components: { HeaderCustom },
});
</script>

<template lang="pug">
.wrapper
  .wrapper-innner
    HeaderCustom
    router-view
</template>

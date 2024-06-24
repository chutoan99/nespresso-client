<script lang="ts">

export default defineComponent({
  name: "HeaderSimple",
});

</script>

<template lang="pug">
.header
  .header-logo
    router-link(to='/')
      img(src='/_nuxt/assets/images/template/logo.png' alt='logoApp')
</template>

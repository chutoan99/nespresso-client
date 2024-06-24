<script lang="ts">

export default defineComponent({
  name: "HeaderCustom",
});

</script>

<template lang="pug">
header#header.header
  .header_inner
    .header_logo
      router-link(to="/")
        img(src="/_nuxt/assets/images/logoApp.png", alt="logoApp", style="width: 100%; height: 100%")
</template>

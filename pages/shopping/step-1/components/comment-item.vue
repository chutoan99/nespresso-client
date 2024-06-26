<script lang="ts" setup>

defineComponent({
  name: "ProductCommentItem",
});

defineProps<{ data: any }>();

</script>

<template lang="pug">
.product-item(v-for="product in data", :key="product.image")
  .product-image
    router-link(to="/accessories_detail")
      img(:src="product.image", :alt="product.alt")
    p.product-name {{ product?.name }}
  .product-content
    span.product-price {{ product?.price }}
    button.product-add
      img(src="/_nuxt/assets/svgs/icon-plus.svg", alt)
</template>

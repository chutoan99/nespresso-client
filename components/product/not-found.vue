<script lang="ts" setup>

defineComponent({
  name: "ProductItem404",
});

defineProps<{ data: any }>();

</script>

<template lang="pug">
.product-item(v-for="product in data", :key="product.id")
  .product-tag
    span.product-tag__name promote
  .product-card
    .product-card-wrapper
      span.product-name {{ product.name }}
      .product-image
        router-link(to="/machines_detail")
          img(:src="product.image", alt)
      span.product-price {{ product.price }}
      button.product-btn
        svg(width="24", height="24", viewBox="0 0 24 24", fill="none", )
          path(fill-rule="evenodd", clip-rule="evenodd", d="M8 3.75C8 1.67889 9.67889 0 11.75 0C13.8211 0 15.5 1.67889 15.5 3.75V6H20.75L21.5 24H2L2.75 6H8V3.75ZM8.75 6H14.75V3.75C14.75 2.09317 13.4068 0.75 11.75 0.75C10.0932 0.75 8.75 2.09317 8.75 3.75V6Z", fill="white")
        span Add to basket
</template>

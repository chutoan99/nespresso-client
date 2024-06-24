<script lang="ts" setup>
import { data_product } from "@/utils/data_product_404";
import ProductItem404 from "~/components/product/not-found.vue";
defineComponent({
  name: "NotPoundPage",
  components: {
    ProductItem404,
  },
});
const dataProduct = ref(data_product)
</script>

<template lang="pug">
main#Page404
  section#banner
    img(src='/_nuxt/assets/images/banner-1.png' alt='banner')
  section.container.caption
    div
      h3.caption-title SORRY, PAGE NOT FOUND
      p.caption-text
        | Sometimes technology fails, us but coffee never does. Why not grab
        | yourself a cup and then head back to the Homepage?
      button.caption-btn
        router-link(to='/')  GO TO HOMEPAGE 
    img(src='/_nuxt/assets/images/page404/404.png' alt='404')
  section.product
    .container
      .product-list
        ProductItem404(v-bind:data='dataProduct')
</template>

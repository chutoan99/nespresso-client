<script lang="ts" setup>

defineComponent({
  name: "ProductCartItem",
});

defineProps<{ data: any }>();

</script>

<template lang="pug">
.card_item(v-for="card in data", :key="card.image")
  .card_item-img
    img(:src="card?.image")
  .card_item-title
    span {{ card?.title }}
</template>

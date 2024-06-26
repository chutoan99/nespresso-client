<script lang="ts" setup>

defineComponent({
  name: "MoreItem",
});

defineProps<{ data: any }>();

</script>

<template lang="pug">
.moreInfo_item(v-for="item in data", :key="item.heading")
  .moreInfo_item-wrapper
    h3.moreInfo_item-heading {{ item?.heading }}
    p.moreInfo_item-title {{ item?.title }}
    .moreInfo_item-btn
      button
        span GET THE RECIPE
  .moreInfo_item-img
    img(:src="item.image", alt="moreInfo_item", style="width: \'100%\'")
</template>

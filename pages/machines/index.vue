<script lang="ts" setup>
import { defineComponent, ref } from "vue";
import { data_product_machine } from "./resources";
import ProductMachineItem from "./components/machine-item.vue"

interface ColorLabel {
  name: string;
  color: string;
  checked: boolean;
}

defineComponent({
  components: {
    ProductMachineItem,
  },
});
// Reactive data
const productmachine = ref(data_product_machine);
const isExpanded = ref(false);
const colorLabels: ColorLabel[] = [
  { name: "red", color: "#f10404", checked: false },
  { name: "black", color: "#000000", checked: false },
  { name: "white", color: "#ffffff", checked: false },
];

// Methods
const toggleModal = () => {
  isExpanded.value = !isExpanded.value;
  console.log("toggle modal");
};

const onChangeLabel = (label: ColorLabel) => {
  colorLabels.forEach((item) => {
    item.checked = item === label;
  });
};
</script>

<template lang="pug">
main#machines
  section.hero
    p.banner__title ORIGINAL COFFEE MACHINES
    p.font_heading-5.banner__content
      | Free Delivery for any coffee machine.
  section.container
    .filter-machines
      .filter-number
        span 13 MACHINES
    .filter-wrapper
      .filter-button.filter-toggle
        button#filterButton.filter-sublabel(@click='toggleModal' :aria-expanded="isExpanded ? 'true' : 'false'")
          | Filter
      #modal.filter-list(:style="{ display: isExpanded ? 'none' : 'block' }")
        .filter-item
          p.filter-item__name color
          ul.filter-item__ellipse
            li.filter-item__color(v-on:click='OnchangeLabel(item)' v-for='item in colorLabels' :key='item.name')
              label(:class="['filter-item__label',{ 'filter-item__label--checked': item.checked },]" :for='`FilterColor-${item.name}`' :style="{ 'background-color': item.color }")
                span.VisuallyHidden {{ item.name }}
              input(type='radio' name='FilterColor' :id='`FilterColor-${item.name}`' :value='item.name')
        .filter-item
          p.filter-item__name PRICEV
          .price-input
            .field
              input.input-min(type='number' value='400000')
            .field(style='text-align: end')
              input.input-max(type='number' value='10000000')
          .slider
            .progress
          .range-input
            input.range-min(type='range' min='400000' max='10000000' value='400000' step='100000')
            input.range-max(type='range' min='400000' max='10000000' value='10000000' step='100000')
    .banner
      img(src='/_nuxt/assets/images/machines/machines_icon1.png' alt='')
      .banner-desciption
        p.banner-heading.font_heading-5 MACHINE SUBSCRIPTION
        p.banner-content.font_body-1
          | Get your coffee machine for just 1 RON
      button.banner-btn DISCOVER MORE
    .product-list
      ProductMachineItem(v-bind:data='productmachine')
</template>

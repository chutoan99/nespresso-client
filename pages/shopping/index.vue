<script lang="ts" setup>
import { defineComponent, ref, computed, onMounted } from "vue";

definePageMeta({
  layout: 'shopping'
});

defineComponent({
  name: "ShoppingPage",
});

const progressSteps = ref([
  {
    id: 1,
    step: "Step 1",
    label: "Shopping bag summary",
    isActive: false,
    path: "step-1",
  },
  {
    id: 2,
    step: "Step 2",
    label: "Delivery setup",
    isActive: false,
    path: "step-2",
  },
  {
    id: 3,
    step: "Step 3",
    label: "Payment",
    isActive: false,
    path: "step-3",
  },
  {
    id: 4,
    step: "Step 4",
    label: "Shopping summary",
    isActive: false,
    path: "step-4",
  },
  {
    id: 5,
    step: "Step 5",
    label: "Shopping confirmation",
    isActive: false,
    path: "step-5",
  },
]);

const currentTab = ref("");

// Computed property
const getParam = computed(() => {
  const pathSegments = window.location.pathname.split("/");
  return pathSegments[pathSegments.length - 1];
});

// Method to initialize data
const getData = () => {
  let foundCurrentTab = false;
  progressSteps.value.forEach((item, index) => {
    if (item.path === currentTab.value) {
      foundCurrentTab = true;
      progressSteps.value[index].isActive = false;
      if (index === progressSteps.value.length - 1) {
        progressSteps.value.forEach((item) => {
          item.isActive = true;
        });
      }
    } else if (foundCurrentTab) {
      progressSteps.value[index].isActive = false;
    } else {
      progressSteps.value[index].isActive = true;
    }
  });
};

// Method to handle link click
const handleLinkClick = (step: any) => {
  currentTab.value = step.path;
  getData();
};

// Lifecycle hook equivalent to mounted
onMounted(() => {
  currentTab.value = getParam.value;
  getData();
});
</script>

<template lang="pug">
section#progressbar
  ul.progressbar.container
    li.progressbar_item(v-for='step in progressSteps' :key='step.id' :class="{ 'item-active': step.isActive }")
      router-link.progressbar_item-link(:to='`/shopping/${step.path}`' @click='handleLinkClick(step)')
        span
          | {{ step?.step }}
          svg(:style="{ display: step.isActive ? 'block' : 'none' }" width='18' height='13' viewbox='0 0 18 13' fill='none' xmlns='http://www.w3.org/2000/svg')
            path(d='M17 1L6 12L1 7' stroke='#3D8705' stroke-width='2' stroke-linecap='round' stroke-linejoin='round')
        span.hide_on-mobile {{ step.label }}
  |     t&#x1EA1;o file json t&#x1B0;&#x1A1;ng &#x1EE9;ng v&agrave; render b&#x1EB1;ng vue gi&uacute;p t&ocirc;i
main#shopping_bag
  router-view
</template>

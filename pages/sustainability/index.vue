<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';

defineComponent({
  name: "SustainabilityPage",
})

const tabs = ref([
  { value: 'commitment', label: 'COMMITMENT', isActive: true },
  { value: 'bcorp', label: 'B CORP', isActive: false },
  { value: 'circularity', label: 'CIRCULARITY', isActive: false },
  { value: 'climate', label: 'CLIMATE', isActive: false },
  { value: 'commitment', label: 'COMMUNITY', isActive: false },
]);

const activeTab = ref('');
const route = useRoute();

const category = computed(() => {
  const pathSegments = route.path.split('/');
  return pathSegments[pathSegments.length - 1];
});

const isActive = computed(() => {
  return (value: string) => activeTab.value === value;
});

watch(category, (newCategory) => {
  activeTab.value = newCategory;
});

onMounted(() => {
  activeTab.value = category.value;
  console.log(category.value);
});
</script>

<template lang="pug">
section#tabs
  .tabs
    router-link.tabs_heading(v-for='tab in tabs' :key='tab.value' :to='`/sustainability/${tab.value}`' :class='{ tab_active: isActive(tab.value) }')
      | {{ tab.label }}
router-view
</template>

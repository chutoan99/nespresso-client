<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Footer from "@/shared/footer/footer.vue";
import Header from "@/shared/header/header.vue";
import Navigation from "@/shared/navigation/navigation.vue";

defineComponent({
  components: {
    Header,
    Navigation,
    Footer,
  },
});

// Define reactive variables
const tabs = ref([
  { value: 'commitment', label: 'COMMITMENT', isActive: true },
  { value: 'bCorp', label: 'B CORP', isActive: false },
  { value: 'circularity', label: 'CIRCULARITY', isActive: false },
  { value: 'climate', label: 'CLIMATE', isActive: false },
  { value: 'recycling', label: 'COMMUNITY', isActive: false },
]);

const activeTab = ref('');
const route = useRoute();

// Compute category from route
const category = computed(() => {
  const pathSegments = route.path.split('/');
  return pathSegments[pathSegments.length - 1];
});

// Check if a tab is active
const isActive = computed(() => (value: string) => activeTab.value === value);

// Watch for changes in category
watch(category, (newCategory) => {
  activeTab.value = newCategory;
});

// Set initial active tab on mount
onMounted(() => {
  activeTab.value = category.value;
  console.log(category?.value);
});
</script>

<template lang="pug">
.wrapper
  .wrapper-innner
    Header
    Navigation
    section#tabs
      .tabs
        router-link.tabs_heading(
            v-for='tab in tabs' 
            :key='tab.value' 
            :to='`/sustainability/${tab.value}`' 
            :class='{ tab_active: isActive(tab.value) }'
        )
            | {{ tab?.label }}
    router-view
    Footer
</template>
    
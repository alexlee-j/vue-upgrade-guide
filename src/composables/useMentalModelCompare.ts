import { ref, computed } from 'vue';
import { mentalModelComparisons } from '../data/mentalModel';

export function useMentalModelCompare() {
  const currentIndex = ref(0);
  
  const currentComparison = computed(() => mentalModelComparisons[currentIndex.value]);
  
  const next = () => {
    if (currentIndex.value < mentalModelComparisons.length - 1) {
      currentIndex.value++;
    }
  };
  
  const prev = () => {
    if (currentIndex.value > 0) {
      currentIndex.value--;
    }
  };
  
  return {
    comparisons: mentalModelComparisons,
    currentComparison,
    currentIndex,
    next,
    prev
  };
}
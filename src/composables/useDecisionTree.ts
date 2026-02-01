import { ref, computed } from 'vue';
import { decisionTreeNodes } from '../data/decisionTree';

export function useDecisionTree() {
  const currentNodeId = ref('start');
  const history = ref<string[]>([]);
  
  const currentNode = computed(() => decisionTreeNodes[currentNodeId.value]);
  
  const navigate = (nextId: string) => {
    history.value.push(currentNodeId.value);
    currentNodeId.value = nextId;
  };
  
  const goBack = () => {
    if (history.value.length > 0) {
      currentNodeId.value = history.value.pop()!;
    }
  };
  
  const canGoBack = computed(() => history.value.length > 0);
  
  return {
    currentNode,
    navigate,
    goBack,
    canGoBack
  };
}
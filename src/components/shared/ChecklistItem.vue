<template>
  <li class="checklist-item">
    <input 
      type="checkbox" 
      :id="id"
      v-model="localChecked"
      :checked="checked"
    >
    <label :for="id" class="checklist-label">
      <span class="checklist-text"><slot></slot></span>
    </label>
  </li>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

interface Props {
  id: string;
  checked?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  checked: false
});

const localChecked = ref(props.checked);

// 同步父组件传入的 checked 状态
watch(() => props.checked, (newVal) => {
  localChecked.value = newVal;
});

// 发射事件给父组件
const emit = defineEmits<{
  'update:checked': [value: boolean]
}>();

watch(localChecked, (newVal) => {
  emit('update:checked', newVal);
});
</script>

<style scoped>
.checklist-item {
  margin: 0.5rem 0;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
}

.checklist-label {
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  flex: 1;
}

.checklist-text {
  margin-top: 2px;
}
</style>
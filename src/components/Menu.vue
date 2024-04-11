
<template>
    <div class="card flex justify-content-center">
        <Toast />
        <Tree v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="checkbox" class="w-full md:w-30rem"></Tree>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { NodeService } from '@/service/NodeService';
import { useToast } from "primevue/usetoast";
import Tree from 'primevue/tree';
import Toast from 'primevue/toast';

const nodes = ref(null);
const selectedKey = ref(null);
const toast = useToast();

onMounted(() => {
    NodeService.getTreeNodes().then((data) => (nodes.value = data));
});

const onNodeSelect = (node) => {
    toast.add({ severity: 'success', summary: 'Node Selected', detail: node.label, life: 3000 });
};

const onNodeUnselect = (node) => {
    toast.add({ severity: 'success', summary: 'Node Unselected', detail: node.label, life: 3000 });
};
</script>

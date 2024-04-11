<script lang="ts" setup>
import Sidebar from 'primevue/sidebar';
import Button from 'primevue/button';
import Menu from './Menu.vue'

import { ref,  } from 'vue';

const visible = ref(true);
</script>


<template>
    <div class="card flex justify-content-center">
        <Sidebar v-model:visible="visible" header="Sidebar">
            <Menu/>
        </Sidebar>
        <Button icon="pi pi-bars" @click="visible = true" />
    </div>
</template>
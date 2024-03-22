<template>
    <Dialog header="Danger" v-model:visible="visible" @hide="hide" :style="{ width: '350px' }" :modal="true">
        <div class="flex align-items-center justify-content-center">
            <i class="pi pi-times-circle mr-3" style="font-size: 2rem; color:var(--red-500)" />
            <span>{{ message }}</span>
        </div>
        <template #footer>
            &nbsp;
        </template>
    </Dialog>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
    message : {
        type : String,
        required: true
    }
})
const emit = defineEmits(['axiosErrorClose'])
const visible = ref(false)

watch(()=>props.message,(value) => {
    if(value) visible.value = true
    else visible.value = false
})

function hide() {
    emit('axiosErrorClose')
}
</script>
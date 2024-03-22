<template>
    <Dialog header="Success" v-model:visible="sAlertShow" @hide="clearFlash" :style="{ width: '350px' }" :modal="true">
        <div class="flex align-items-center justify-content-center">
            <i class="pi pi-check-circle mr-3" style="font-size: 2rem; color:var(--green-500)" />
            <span>{{ message }}</span>
        </div>
        <template #footer>
            &nbsp;
        </template>
    </Dialog>
    <Dialog header="Danger" v-model:visible="dAlertShow" @hide="clearFlash" :style="{ width: '350px' }" :modal="true">
        <div class="flex align-items-center justify-content-center">
            <i class="pi pi-times-circle mr-3" style="font-size: 2rem; color:var(--red-500)" />
            <span>{{ message }}</span>
        </div>
        <template #footer>
            &nbsp;
        </template>
    </Dialog>
    <Dialog header="Warning" v-model:visible="wAlertShow" @hide="clearFlash" style="" :style="{ width: '350px' }" :modal="true">
        <div class="flex align-items-center justify-content-center">
            <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem; color:var(--yellow-500)" />
            <span>{{ message }}</span>
        </div>
        <template #footer>
            &nbsp;
        </template>
    </Dialog>
    <Dialog header="Information" v-model:visible="iAlertShow" @hide="clearFlash" :style="{ width: '350px' }" :modal="true">
        <div class="flex align-items-center justify-content-center">
            <i class="pi pi-info-circle mr-3" style="font-size: 2rem; color:var(--blue-500)" />
            <span>{{ message }}</span>
        </div>
        <template #footer>
            &nbsp;
        </template>
    </Dialog>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useStore } from '@/store'

const $store = useStore()
const message = ref()

const sAlertShow = ref(false)
const dAlertShow = ref(false)
const wAlertShow = ref(false)
const iAlertShow = ref(false)

function clearFlash() {
    $store.setFlash(null)
}

onMounted(()=> {
    if($store.getFlash) {
        let flash = $store.getFlash
        switch (flash.type) {
            case 'success':
                sAlertShow.value = true
                message.value = flash.message
                break;

            case 'danger':
                dAlertShow.value = true
                message.value = flash.message
                break;

            case 'warning':
                wAlertShow.value = true
                message.value = flash.message
                break;

            case 'success':
                sAlertShow.value = true
                message.value = flash.message
                break;
        }
    }
})
</script>
<template>
    <Dialog header="Confirmation" v-model:visible="visiblity" :style="{ width: '350px' }" @update:visible="updating" :modal="true">
        <div class="flex align-items-center justify-content-center">
            <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
            <span>Are you sure you want to proceed?</span>
        </div>
        <template #footer>
            <Button label="No" icon="pi pi-times" @click="onNo" class="p-button-text" />
            <Button label="Yes" icon="pi pi-check" @click="onYes" class="p-button-text" autofocus />
        </template>
    </Dialog>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import { useStore } from '@/store'

import { _axios} from '@/axios';

// ========== INSTANCE ==========
const $store    = useStore()
const $route    = useRoute()
const $router   = useRouter()

// ========== STATE ==========
const visiblity = ref(true)

// ========== METHODS ==========
function updating(value){
    if(!value) $router.back()
}
function onNo(){
    console.log('NO')
    $router.back()
}
function onYes(){
    _axios.get('provinsi/delete/'+$route.params.id)
    .then(response => {
        if(response.data.error_code == 0){
            $store.setFlash({message: 'berhasil menghapus', type: 'success'})
        } else {
            $store.setFlash({message: response.data.error_desc, type: 'danger'})
        }
        $router.back()
    })
    .catch(err => {
        console.error(err)
        $router.back()
    })
}
</script>
<template>
    <div className="card">
        <h3>Empty Page</h3>
        <BsBreadcrumbs :model="breadcrumb_items" />

        <div class="grid mt-5">
            <div class="col-12">
                <div class="p-fluid">
                    <div class="field">
                        <label for="name1">Nama Provinsi</label>
                        <InputText id="name1" type="text" v-model="nama_provinsi" />
                    </div>
                </div>
                <Button size="small" label="Submit" class="mr-2 mb-2" @click="onSubmit"></Button>
            </div>
        </div>
        <AxiosError :message="axios_error_message" @axiosErrorClose="axios_error_message=''" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { _axios } from '@/axios'
import $ from 'jquery'; import GSloadingOverlay from 'gasparesganga-jquery-loading-overlay';
import { LOADING_OPTIONS } from '@/env.js'
import BsBreadcrumbs from '@/components/BsBreadcrumbs.vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from '@/store'
import AxiosError from '@/components/AxiosError.vue'

// ========== INSTANCE ==========
const $route    = useRoute()
const $router   = useRouter()
const $store    = useStore()

const breadcrumb_items = ref([{label : 'Provinsi', to : '/datatable'}, {label : 'Add Provinsi', to : '/register'}])
const nama_provinsi = ref()
const axios_error_message = ref('')
async function onSubmit(){
    try {
        $('#IDLayoutMain').LoadingOverlay('show', LOADING_OPTIONS)
        var response = await _axios.post('provinsi/update/'+$route.params.id,{
            nama_provinsi : nama_provinsi.value
        })
        $('#IDLayoutMain').LoadingOverlay('hide')

        if(response.data.error_code == 0){
            $store.setFlash({type : 'success', message : 'Berhasil Mengubah Provinsi'})
            $router.back()
        } else {
            axios_error_message.value = response.data.error_desc
        }
    } catch(err) {
        console.error(err)
    }
}

async function getDATA(){
    try {
        $('#IDLayoutMain').LoadingOverlay('show', LOADING_OPTIONS)
        var response = await _axios.get('provinsi/detail-by-id/'+$route.params.id)
        $('#IDLayoutMain').LoadingOverlay('hide')

        if(response.data.error_code == 0){
            let data = response.data.data
            nama_provinsi.value = data.nama_provinsi
        } else {
            axios_error_message.value = response.data.error_desc
        }
    } catch(err) {
        console.error(err)
    }
}

onMounted(async()=> {
    await getDATA()
})
</script>
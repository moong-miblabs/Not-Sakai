<template>
    <div className="card">
        <h3>Empty Page</h3>
        <BsBreadcrumbs :model="breadcrumb_items" />
        <Fieldset :toggleable="true" :collapsed="collapsed">
            <template #legend>
                <span>Filter</span>
            </template>
            <div class="grid">
                <div class="col-12">
                    <div class="card p-fluid">
                        <div class="field">
                            <label for="name1">Nama Provinsi</label>
                            <InputText id="name1" type="text" v-model="nama_provinsi" />
                        </div>
                    </div>
                    <Button size="small" label="Apply" class="mr-2 mb-2" @click="onSubmit"></Button>
                    <Button size="small" label="Reset" class="mr-2 mb-2" severity="secondary" @click="$router.push({path:'/datatable'})"></Button> 
                </div>
            </div>
        </Fieldset>
        <Toolbar class="mb-4">
            <template v-slot:start>
                <div class="my-2">
                    <Button label="New" icon="pi pi-plus" class="mr-2" severity="success" @click="$router.push({path:'/register'})" />
                </div>
            </template>

            <template v-slot:end>
                <Button label="Export" icon="pi pi-upload" severity="help" />
            </template>
        </Toolbar>
        <table class="table table-striped" id="IDTable" :style="font_size">
            <caption>Showing {{ first+1 }} - {{ (first+server_options.limit)<jumlah?(first+server_options.limit):jumlah }}  of {{ jumlah }} # [ Page {{ server_options.page }} of {{ Math.ceil(jumlah/server_options.limit) }} ]</caption>
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col" @click="sort('nama_provinsi')" style="cursor: pointer;">Nama Provinsi <i :class="headIcon('nama_provinsi')" aria-hidden="true"></i></th>
                <th scope="col">Status</th>
                <th scope="col">Rating</th>
                <th scope="col">Verified</th>
                <th scope="col">Options</th>
            </tr>
            
            </thead>
            <tbody>
                <tr v-for="(item,index) in DATA">
                    <td scope="row">{{ first+index+1 }}</td>
                    <td>{{ item.nama_provinsi }}</td>
                    <td><Tag :severity="getSeverity(index)" class="uppercase">{{ getBadgeSeverity(index) }}</Tag></td>
                    <td><Rating :modelValue="(index%6)" :readonly="true" :cancel="false" /></td>
                    <td><i class="pi" :class="{ 'text-green-500 pi-check-circle': index%2, 'text-red-500 pi-times-circle': !(index%2) }"></i></td>
                    <td>
                        <Button icon="pi pi-info" class="mr-2" severity="info" rounded @click="$router.push({path: '/detail/'+item.id})" />
                        <Button icon="pi pi-pencil" class="mr-2" severity="warning" rounded @click="$router.push({path: '/update/'+item.id})" />
                        <Button icon="pi pi-trash" class="mt-2" severity="danger" rounded @click="$router.push({path: '/delete/'+item.id})" />
                    </td>
                </tr>
            </tbody>
        </table>
        <Paginator :rows="server_options.limit" :totalRecords="jumlah" :first="first" :rowsPerPageOptions="options_per_page" @page="page"></Paginator>
    </div>
</template>

<script setup>
import { PAGE, LIMIT, OPTIONS_PER_PAGE, LOADING_OPTIONS, FONT_SIZE } from '@/env.js'
import $ from 'jquery'; import GSloadingOverlay from 'gasparesganga-jquery-loading-overlay';
import { ref, reactive, computed, onMounted } from 'vue'
import { _axios } from '@/axios'
import { useRoute, useRouter } from 'vue-router'
import _ from 'lodash'

import BsBreadcrumbs from '@/components/BsBreadcrumbs.vue'

// ========== INTANCE ===========
const $route    = useRoute()
const $router   = useRouter()

// ========== FILTER ===========
const nama_provinsi = ref()

function onSubmit(){
    let query = Object.assign(server_options,{nama_provinsi : nama_provinsi.value})

    $router.push({path : '/datatable', query : _.omitBy(query, v => v == null) })
}
const collapsed = ref(true)

const breadcrumb_items = ref([{label : 'Provinsi', to : '/datatable'}])
const font_size = ref(FONT_SIZE)
const options_per_page = ref(OPTIONS_PER_PAGE)
const server_options = reactive({
    page : PAGE,
    limit : LIMIT,
    sort_by : null,
    sort_type : null
})
const DATA      = ref([])
const jumlah    = ref(0)

const first = computed(()=> {
    return (server_options.page - 1) * server_options.limit 
})

function headIcon(by){
    if(server_options.sort_by == by) {
        if(server_options.sort_type == 'asc')  return ['fa', 'fa-sort-asc']
        else return ['fa', 'fa-sort-desc']
    } else {
        return ['fa', 'fa-sort']
    }
}

async function getDATA() {
    try {
        $('#IDTable').LoadingOverlay('show', LOADING_OPTIONS)
        let params = Object.assign(server_options,{nama_provinsi : nama_provinsi.value})
        var response = await _axios.get('provinsi/list', {
            params
        })
        $('#IDTable').LoadingOverlay('hide', LOADING_OPTIONS)

        if(response.data.error_code == 0) {
            let data = response.data.data
            DATA.value = data
            jumlah.value = response.data.jumlah
        } else {

        }
    } catch (err) {
        console.error(err)
    }
}

onMounted(async()=> {
    if($route.query.page)       server_options.page     = $route.query.page
    if($route.query.limit)      server_options.limit    = parseInt($route.query.limit)
    if($route.query.sort_by)    server_options.sort_by  = $route.query.sort_by
    if($route.query.sort_type)  server_options.sort_type= $route.query.sort_type

    // FILTER
    if($route.query.nama_provinsi) {
        collapsed.value = false
        nama_provinsi.value = $route.query.nama_provinsi
    }
    await getDATA()
})

function sort(by) {
    if(server_options.sort_by == by) {
        if(server_options.sort_type == 'asc')  server_options.sort_type = 'desc'
        else server_options.sort_type = 'asc'
    } else {
        server_options.sort_type = 'asc'
    }
    server_options.sort_by = by
    let query = _.omitBy(server_options, v => v == null)
    $router.push({path : '/datatable', query })
}

function page(PageState){
    server_options.page = PageState.page + 1
    server_options.limit = PageState.rows
    let query = _.omitBy(server_options, v => v == null)
    $router.push({path : '/datatable', query })
}

const getSeverity = (index) => {
    switch (index%5) {
        case 0:
            return 'danger';

        case 1:
            return 'success';

        case 2:
            return 'info';

        case 3:
            return 'warning';

        case 4:
            return null;
    }
};

const getBadgeSeverity = (index) => {
    switch (index%4) {
        case 1:
            return 'success';
        case 2:
            return 'warning';
        case 3:
            return 'danger';
        default:
            return 'info';
    }
};

</script>
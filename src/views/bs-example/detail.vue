<template>
    <main>
        <div className="card">
            <h3>Detail Provinsi</h3>
            <BsBreadcrumbs :model="breadcrumb_items" />

            <div class="container py-4">
                <div class="p-5 mb-4 bg-body-tertiary rounded-3">
                    <div class="container-fluid py-5">
                        <h1 class="display-5 fw-bold">Provinsi : {{ DATA.nama_provinsi }}</h1>
                        <ObjectTable :model="DATA" :mod="{nama_provinsi : 'Nama Provinsi'}" />
                        <button class="btn btn-primary btn-lg" type="button">Example button</button>
                    </div>
                </div>
                <div class="row align-items-md-stretch">
                    <div class="col-md-6">
                        <div class="h-100 p-5 bg-body-tertiary border rounded-3">
                            <h2>Change the background</h2>
                            <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
                            <button class="btn btn-outline-secondary" type="button">Example button</button>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="h-100 p-5 bg-body-tertiary border rounded-3">
                            <h2>Add borders</h2>
                            <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
                            <button class="btn btn-outline-secondary" type="button">Example button</button>
                        </div>
                    </div>
                </div>
                <AxiosError :message="axios_error_message" @axiosErrorClose="axios_error_message=''" />
                <pre>{{ DATA }}</pre>
            </div>
        </div>
    </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import BsBreadcrumbs from '@/components/BsBreadcrumbs.vue'
import { _axios } from '@/axios'
import $ from 'jquery'; import GSloadingOverlay from 'gasparesganga-jquery-loading-overlay';
import { LOADING_OPTIONS } from '@/env.js'
import AxiosError from '@/components/AxiosError.vue'
import ObjectTable from '@/components/ObjectTable.vue'

// ========== INSTANCE ==========
const $route    = useRoute()

const breadcrumb_items = ref([{label : 'Provinsi', to : '/datatable'}, {label : 'Detail Provinsi', to : '/detail/'+$route.params.id}])
const DATA = ref({})

const axios_error_message = ref('')
async function getDATA() {
    try {
        $('#IDLayoutMain').LoadingOverlay('show', LOADING_OPTIONS)
        var response = await _axios.post('provinsi/detail-by-id/'+$route.params.id, {
            attributes : ['nama_provinsi']
        })
        $('#IDLayoutMain').LoadingOverlay('hide')

        if(response.data.error_code == 0) {
            let data = response.data.data
            DATA.value = data
        } else {
            axios_error_message.value = response.data.error_desc
        }
    } catch (err) {
        console.error(err)
    }

}

onMounted(async() => {
    await getDATA()
})
</script>

<style scoped>
.bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
}

@media (min-width: 768px) {
    .bd-placeholder-img-lg {
        font-size: 3.5rem;
    }
}

.b-example-divider {
    width: 100%;
    height: 3rem;
    background-color: rgba(0, 0, 0, .1);
    border: solid rgba(0, 0, 0, .15);
    border-width: 1px 0;
    box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
}

.b-example-vr {
    flex-shrink: 0;
    width: 1.5rem;
    height: 100vh;
}

.bi {
    vertical-align: -.125em;
    fill: currentColor;
}

.nav-scroller {
    position: relative;
    z-index: 2;
    height: 2.75rem;
    overflow-y: hidden;
}

.nav-scroller .nav {
    display: flex;
    flex-wrap: nowrap;
    padding-bottom: 1rem;
    margin-top: -1px;
    overflow-x: auto;
    text-align: center;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
}

.btn-bd-primary {
    --bd-violet-bg: #712cf9;
    --bd-violet-rgb: 112.520718, 44.062154, 249.437846;
    --bs-btn-font-weight: 600;
    --bs-btn-color: var(--bs-white);
    --bs-btn-bg: var(--bd-violet-bg);
    --bs-btn-border-color: var(--bd-violet-bg);
    --bs-btn-hover-color: var(--bs-white);
    --bs-btn-hover-bg: #6528e0;
    --bs-btn-hover-border-color: #6528e0;
    --bs-btn-focus-shadow-rgb: var(--bd-violet-rgb);
    --bs-btn-active-color: var(--bs-btn-hover-color);
    --bs-btn-active-bg: #5a23c8;
    --bs-btn-active-border-color: #5a23c8;
}

.bd-mode-toggle {
    z-index: 1500;
}

.bd-mode-toggle .dropdown-menu .active .bi {
    display: block !important;
}
</style>
<template>
    <nav aria-label="breadcrumb" style="--bs-breadcrumb-divider: '>';">
        <ol class="breadcrumb breadcrumb-chevron p-3 bg-body-tertiary rounded-3">
            <li class="breadcrumb-item" v-for="item in poped">
                <router-link :to="item.to" class="link-body-emphasis fw-semibold text-decoration-none">{{ item.label }}</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">{{ pop.label }}</li>
        </ol>
    </nav>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const props = defineProps({
    model : {
        type: Array,
        required: true
    }
})

const poped = ref([])
const pop   = ref({})

onMounted(()=> {
    let length = props.model.length
    let last = length-1
    pop.value = props.model[last]
    poped.value = props.model.slice(0,last)
})
</script>
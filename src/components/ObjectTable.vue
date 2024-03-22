<template>
    <table class="table">
        <tbody>
            <tr v-for="item in arr">
                <th scope="row">{{ item[0] }}</th>
                <td>{{ item[1] }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    model: {
        type : Object,
        required : true
    },
    mod: {
        type : Object,
        default : {}
    },
    ban: {
        type : Array,
        default : []
    }
})

const arr = computed(()=> {
    let entries = Object.entries(props.model)
    let filtered = entries.filter(item => !props.ban.includes(item[0]))
    let new_entries = filtered.map(item => {
        if(props.mod.hasOwnProperty(item[0])) return [props.mod[item[0]], item[1]]
        else return item
    })
    return new_entries
})
</script>
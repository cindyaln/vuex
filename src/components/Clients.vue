<template>
    <div>
        <div class="form-group">
            <label for=""> jenis bantuan </label>
            <select @change="$emit('selectedBantuan', $event.target.value)"
            class="form-control">
            <option value=""> pilih bantuan </option>
            <option v-for="row in listBantuan" :key="row.name"
            :value="row.name">
            {{ row.name }}
        </option>
        </select>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        listBantuan(){
            return this.$store.state.clients.listBantuan
        }
    }
}
</script> 
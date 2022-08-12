<template>
    <div>
        <comp-Header />
        <b-container>
            <nuxt />
        </b-container>
        <comp-Footer />
    </div>
</template>
<script>
import CompHeader from '../components/CompHeader.vue';
import CompFooter from '../components/CompFooter.vue';
export default {
    name : 'default',
    components : {
        CompHeader,
        CompFooter
    }
}
</script>
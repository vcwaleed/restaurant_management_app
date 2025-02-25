<template>
    <div>
        <HeaderPage/>
    </div>
  </template>
  
<script>
import HeaderPage from './HeaderPage.vue'
export default{
    name: 'HomePage',
    components: {
        HeaderPage
    },
    mounted() {
        const userInfo = localStorage.getItem('user-info')
        if (!userInfo) {
            this.$router.push('/signup');
        }
    },
}
</script>

<template>
    <div>
        <HeaderPage/> 
    </div>
    <h2>Update Restaurant</h2>
</template>
<script>
import HeaderPage from './HeaderPage.vue'
export default {
  name: 'UpdateRestaurant',
  components: {
    HeaderPage
  },
  mounted(){
    const userInfo = localStorage.getItem('user-info')
    if (!userInfo) {
        this.$router.push('/signup');
  }
}
}
</script>
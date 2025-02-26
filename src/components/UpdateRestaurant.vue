<template>
    <div>
        <HeaderPage/> 
    </div>
    <h2>Update Restaurant</h2>
    <form @submit.prevent="updateRestaurant">
        <label for="name">Restaurant Name:</label>
        <input type="text" id="name" name="name" v-model="restaurant.name" required>
        <label for="location">Location:</label>
        <input type="text" id="location" name="location" v-model="restaurant.location" required>
        <label for="phoneNumber">Phone Number:</label>
        <input type="text" id="phoneNumber" name="phoneNumber" v-model="restaurant.phoneNumber" required>
        <label for="type">Type:</label>
        <select id="type" name="type" v-model="restaurant.type" required>
            <option value="veg">Veg</option>
            <option value="non-veg">Non-Veg</option>
        </select>
        <button type="submit">Submit</button>
    </form>
</template>
<script>
import HeaderPage from './HeaderPage.vue'
import axios from 'axios'
export default {
  name: 'UpdateRestaurant',
  components: {
    HeaderPage
  },
  data() {
    return {
      restaurant: {
        name: '',
        location:'',
        phoneNumber:'',
        type:'',
      }
    }
  },
  methods: {
    async getRestaurant() {
      const response = await axios.get(`http://localhost:3000/restaurants/${this.$route.params.id}`)
      this.restaurant = response.data
    },
    async updateRestaurant() {
      const response = await axios.put(`http://localhost:3000/restaurants/${this.$route.params.id}`, this.restaurant)
      console.log("restaurant update",response.data)
      this.$router.push('/')
    }
  },
  mounted(){
    this.getRestaurant()
    const userInfo = localStorage.getItem('user-info')
    if (!userInfo) {
        this.$router.push('/signup');
  }
}
}
</script>
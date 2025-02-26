<template>
    <div>
        <HeaderPage/>
    </div>
<h2 class="main_heading">ADD Restaurant</h2>
<form @submit.prevent="addRestaurant">
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
  name: 'AddRestaurant',
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
  components: {
    HeaderPage
  },
  methods: {
    async addRestaurant() {
      const response = await axios.post('http://localhost:3000/restaurants', this.restaurant)
      console.log("restaurant create",response.data)
      this.$router.push('/')
    }
  },
  mounted(){
    const userInfo = localStorage.getItem('user-info')
    if (!userInfo) {
        this.$router.push('/signup');
  }
}
}
</script>

<style>
.select{
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
}

</style>
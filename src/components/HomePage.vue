<template>
    <div>
        <HeaderPage/>
    </div>
    <span class="main_heading">Registered Restaurant </span>
    <table>
        <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Phone Number</th>
            <th>Type</th>
            <th>Action</th>
        </tr>
        <tr v-for="restaurant in restaurants" :key="restaurant.id">
            <td>{{restaurant.name}}</td>
            <td>{{restaurant.location}}</td>
            <td>{{restaurant.phoneNumber}}</td>
            <td>{{restaurant.type}}</td>
            <td><router-link :to="{name: 'UpdateRestaurant', params: {id: restaurant.id}}" class="btn_router">Edit</router-link></td>
        </tr>
    </table>
    
   
  </template>
  
<script>
import HeaderPage from './HeaderPage.vue'
import axios from 'axios'
export default{
    name: 'HomePage',
    components: {
        HeaderPage
    },
    data() {
        return {
            restaurants: []
        }
    },
    methods:{
        async getResutrent(){
            const response = await axios.get("http://localhost:3000/restaurants");
            this.restaurants = response.data;

        }
    },
    mounted() {
        this.getResutrent();
        const userInfo = localStorage.getItem('user-info')
        if (!userInfo) {
            this.$router.push('/signup');
        }
    },
}
</script>

<style scoped>
.restaurant{
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border: 1px solid #ccc;
    margin: 10px 0;
}
.restaurant_name{
    width: 20%;
}
.restaurant_location{
    width: 20%;
}
.restaurant_phoneNumber{
    width: 20%;
}
.restaurant_type{
    width: 20%;
}

.table{
    width: 100%;
}
th, td{
    border: 1px solid #ccc;
    padding: 10px;
}
td:hover{
    background-color: #f2f2f2;
}
.btn_router{
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 7px;
}
.btn_router:hover{
    background-color: #a83131;
}


</style>

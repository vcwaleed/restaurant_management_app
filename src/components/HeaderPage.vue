<template>
    <div class="header">
      <router-link to="/" class="logo">Home</router-link> 
      <div class="nav-links">
        <router-link  to="addrestaurant">Add Restaurant</router-link >
        <a v-on:click="logout">Logout</a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HeaderPage',
    methods: {
      logout() {
        localStorage.removeItem('user-info');
        this.$router.push('/signup');
      }
    }
  };
  </script>
  
  <style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 15px 30px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin-bottom: 20px;
  }
  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: #4CAF50;
    text-decoration: none;
  }
  
  .logo:hover {
    color: #45a049;
  }
  .nav-links {
    display: flex;
    gap: 20px;
  }
  
  .nav-links a {
    text-decoration: none;
    color: #333;
    font-size: 1.1rem;
    font-weight: 500;
    padding: 8px 15px;
    border-radius: 5px;
    transition: background-color 0.3s, color 0.3s;
  }
  
  .nav-links a:hover {
    background-color: #4CAF50;
    color: #fff;
  }
  
  @media (max-width: 768px) {
    .header {
      flex-direction: column;
      align-items: flex-start;
    }
    .nav-links {
      flex-direction: column;
      gap: 10px;
    }
  }
  </style>
  
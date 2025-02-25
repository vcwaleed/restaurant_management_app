<template>
    <div class="img">
  <img alt="Vue logo" src="../assets/logo.png">
</div>
    <form @submit.prevent="signUp">
      <h1 class="main_heading">Sign Up</h1>
      <label for="email">Email</label>
      <input type="email" id="email" name="email" v-model="email" required />
      <label for="password">Password</label>
      <input type="password" id="password" name="password" v-model="password" required />
      <button type="submit">Sign Up</button>
      <router-link to="/login" class="link">Login</router-link>
    </form>
  </template>
  <script> 
  import axios from 'axios'
  export default {
    name: 'SignUp',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      async signUp() {
        const response = await axios.post('http://localhost:3000/users', {
          email: this.email,
          password: this.password
        })
        console.log("user create",response.data)
        localStorage.setItem('user-info', JSON.stringify(response.data))
        this.$router.push('/')
      }
    },
    mounted() {
        if (localStorage.getItem('user-info')) {
            this.$router.push('/')}
    },
  }
  </script>
  
  <style>
  form {
    display: flex;
    flex-direction: column;
    
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .main_heading {
    text-align: center;
    margin-bottom: 20px;
    font-size: 2rem;
  }
  
  label {
    margin-top: 10px;
    font-size: 1rem;
    font-weight: 600;
  }
  
  input {
    padding: 10px;
    margin-top: 5px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
  }
  
  input:focus {
    border-color: #4CAF50;
    box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
  }
  
  button {
    padding: 10px;
    margin-top: 15px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #45a049;
  }
  
  button:disabled {
    background-color: #b5e8b5;
    cursor: not-allowed;
  }
  .link{
    text-align: center;
    margin-top: 10px;
    font-size: 1rem;
    font-weight: 600;
    color: #4CAF50;
  }
  </style>
  
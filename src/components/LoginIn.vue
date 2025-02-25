<template>
    <div class="img">
  <img alt="Vue logo" src="../assets/logo.png">
</div>
    <form @submit.prevent="Login">
      <h1 class="main_heading">Login</h1>
      <label for="email">Email</label>
      <input 
        type="email" 
        id="email" 
        name="email" 
        v-model="email" 
        :class="{'input-error': errorMessage}" 
        required 
      />
      
      <label for="password">Password</label>
      <input 
        type="password" 
        id="password" 
        name="password" 
        v-model="password" 
        :class="{'input-error': errorMessage}" 
        required 
      />
      
      <button type="submit" :disabled="isLoading">Login</button>
      
      <router-link to="/signup" class="link">Signup</router-link>
  
    
      <div v-if="errorMessage" class="error-message">
        <p>{{ errorMessage }}</p>
      </div>
    </form>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "LogIn",
    data() {
      return {
        email: "",
        password: "",
        isLoading: false, 
        errorMessage: "", 
      };
    },
    methods: {
      async Login() {
        this.isLoading = true;
        this.errorMessage = ""; 
        try {
          const response = await axios.get(
            `http://localhost:3000/users?email=${this.email}&password=${this.password}`
          );
  
          if (response.data.length === 0) {
            this.errorMessage = "Invalid email or password.";
            this.email = ""; 
            this.password = ""; 
          } else {
           
            const userInfo = response.data[0]; 
            localStorage.setItem("user-info", JSON.stringify(userInfo));
            this.$router.push("/"); 
          }
        } catch (error) {
          this.errorMessage = "An error occurred while logging in.";
          console.error("Login Error:", error);
        } finally {
          this.isLoading = false; 
        }
      },
    },
    mounted() {
      if (localStorage.getItem("user-info")) {
        this.$router.push("/"); 
      }
    },
  };
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
    border-color: #4caf50;
    box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
  }
  
  button {
    padding: 10px;
    margin-top: 15px;
    background-color: #4caf50;
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
  
  .link {
    margin-top: 20px;
    text-align: center;
    display: block;
  }
  
  .error-message {
    color: red;
    font-size: 1rem;
    margin-top: 10px;
  }
  
  .input-error {
    border-color: red; 
    box-shadow: 0 0 5px rgba(255, 0, 0, 0.5);
  }
  </style>
  
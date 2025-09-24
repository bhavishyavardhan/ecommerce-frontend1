import axios from "axios";

const API_URL = "http://localhost:9090/back1/auth";

// Login function
export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    
    // Assuming the token is in response.data.token
    const token = response.data.token || response.data; 
    localStorage.setItem("token", token);

    return token;
  } catch (error) {
    // Throwing error so the calling component can handle it
    throw error.response?.data?.message || "Login failed!";
  }
};

// Signup function
export const signup = async (username, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, { username, email, password });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Signup failed!";
  }
};

// Logout function
export const logout = () => {
  localStorage.removeItem("token");
};

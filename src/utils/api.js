import axios from 'axios';

const API_URL = 'https://reqres.in/api';

export const loginUser = async (email, password) => {
  try {
    const res = await axios.post(`${API_URL}/login`, { email, password });
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getUsers = async (page = 1) => {
  const res = await axios.get(`${API_URL}/users?page=${page}`);
  return res.data;
};

export const updateUser = async (id, userData) => {
  const res = await axios.put(`${API_URL}/users/${id}`, userData);
  return res.data;
};

export const deleteUser = async (id) => {
  await axios.delete(`${API_URL}/users/${id}`);
};



import axios from 'axios';

const api = axios.create({
  baseURL: 'https://reqres.in/api',
});

export const login = async (credentials) => {
  const response = await api.post('/login', credentials);
  return response.data;
};

export const getUsers = async (page = 1) => {
  const response = await api.get(`/users?page=${page}`);
  return response.data;
};

export const updateUser = async (id, userData) => {
  const response = await api.put(`/users/${id}`, userData);
  return response.data;
};

export const deleteUser = async (id) => {
  const response = await api.delete(`/users/${id}`);
  return response.data;
};
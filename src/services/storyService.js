// src/services/storyService.js
import axios from 'axios';

const API_URL = 'https://api-blog-riin.onrender.com/stories';

export const fetchStories = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addStory = async (storyData) => {
  const response = await axios.post(API_URL, storyData);
  return response.data;
};

export const updateStory = async (id, storyData) => {
  const response = await axios.put(`${API_URL}/${id}`, storyData);
  return response.data;
};

export const deleteStory = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};

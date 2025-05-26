// create services for the app
import axios from 'axios';

const API_URL = 'https://api.example.com';

export const fetchData = async (endpoint: string) => {
    try {
        const response = await axios.get(`${API_URL}/${endpoint}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
export const postData = async (endpoint: string, data: any) => {
    try {
        const response = await axios.post(`${API_URL}/${endpoint}`, data);
        return response.data;
    } catch (error) {
        console.error('Error posting data:', error);
        throw error;
    }
};

// Function to get tokens from the backend
export const getTokens = async (text: string, model: string) => {
    try {
        const response = await axios.post(`${API_URL}/tokens`, { text, model });
        return response.data; // Expected to return { tokens: string[], count: number }
    } catch (error) {
        console.error('Error getting tokens:', error);
        throw error;
    }
};
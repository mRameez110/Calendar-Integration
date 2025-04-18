import axios from 'axios';
import { showErrorToast, showSuccessToast } from './messageHandling';
const API_URL = 'http://localhost:5000/api';
const token = localStorage.getItem('auth_token');

export const fetchEvents = async (date) => {
    try {
        const response = await axios.get(`${API_URL}/events`, {
            params: { date },
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        showErrorToast(error);
        console.error('Error fetching events:', error);
        throw error;
    }
};
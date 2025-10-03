const API_URL = import.meta.env.VITE_API_URL;

export const getProducts = async () => {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log('Fetched products:', data);
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}
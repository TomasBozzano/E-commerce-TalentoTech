const API_URL = import.meta.env.VITE_API_URL;

export const getProductById = async (id) => {
    try {
        const response = await fetch(`${API_URL}/products/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching product by ID:', error);
        return null;
    }
}

export const getProducts = async () => {
    try {
        const response = await fetch(`${API_URL}/products`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        
        const data = response.json();
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}

export const createProduct = async (product) => {
    try {
        const response = await fetch(`${API_URL}/products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        });
        return response.json();
    } catch (error) {
        console.error('Error al crear el producto:', error);
        throw error;
    }
};

export const updateProduct = async (id, updatedProduct) => {
    try {
        const response = await fetch(`${API_URL}/products/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedProduct)
        });
        return response.json();
    } catch (error) {
        console.error('Error al actualizar el producto:', error);
        throw error;
    }
};

export const deleteProduct = async (id) => {
    try {
        const response = await fetch(`${API_URL}/products/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
        return response.json();
    } catch (error) {
        console.error('Error al eliminar el producto:', error);
        throw error;
    }
};
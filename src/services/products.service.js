const API_URL = import.meta.env.VITE_API_URL;

export const getProducts = async () => {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}

export const createProduct = async (product) => {
    try {
        const response = await fetch(API_URL, {
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
        const response = await fetch(`${API_URL}/${id}`, {
            method: "PATCH",
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
        const response = await fetch(`${API_URL}/${id}`, {
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
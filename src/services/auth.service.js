import data from "../utils/data.json"

const API_USER_URL = import.meta.env.VITE_API_USER_URL;

export const registerUser = async (name, email, password) => {
    const existingUser = await getUserByEmail(email);

    if (existingUser) {
        throw new Error("El email ya está registrado");
    }

    try {
        const response = await fetch(`${API_USER_URL}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, password, role: "" })
        });
        return response.json();
    } catch (error) {
        console.error("Error al registrar el usuario:", error);
        throw error;
    }
};

export const getUsers = async () => {
    try {
        const response = await fetch(`${API_USER_URL}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        return response.json();
    } catch (error) {
        console.error("Error al obtener los usuarios:", error);
        throw error;
    }
}

export const getValidUser = async (email, password) => {
    const response = await fetch(`${API_USER_URL}?email=${email}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    const user = await response.json();

    const isValid = user && user[0].password === password;

    return isValid ? user : null;
};

export const getUserByEmail = async (email) => {
    const response = await fetch(`${API_USER_URL}?email=${email}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    const user = await response.json();
    return user != "Not found" ? true : false;
};

export const deleteUser = async (id) => {
    try {
        const response = await fetch(`${API_USER_URL}/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
        return response.json();
    } catch (error) {
        console.error("Error al eliminar el usuario:", error);
        throw error;
    }
};

export const changePassword = async (id, oldPassword, newPassword) => {

    const userResponse = await getUsers();
    const user = userResponse.find((user) => user.id === id);

    if (!user || user.password !== oldPassword) {
        throw new Error("Contraseña antigua incorrecta");
    }

    try {
        const response = await fetch(`${API_USER_URL}/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ password: newPassword })
        });
        return response.json();
    } catch (error) {
        console.error("Error al cambiar la contraseña:", error);
        throw error;
    }
};

export const changeRole = async (id, newRole) => {
    try {
        const response = await fetch(`${API_USER_URL}/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ role: newRole })
        });
        return response.json();
    } catch (error) {
        console.error("Error al cambiar el rol:", error);
        throw error;
    }
};

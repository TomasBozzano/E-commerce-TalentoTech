const API_URL = import.meta.env.VITE_API_URL;

export const registerUser = async (name, email, password, role) => {
    const existingUser = await getUserByEmail(email);

    if (existingUser) {
        throw new Error("El email ya está registrado");
    }

    if (!role) {
        role = "user";
    }

    try {
        const response = await fetch(`${API_URL}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, password, role })
        });
        return response.json();
    } catch (error) {
        console.error("Error al registrar el usuario:", error);
        throw error;
    }
};

export const getUsers = async () => {
    try {
        const response = await fetch(`${API_URL}/users`, {
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
    const response = await fetch(`${API_URL}/users?email=${email}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    const user = await response.json();

    const isValid = user && user[0].password === password;

    sessionStorage.setItem("auth", JSON.stringify(isValid ? user[0] : null));

    return isValid ? user : null;
};

export const getUserByEmail = async (email) => {
    const response = await fetch(`${API_URL}/users?email=${email}`, {
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
        const response = await fetch(`${API_URL}/users/${id}`, {
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
        const response = await fetch(`${API_URL}/users/${id}`, {
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
    const user = await getUsers();
    const existingUser = user.find((user) => user.id === id);

    if (!existingUser) {
        throw new Error("Usuario no encontrado");
    }

    const updatedUser = { ...existingUser, role: newRole };

    try {
        const response = await fetch(`${API_URL}/users/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ ...updatedUser })
        });
        return response.json();
    } catch (error) {
        console.error("Error al cambiar el rol:", error);
        throw error;
    }
};

export const getUserByMail = async (email) => {
    try {
        const response = await fetch(`${API_URL}/users?email=${email}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const user = await response.json();
        return user[0];
    } catch (error) {
        console.error("Error al obtener el usuario por email:", error);
        throw error;
    }
};
import data from "../utils/data.json"

export const validateUserSession = (email, password) => {
    const user = data.find(user => user.email === email && user.password === password); // Simulate getting the logged-in user
    return user;
};

export const me = (email, password) => {
    const user = data.find(user => user.email === email && user.password === password);
    return user ? user : null;
};
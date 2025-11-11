export const formatEmail = (email) => {
    const name = email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1);
    return name;
};
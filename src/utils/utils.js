// Formatear el nombre de usuario a partir del correo electrónico
export const formatEmail = (email) => {
    const name = email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1);
    return name;
};

// Carga de datos de Box
export const valueSelect = [
    { key: '0', value: '', label: 'Seleccione una opción' },
    { key: '1', value: 'admin', label: 'ADMIN' },
    { key: '2', value: 'user', label: 'USER' }
  ];
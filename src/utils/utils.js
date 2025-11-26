// Formatear el nombre de usuario a partir del correo electrónico
export const formatEmail = (email) => {
    const name = email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1);
    return name;
};

//formatear a numeros argentinos
export const formatNumber = (number) => {
    return new Intl.NumberFormat('es-AR').format(number);
}

// Carga de datos de Box
export const valueSelect = [
    { key: '0', value: '', label: 'Seleccione una opción' },
    { key: '1', value: 'admin', label: 'ADMIN' },
    { key: '2', value: 'user', label: 'USER' }
];

// Carga de provincias de Argentina
export const loadProvince = [
    { key: '0', value: '', label: 'Seleccione una opción' },
    { key: '1', value: 'Buenos Aires', label: 'Buenos Aires' },
    { key: '2', value: 'Catamarca', label: 'Catamarca' },
    { key: '3', value: 'Chaco', label: 'Chaco' },
    { key: '4', value: 'Chubut', label: 'Chubut' },
    { key: '5', value: 'Córdoba', label: 'Córdoba' },
    { key: '6', value: 'Corrientes', label: 'Corrientes' },
    { key: '7', value: 'Entre Ríos', label: 'Entre Ríos' },
    { key: '8', value: 'Formosa', label: 'Formosa' },
    { key: '9', value: 'Jujuy', label: 'Jujuy' },
    { key: '10', value: 'La Pampa', label: 'La Pampa' },
    { key: '11', value: 'La Rioja', label: 'La Rioja' },
    { key: '12', value: 'Mendoza', label: 'Mendoza' },
    { key: '13', value: 'Misiones', label: 'Misiones' },
    { key: '14', value: 'Neuquén', label: 'Neuquén' },
    { key: '15', value: 'Río Negro', label: 'Río Negro' },
    { key: '16', value: 'Salta', label: 'Salta' },
    { key: '17', value: 'San Juan', label: 'San Juan' },
    { key: '18', value: 'San Luis', label: 'San Luis' },
    { key: '19', value: 'Santa Cruz', label: 'Santa Cruz' },
    { key: '20', value: 'Santa Fe', label: 'Santa Fe' },
    { key: '21', value: 'Santiago del Estero', label: 'Santiago del Estero' },
    { key: '22', value: 'Tierra del Fuego', label: 'Tierra del Fuego' },
    { key: '23', value: 'Tucumán', label: 'Tucumán' }
]
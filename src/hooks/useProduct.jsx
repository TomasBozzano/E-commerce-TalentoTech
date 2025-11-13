import { useState, useEffect } from "react";

export const useProduct = (product) => {

    const [description, setDescription] = useState(product?.descripcion ?? "");
    const [name, setName] = useState(product?.nombre ?? "");
    const [price, setPrice] = useState(product?.precio ?? "");
    const [category, setCategory] = useState(product?.categoria ?? "");
    const [stock, setStock] = useState(product?.stock ?? "");
    const [avatar, setAvatar] = useState(product?.avatar ?? "");
    const [errors, setErrors] = useState({});

    useEffect(() => {
        setDescription(product?.descripcion ?? "");
        setName(product?.nombre ?? "");
        setPrice(product?.precio ?? "");
        setCategory(product?.categoria ?? "");
        setStock(product?.stock ?? "");
        setAvatar(product?.avatar ?? "");
        setErrors({});
    }, [product]);

    const writtedDescription = (e) => {
        const newDescription = e.target.value;
        setDescription(newDescription);
        // limpiar error asociado
        setErrors(prev => {
            const copy = { ...prev };
            delete copy.description;
            delete copy.fields;
            return copy;
        });
    }

    const writtenName = (e) => {
        const newName = e.target.value;
        setName(newName);
        setErrors(prev => { const copy = { ...prev }; delete copy.name; delete copy.fields; return copy; });
    }
    const writtenPrice = (e) => {
        const newPrice = e.target.value;
        setPrice(newPrice);
        setErrors(prev => { const copy = { ...prev }; delete copy.price; delete copy.fields; return copy; });
    }

    const writtenCategory = (e) => {
        const newCategory = e.target.value;
        setCategory(newCategory);
        setErrors(prev => { const copy = { ...prev }; delete copy.category; delete copy.fields; return copy; });
    }

    const writtenStock = (e) => {
        const newStock = e.target.value;
        setStock(newStock);
        setErrors(prev => { const copy = { ...prev }; delete copy.stock; delete copy.fields; return copy; });
    }
    const writtenAvatar = (e) => {
        const newAvatar = e.target.value;
        setAvatar(newAvatar);
        setErrors(prev => { const copy = { ...prev }; delete copy.avatar; delete copy.fields; return copy; });
    }

    const validateFields = () => {
        const newErrors = {};
        if (!name || name.toString().trim() === "") newErrors.name = "Nombre requerido";
        if (!category || category.toString().trim() === "") newErrors.category = "Categoría requerida";
        if (!avatar || avatar.toString().trim() === "") newErrors.avatar = "Avatar requerido";
        if (!description || description.toString().trim() === "") newErrors.description = "Descripción requerida";

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    }

    const handleReset = () => {
        setDescription("");
        setName("");
        setPrice("");
        setCategory("");
        setStock("");
        setAvatar("");
        setErrors({});
    }

    const validateNumberFields = () => {
        const newErrors = {};
        const parsedPrice = parseFloat(String(price).replace(',', '.'));
        const parsedStock = parseFloat(String(stock).replace(',', '.'));

        if(parsedPrice === 0) newErrors.price = "El precio no puede ser cero.";
        if(parsedStock === 0) newErrors.stock = "El stock no puede ser cero.";

        if (isNaN(parsedPrice)) newErrors.price = "Por favor, ingrese un precio numérico válido.";
        if (isNaN(parsedStock)) newErrors.stock = "Por favor, ingrese un stock numérico válido.";

        setErrors(prev => ({ ...prev, ...newErrors }));

        return Object.keys(newErrors).length === 0;
    }

    const changeNumberFields = (number) => {
        const parsedNumber = parseFloat(String(number).replace(',', '.'));
        return parsedNumber;
    }

    const addComNumber = (text) =>{
        return Number(text).toLocaleString("es-AR")
    }

    return {
        errors,
        description,
        name,
        price,
        category,
        stock,
        avatar,
        addComNumber,
        writtedDescription,
        writtenName,
        writtenPrice,
        writtenCategory,
        writtenStock,
        writtenAvatar,
        validateFields,
        handleReset,
        validateNumberFields,
        changeNumberFields,
    }

}